//Get the values
let bestPrice = stringToFloatConversion("best-price");
let memoryCost = stringToFloatConversion("memory-cost");
let storageCost = stringToFloatConversion("storage-cost");
let deliveryCost = stringToFloatConversion("delivery-cost");
let totalPrice = stringToFloatConversion("total-price");

// To convert the string values into float number
function stringToFloatConversion(id) {
    const stringNum = document.getElementById(id).innerText;
    const num = parseFloat(stringNum);
    return num;
}

//To set the value of the prices
function setValue(id, value) {
    document.getElementById(id).innerText = value;
}

//To set selected button colour
function setButtonStyle(id) {
    document.getElementById(id).style.color = 'white';
    document.getElementById(id).style.backgroundColor = 'black';
}

//To reset unselected button colour
function resetButtonStyle(id) {
    document.getElementById(id).style.color = 'black';
    document.getElementById(id).style.backgroundColor = 'white';
}

//Price Calculation
function buttonEventHandler(feature, category, price) {
    if (feature == 'memory') {

        memoryCost = price;
        setValue('memory-cost', memoryCost);

        if (category == '8GB') {
            setButtonStyle('memory-8GB');
            resetButtonStyle('memory-16GB');
        } else {
            setButtonStyle('memory-16GB');
            resetButtonStyle('memory-8GB');
        }

    } else if (feature == 'storage') {

        storageCost = price;
        setValue('storage-cost', storageCost);

        if (category == '256GB') {
            setButtonStyle('storage-256GB');
            resetButtonStyle('storage-512GB');
            resetButtonStyle('storage-1TB');
        } else if (category == '512GB') {
            resetButtonStyle('storage-256GB');
            setButtonStyle('storage-512GB');
            resetButtonStyle('storage-1TB');
        } else {
            resetButtonStyle('storage-256GB');
            resetButtonStyle('storage-512GB');
            setButtonStyle('storage-1TB');
        }

    } else if (feature == 'delivery') {

        deliveryCost = price;
        setValue('delivery-cost', deliveryCost);

        if (category == 'free') {
            setButtonStyle('delivery-free');
            resetButtonStyle('delivery-fast');
        } else {
            resetButtonStyle('delivery-free');
            setButtonStyle('delivery-fast');
        }
    }

    totalPrice = bestPrice + memoryCost + storageCost + deliveryCost;
    setValue('total-price', totalPrice);
    setValue('net-total-price', totalPrice);
}

//Promo code validation and discount price calculation
function codeValidation(status) {
    let netTotalPrice = stringToFloatConversion("net-total-price");
    let promoCode = document.getElementById("promo-code").value;

    if (status == false && promoCode == 'stevekaku') {
        netTotalPrice = totalPrice - (totalPrice * 20) / 100;
        setValue('net-total-price', netTotalPrice);
        status = true;
    } else {
        alert("Invalid Promo Code or using twice!");
    }
    document.getElementById("promo-code").value = "";
}
