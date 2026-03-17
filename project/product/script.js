const unitPrice = 1000;

const quantityInput = document.getElementById("quantity");
const totalField = document.getElementById("total");

quantityInput.addEventListener("input", function(){

    let quantity = parseInt(quantityInput.value);

    if(quantity < 0){
        quantity = 0;
        quantityInput.value = 0;
        alert("Quantity cannot be negative");
    }

    let total = unitPrice * quantity;

    totalField.value = total;

    if(total > 1000){
        alert("Congratulations! You are eligible for a gift coupon.");
    }

});