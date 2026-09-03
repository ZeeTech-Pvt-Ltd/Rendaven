import { chromium } from 'file:///C:/Users/samee/node_modules/playwright/index.mjs'
const errors = []
const browser = await chromium.launch()
const context = await browser.newContext()
const page = await context.newPage()
page.on('pageerror', (e) => errors.push('pageerror: ' + e.message.slice(0, 120)))
page.on('requestfailed', (r) => errors.push('failed: ' + r.url().slice(0, 100)))

// 1. Direct load of /product on slow connection: fallback → content
const cdp = await context.newCDPSession(page)
await cdp.send('Network.enable')
await cdp.send('Network.emulateNetworkConditions', { offline: false, latency: 400, downloadThroughput: 300 * 1024, uploadThroughput: 100 * 1024 })
await page.goto('http://localhost:4173/product', { waitUntil: 'domcontentloaded' })
await page.waitForTimeout(400)
const out = {}
out.fallbackShown = await page.locator('.page-loading').count()
await page.waitForSelector('.page-hero h1', { timeout: 25000 })
out.productContent = await page.locator('.page-hero h1').innerText()

// 2. Fast network: hover About Us → click → instant
await cdp.send('Network.emulateNetworkConditions', { offline: false, latency: 30, downloadThroughput: 10 * 1024 * 1024, uploadThroughput: 5 * 1024 * 1024 })
await page.goto('http://localhost:4173/', { waitUntil: 'networkidle' })
await page.waitForTimeout(500)
await page.locator('.site-header__nav a', { hasText: 'About Us' }).hover()
await page.waitForTimeout(1000)
await page.locator('.site-header__nav a', { hasText: 'About Us' }).click()
await page.waitForTimeout(150)
out.aboutInstant = await page.locator('.page-hero h1').innerText().catch(() => 'SLOW')

// 3. Direct loads of the other reported pages
for (const p of ['/about-us', '/contact-us']) {
  await page.goto(`http://localhost:4173${p}`, { waitUntil: 'networkidle' })
  await page.waitForTimeout(300)
  out[p] = await page.locator('h1').first().innerText().catch(() => 'MISSING')
}
console.log(JSON.stringify(out, null, 2))
console.log('ERRORS:', errors.length ? errors.slice(0, 6) : 'none')
await browser.close()
