import { test, expect } from '@playwright/test';

test.describe('Homepage', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should have the correct title', async ({ page }) => {
    await expect(page).toHaveTitle(/Astro 4.0/);
  });

  test('should have gradient orbs visible', async ({ page }) => {
    // Check for orb elements
    const orbs = await page.$$('[style*="radial-gradient"]');
    expect(orbs.length).toBeGreaterThan(0);
  });

  test('should have cards with backdrop blur', async ({ page }) => {
    // Check for cards with backdrop blur
    const cards = await page.$$('.backdrop-blur-sm');
    expect(cards.length).toBeGreaterThan(0);
  });

  test('should be responsive', async ({ page }) => {
    // Test mobile view
    await page.setViewportSize({ width: 375, height: 667 });
    const mobileMenu = await page.$('[aria-label="Menu"]');
    expect(mobileMenu).toBeTruthy();

    // Test desktop view
    await page.setViewportSize({ width: 1280, height: 800 });
    const desktopNav = await page.$('nav');
    expect(desktopNav).toBeTruthy();
  });

  test('should handle dark mode toggle', async ({ page }) => {
    // Find and click dark mode toggle
    const darkModeToggle = await page.$('[aria-label="Toggle dark mode"]');
    expect(darkModeToggle).toBeTruthy();
    
    if (darkModeToggle) {
      await darkModeToggle.click();
      // Check if dark mode class is applied
      const isDarkMode = await page.$('html.dark');
      expect(isDarkMode).toBeTruthy();
    }
  });
});
