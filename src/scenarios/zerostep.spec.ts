import { test, expect } from '@playwright/test';
import { ai } from '@zerostep/playwright';

test('Add product to cart using ZeroStep AI', async ({ page }) => {
    await page.goto('https://automationexercise.com/');

    await ai('Click on the "Products" link', { page, test });

    await ai('Click the "Add to cart" button for the first product', { page, test });

    const isModalVisible = await ai('Is the "Added!" confirmation modal visible?', { page, test });
    

    expect(isModalVisible).toBe(false);
  });