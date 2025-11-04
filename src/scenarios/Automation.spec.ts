import { test, expect } from '@playwright/test';
import { ai } from '@zerostep/playwright';

test.describe('Dauane Automation Exercise End-to-End Tests', () => {
  const baseURL = 'https://automationexercise.com';

  test('Search for a product', async ({ page }) => {
    await page.goto(baseURL);
    await page.click('a[href="/products"]');
    await expect(page).toHaveURL(/products/);
  });

  test('Add product to cart', async ({ page }) => {
    await page.goto(baseURL);
    await page.click('a[data-product-id="1"]');
    await expect(
      page.locator('h4.modal-title:has-text("Added!")')
    ).toBeVisible();
  });

  test('zerostep example for automationexercise', async ({ page }) => {
    await page.goto('https://automationexercise.com/');
    await page.click('a[href="/products"]');
    await page.click('a[data-product-id="1"]');
    await expect(
      page.locator('h4.modal-title:has-text("Added!")')
    ).toBeVisible();
  });
});
