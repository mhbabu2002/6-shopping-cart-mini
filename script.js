function productChangeHandler(product, isIncrease){
    const productInput = document.getElementById(product +'-count');
    const productCount = parseInt(productInput.value);
    // const productNewCount = productCount - 1;
    let productNewCount = 0;
    if( isIncrease == true ){
       productNewCount = productCount + 1;
    }if( isIncrease == false && productCount > 0 ){
       productNewCount = productCount - 1;
    }
    productInput.value= productNewCount;
    // const totalCase = productNewCount * 59;
    let productTotal = 0;
    if( product == 'phone' ){
       productTotal = productNewCount * 1219;
    }if(product == 'case' ){
       productTotal = productNewCount * 59;
    }
    document.getElementById( product +'-total').innerText = '$' + productTotal;
    productCalculate();
 };
 function productCalculate(){
    const phoneInput = document.getElementById('phone-count');
    const phoneCount = parseInt(phoneInput.value);

    const caseInput = document.getElementById('case-count');
    const caseCount = parseInt(caseInput.value);

    const total = phoneCount * 1219 + caseCount * 59;
    document.getElementById('total').innerText = '$' + total

    const taxTotal = Math.round(total * 0.1);
    document.getElementById('tax-total').innerText = '$' + taxTotal;

    const grandTotal = total + taxTotal;
    document.getElementById('grand-total').innerText = '$' + grandTotal;
 };