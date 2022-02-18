document.getElementById('login-submit').addEventListener('click',function(){

const emailField = document.getElementById('user-email')
const userEmail = emailField.value;
console.log(userEmail);


// get user password 
const passwordField = document.getElementById('user-password');
const userPassword = passwordField.value;

if(userEmail == 'sontan@gmail.com' && userPassword == 'secret'){
    window.location.href = 'banking.html';

}

})
// document.getElementById('deposit-button').addEventListener('click',function(){

// const depositInput = document.getElementById('deposit-input');
// const depositAmountText = depositInput.value;
// const depositAmount = parseFloat(depositAmountText);


// // get current deposit 
// const depositTotal = document.getElementById('deposit-total');
// const depositTotalText = depositTotal.innerText;
// const previousDepositTotal = parseFloat(depositTotalText)
// depositTotal.innerText = depositAmount + previousDepositTotal ;
// // console.log(depositTotalText);



// // updateBalance 
// const balanceTotal = document.getElementById('balance-total')
// const balanceTotalText = balanceTotal.innerText;

// const previousBalanceTotal = parseFloat(balanceTotalText);
// balanceTotal.innerText = previousBalanceTotal + depositAmount;





// // clear input field 
// depositInput.value ='';
// })
// // withdraw 
// document.getElementById('withdraw-button').addEventListener('click',function(){

// const withdrawInput = document.getElementById('withdraw-input');
// const withdrawAmountText = withdrawInput.value;
// const withdrawAmount = parseFloat(withdrawAmountText);

// // update withdraw total  

// const withdrawTotal = document.getElementById('withdraw-total');
// const previouseWithdrawTotalText = withdrawTotal.innerText;
// const previousWithdrawTotal = parseFloat(previouseWithdrawTotalText);
// withdrawTotal.innerText = withdrawAmount + previousWithdrawTotal;
// // update balance after withdraw 
// const balanceTotal = document.getElementById('balance-total');
// const balanceTotalText = balanceTotal.innerText;
// const previousBalanceTotal = parseFloat(balanceTotalText);
// balanceTotal.innerText = previousBalanceTotal - withdrawAmount;

// // clear withdraw input 

// withdrawInput.value ='';

// })
