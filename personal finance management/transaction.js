document.addEventListener('DOMContentLoaded', () => {
        const tableBody = document.querySelector('#transaction-table tbody');
        let transactions = JSON.parse(localStorage.getItem('transactions')) || [];

        function renderTable() {
            tableBody.innerHTML = ''; // Clear current rows

            if (transactions.length === 0) {
                const row = tableBody.insertRow();
                const cell = row.insertCell(0);
                cell.colSpan = 5;
                cell.textContent = "No transactions found.";
                cell.style.textAlign = "center";
                return;
            }

            transactions.forEach((tx, index) => {
                const row = tableBody.insertRow();
                row.innerHTML = `
                    <td>${tx.date}</td>
                    <td>${tx.description}</td>
                    <td>${tx.category}</td>
                    <td>${tx.amount}</td>
                    <td><button class="delete-btn" data-index="${index}">Delete</button></td>
                `;
            });

        const deleteButtons = document.querySelectorAll('.delete-btn');
        deleteButtons.forEach(btn => {
        btn.addEventListener('click', function () {
        const index = this.getAttribute('data-index');
        transactions.splice(index, 1); // Remove the item
        localStorage.setItem('transactions', JSON.stringify(transactions)); // Update storage
        renderTable(); // Re-render the table
        updateTotalAmount(); // Update total amount
      });
    });

    updateTotalAmount(); // Update total amount on initial render
  }

  function updateTotalAmount() {
    const totalAmount = transactions.reduce((total, tx) => total + parseFloat(tx.amount), 0);
    document.getElementById('total-amount').textContent = `₹${totalAmount.toLocaleString()}`;
  }

  // Initial render
  renderTable();
});