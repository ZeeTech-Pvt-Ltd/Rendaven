import { chromium } from 'file:///C:/Users/samee/node_modules/playwright/index.mjs'
const logs = []
const browser = await chromium.launch()
const page = await browser.newPage()
page.on('pageerror', (e) => logs.push('pageerror: ' + e.message.slice(0, 250)))
page.on('console', (m) => { if (m.type() === 'error') logs.push('console: ' + m.text().slice(0, 250)) })
page.on('requestfailed', (r) => logs.push('failed: ' + r.url().slice(0, 120)))
await page.goto('http://localhost:4173/product', { waitUntil: 'networkidle' })
await page.waitForTimeout(1500)
const out = {}
out.h1 = await page.locator('.page-hero h1').innerText().catch(() => 'MISSING')
out.loading = await page.locator('.page-loading').count()
out.errorReload = await page.locator('.page-loading .btn').count()
out.mainHTML = (await page.locator('main').innerHTML()).slice(0, 300)
console.log(JSON.stringify(out, null, 2))
console.log('LOGS:', logs.length ? logs.slice(0, 8) : 'none')
await browser.close()
