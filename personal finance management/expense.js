document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector('.forms');
    
    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const date = document.getElementById('date').value;
        const description = document.getElementById('descp').value;
        const category = document.getElementById('cat').value;
        const amount = document.getElementById('amount').value;

        const expense = { date, description, category, amount };

        const transactions = JSON.parse(localStorage.getItem('transactions')) || [];
        transactions.push(expense);

        localStorage.setItem('transactions', JSON.stringify(transactions));

        form.reset();

        alert("Expenditure added successfully!");
        window.location.href = 'transaction.html';
    });
});
