
document.addEventListener('DOMContentLoaded', () => {
    const balanceElement = document.getElementById('balance');
    const totalAmountElement = document.getElementById('total-amount');
    const currentBalanceElement = document.getElementById('current-balance');

    // Load balance from localStorage
    const storedBalance = parseFloat(localStorage.getItem('balance')) || 0;
    balanceElement.textContent = storedBalance.toFixed(2);

    // Load expenditure from localStorage
    const transactions = JSON.parse(localStorage.getItem('transactions')) || [];
    const totalExpense = transactions.reduce((total, tx) => total + parseFloat(tx.amount), 0);
    totalAmountElement.textContent = totalExpense.toFixed(2);

    // Set current balance
    const currentBalance = storedBalance - totalExpense;
    currentBalanceElement.textContent = currentBalance.toFixed(2);
});

function addMoney() {
    const input = document.getElementById('moneyInput');
    const balanceElement = document.getElementById('balance');
    const currentBalanceElement = document.getElementById('current-balance');
    const totalAmountElement = document.getElementById('total-amount');

    const currentBalance = parseFloat(balanceElement.textContent) || 0;
    const amountToAdd = parseFloat(input.value);

    if (!isNaN(amountToAdd)) {
        const newBalance = currentBalance + amountToAdd;
        balanceElement.textContent = newBalance.toFixed(2);
        localStorage.setItem('balance', newBalance.toFixed(2));

        // Recalculate current balance
        const totalExpense = parseFloat(totalAmountElement.textContent) || 0;
        currentBalanceElement.textContent = (newBalance - totalExpense).toFixed(2);

        input.value = '';
    } else {
        alert("Please enter a valid number.");
    }
}

function addExpense() {
    const input = document.getElementById('expenseInput');
    const totalAmountElement = document.getElementById('total-amount');
    const currentBalanceElement = document.getElementById('current-balance');
    const balanceElement = document.getElementById('balance');

    const amount = parseFloat(input.value);
    if (!isNaN(amount)) {
        const transactions = JSON.parse(localStorage.getItem('transactions')) || [];
        transactions.push({ amount: amount });
        localStorage.setItem('transactions', JSON.stringify(transactions));

        // Update total expense
        const totalExpense = transactions.reduce((total, tx) => total + parseFloat(tx.amount), 0);
        totalAmountElement.textContent = totalExpense.toFixed(2);

        // Update current balance
        const balance = parseFloat(balanceElement.textContent) || 0;
        currentBalanceElement.textContent = (balance - totalExpense).toFixed(2);

        input.value = '';
    } else {
        alert("Please enter a valid expense amount.");
    }
}

