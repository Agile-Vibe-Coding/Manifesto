import { test, expect } from '@playwright/test'

test.describe('navigation bar scroll behaviour', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
    await page.waitForLoadState('networkidle')
    await page.evaluate(() => window.scrollTo(0, 0))
    await page.waitForTimeout(100)
  })

  test('nav is hidden at the top of the page', async ({ page }) => {
    const nav = page.locator('.VPNav')
    const box = await nav.boundingBox()
    expect(box).not.toBeNull()
    // translateY(-100%) moves the nav above the viewport: bottom edge at or above y=0
    expect(box!.y + box!.height).toBeLessThanOrEqual(0)
  })

  test('nav becomes visible after scrolling down', async ({ page }) => {
    await page.mouse.wheel(0, 300)
    await page.waitForTimeout(400)

    const nav = page.locator('.VPNav')
    const box = await nav.boundingBox()
    expect(box).not.toBeNull()
    expect(box!.y).toBeGreaterThanOrEqual(0)
  })

  test('nav hides again when scrolling back to the top', async ({ page }) => {
    await page.mouse.wheel(0, 300)
    await page.waitForTimeout(400)
    await page.evaluate(() => window.scrollTo(0, 0))
    await page.waitForTimeout(400)

    const nav = page.locator('.VPNav')
    const box = await nav.boundingBox()
    expect(box).not.toBeNull()
    expect(box!.y + box!.height).toBeLessThanOrEqual(0)
  })

  test('nav inline transform is set correctly at top', async ({ page }) => {
    const transform = await page.locator('.VPNav').evaluate(
      el => (el as HTMLElement).style.transform
    )
    expect(transform).toBe('translateY(-100%)')
  })

  test('nav inline transform is removed after scrolling', async ({ page }) => {
    await page.mouse.wheel(0, 300)
    await page.waitForTimeout(400)

    const transform = await page.locator('.VPNav').evaluate(
      el => (el as HTMLElement).style.transform
    )
    // Browser may normalise translateY(0) to translateY(0px)
    expect(transform).toMatch(/^translateY\(0/)
  })
})
