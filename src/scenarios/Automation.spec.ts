import { test, expect } from '@playwright/test';
import { ai } from '@zerostep/playwright';

test.describe('Automation Exercise End-to-End Tests', () => {
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

test('Add product to cart using ZeroStep AI', async ({ page }) => {
    await page.goto('https://automationexercise.com/');

    await ai('Click on the "Products" link', { page, test });

    await ai('Click the "Add to cart" button for the first product', { page, test });

    const isModalVisible = await ai('Is the "Added!" confirmation modal visible?', { page, test });
    

    expect(isModalVisible).toBe(false);
  });

  test('Login with invalid credentials', async ({ page }) => {
    await page.goto(baseURL);

    await page.click('a[href="/login"]');
    await expect(page).toHaveURL(/login/);

    await page.fill('input[data-qa="login-email"]', 'fakeuser@example.com');
    await page.fill('input[data-qa="login-password"]', 'wrongpassword');
    await page.click('button[data-qa="login-button"]');

    await expect(page.locator('p:has-text("Your email or password is incorrect!")')).toBeVisible();
  });
});
