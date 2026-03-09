import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { InventoryPage } from '../../pages/InventoryPage';
import { CartPage } from '../../pages/CartPage';
import { CheckoutPage } from '../../pages/CheckoutPage';

test.describe('E2E: Full Purchase Checkout Flow', () => {
  test('should complete a full purchase from login to order confirmation', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);

    await loginPage.navigate();
    await loginPage.login('standard_user', 'secret_sauce');

    await expect(page).toHaveURL('/inventory.html');

    await inventoryPage.addFirstItemToCart();
    await expect(inventoryPage.cartBadge).toHaveText('1');

    await inventoryPage.goToCart();
    await expect(page).toHaveURL('/cart.html');
    await expect(cartPage.cartItems).toHaveCount(1);

    await cartPage.proceedToCheckout();
    await expect(page).toHaveURL('/checkout-step-one.html');

    await checkoutPage.fillShippingInfo('Danilo', 'Abramowicz', '01310-100');
    await expect(page).toHaveURL('/checkout-step-two.html');

    await checkoutPage.finishOrder();
    await expect(page).toHaveURL('/checkout-complete.html');
    await expect(checkoutPage.confirmationHeader).toHaveText('Thank you for your order!');
  });
});
