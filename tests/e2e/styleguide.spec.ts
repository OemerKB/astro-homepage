import { test, expect } from '@playwright/test';

test.describe('Styleguide Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/styleguide');
  });

  test('should have correct title', async ({ page }) => {
    await expect(page).toHaveTitle(/Styleguide/);
  });

  test('should display all component sections', async ({ page }) => {
    // Check for main sections
    await expect(page.getByText('Typography')).toBeVisible();
    await expect(page.getByText('Colors')).toBeVisible();
    await expect(page.getByText('Buttons')).toBeVisible();
    await expect(page.getByText('Forms')).toBeVisible();
    await expect(page.getByText('Icons')).toBeVisible();
  });

  test('should have working navigation links', async ({ page }) => {
    const links = await page.getByRole('link').all();
    expect(links.length).toBeGreaterThan(0);

    // Test first link navigation
    const firstLink = links[0];
    const href = await firstLink.getAttribute('href');
    expect(href).toBeTruthy();
  });

  test('should render components correctly', async ({ page }) => {
    // Check if Features component is rendered
    await expect(page.locator('#features')).toBeVisible();
    
    // Check if Steps component is rendered
    await expect(page.locator('#steps')).toBeVisible();
    
    // Check if Testimonials component is rendered
    await expect(page.locator('#testimonials')).toBeVisible();
    
    // Check if FAQs component is rendered
    await expect(page.locator('#faqs')).toBeVisible();
  });

  test('should be responsive', async ({ page }) => {
    // Test mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    await expect(page.locator('main')).toBeVisible();

    // Test tablet viewport
    await page.setViewportSize({ width: 768, height: 1024 });
    await expect(page.locator('main')).toBeVisible();

    // Test desktop viewport
    await page.setViewportSize({ width: 1440, height: 900 });
    await expect(page.locator('main')).toBeVisible();
  });
});
