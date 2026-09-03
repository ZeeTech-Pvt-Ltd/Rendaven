import { chromium } from 'file:///C:/Users/samee/node_modules/playwright/index.mjs'
const errors = []
const browser = await chromium.launch()
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } })
page.on('console', (msg) => { if (msg.type() === 'error' && !msg.text().includes('ipapi') && !msg.text().includes('ERR_FAILED')) errors.push(msg.text().slice(0, 120)) })
page.on('pageerror', (err) => errors.push('pageerror: ' + err.message.slice(0, 120)))
await page.goto('http://localhost:5178/', { waitUntil: 'networkidle' })
await page.waitForTimeout(1200)
const out = {}
const loaded = await page.evaluate(() => Array.from(document.images).map((img) => ({ src: img.getAttribute('src'), ok: img.complete && img.naturalWidth > 0 })))
out.images = loaded
out.broken = loaded.filter((i) => !i.ok).map((i) => i.src)
out.heroImgOpacity = await page.locator('.hero__bg').evaluate((el) => getComputedStyle(el).opacity)
out.heroImgCovering = await page.locator('.hero__bg').evaluate((el) => { const r = el.getBoundingClientRect(); return r.width > 1400 && r.height > 500 })
out.footerBg = await page.locator('.site-footer').evaluate((el) => getComputedStyle(el).backgroundImage.slice(0, 80))
out.stepImgCount = await page.locator('.step-card__img').count()
out.photoAvatars = await page.locator('img.testi-card__avatar').count()
out.initialsAvatars = await page.locator('.testi-card__avatar:not(img)').count()
out.overflow = await page.evaluate(() => document.documentElement.scrollWidth <= document.documentElement.clientWidth + 1)
console.log(JSON.stringify(out, null, 2))
console.log('ERRORS:', errors.length ? errors : 'none')
await page.screenshot({ path: 'imgcheck.png', fullPage: true })
await browser.close()
