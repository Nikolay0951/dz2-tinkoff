const regularPurchases = 3000;
const increasedCashback = 5000;
const specialOffers = 7000;

const regularPersent = 0.01;
const increasedPercent = 0.05;
const specialPercent = 0.3;

const maxCashback = 3000;

const primaryCashback = (regularPurchases * regularPersent) + (increasedCashback * increasedPercent) + (specialOffers * specialPercent);
const totalCashback = primaryCashback > maxCashback ? maxCashback : primaryCashback;

console.log("Начислено бонусов: " + totalCashback);