const regularPurchases = 3000;
const increasedCashback = 5000;
const specialOffers = 7000;
const maxCashback = 3000;

const primaryCashback = (regularPurchases * 0.01) + (increasedCashback * 0.05) + (specialOffers * 0.3);
const totalCashback = primaryCashback > maxCashback ? maxCashback : primaryCashback;

console.log("Начислено бонусов: " +totalCashback);