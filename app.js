console.log('worked')

const regularPurchases = 3000;
const increasedCashback = 7000;
const specialOffers = 6000;

let primaryCashback;
let totalCashback;

primaryCashback = (regularPurchases * 0.01) + (increasedCashback * 0.05) + (specialOffers * 0.3);

if (primaryCashback > 3000) {
    totalCashback = 3000;
} else {
    totalCashback = primaryCashback;
}

console.log(totalCashback);