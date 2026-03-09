import { test } from '@playwright/test'

test('page screenshot', async ({ page }) => {
  await page.goto('/')
  await page.waitForLoadState('networkidle')
  await page.screenshot({ path: '/tmp/page-full.png', fullPage: true })
})
