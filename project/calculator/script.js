const TAX_RATE = 0.05;

const priceInput = document.getElementById('originalPrice');
const discountInput = document.getElementById('discountPercent');
const finalPriceDisplay = document.getElementById('finalPrice');

function calculatePrice() {
    let price = parseFloat(priceInput.value) || 0;
    let discount = parseFloat(discountInput.value) || 0;

    
    if (price < 0) {
        priceInput.value = 0;
        price = 0;
    }
    
    if (discount < 0) {
        discountInput.value = 0;
        discount = 0;
    } else if (discount > 100) {
        discountInput.value = 100;
        discount = 100;
    }

   
    const discountAmount = price * (discount / 100);
    const priceAfterDiscount = price - discountAmount;
    const taxAmount = priceAfterDiscount * TAX_RATE;
    const finalPrice = priceAfterDiscount + taxAmount;

   
    finalPriceDisplay.value = finalPrice.toFixed(2);

   
    if (finalPrice > 0 && finalPrice < 500) {
        
        setTimeout(() => {
            alert("Congratulations! You've unlocked a 'Budget Deal'!");
        }, 100);
    }
}


priceInput.addEventListener('input', calculatePrice);
discountInput.addEventListener('input', calculatePrice);