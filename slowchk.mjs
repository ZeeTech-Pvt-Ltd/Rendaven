import { chromium } from 'file:///C:/Users/samee/node_modules/playwright/index.mjs'
const browser = await chromium.launch()
const context = await browser.newContext()
const page = await context.newPage()

// 1. Direct visit to /product on a slow connection: fallback shows, then content
const cdp = await context.newCDPSession(page)
await cdp.send('Network.enable')
await cdp.send('Network.emulateNetworkConditions', {
  offline: false, latency: 400, downloadThroughput: 300 * 1024, uploadThroughput: 100 * 1024,
})
await page.goto('http://localhost:4173/product', { waitUntil: 'domcontentloaded' })
await page.waitForTimeout(600)
const out = {}
out.fallbackVisibleEarly = await page.locator('.page-loading').count()
await page.waitForSelector('.page-hero h1', { timeout: 20000 })
out.contentArrived = await page.locator('.page-hero h1').innerText()
out.fallbackGone = (await page.locator('.page-loading').count()) === 0

// 2. Hover prefetch: from home, hover "About Us" then click — content immediate
await cdp.send('Network.emulateNetworkConditions', { offline: false, latency: 40, downloadThroughput: 10 * 1024 * 1024, uploadThroughput: 5 * 1024 * 1024 })
await page.goto('http://localhost:4173/', { waitUntil: 'networkidle' })
await page.waitForTimeout(600)
const aboutLink = page.locator('.site-header__nav a', { hasText: 'About Us' })
await aboutLink.hover()
await page.waitForTimeout(900) // prefetch window
await aboutLink.click()
await page.waitForTimeout(120)
out.aboutAfterHoverPrefetch = await page.locator('.page-hero h1').innerText().catch(() => 'STILL LOADING')
console.log(JSON.stringify(out, null, 2))
await browser.close()
