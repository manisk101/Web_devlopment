document.getElementById('btn').addEventListener('click', function () {
    const name = document.getElementById('name').value.trim();
    const mobno = document.getElementById('mobno').value.trim();
    const user = document.getElementById('user').value.trim();
    const pswd = document.getElementById('password').value;
    const repswd = document.getElementById('repassword').value;
    document.getElementById('mismatch').style.display = "none";
    

    if (name && mobno && user && pswd && repswd) {
        if (pswd === repswd) {
            const register = JSON.parse(localStorage.getItem('register') || '[]');

            const userExists = register.some(entry => entry.user === user || entry.mobno===mobno);
            if (userExists) {
                alert('Username already exists.');
                return;
            }


            register.push({ name, mobno, user, pswd });
            localStorage.setItem('register', JSON.stringify(register));

            alert('Registered Successfully!');

            // Clear all fields
            document.getElementById('name').value = '';
            document.getElementById('mobno').value = '';
            document.getElementById('user').value = '';
            document.getElementById('password').value = '';
            document.getElementById('repassword').value = '';
        } else {
            document.getElementById('mismatch').style.display = "inline";
        }
    } else {
        alert("Please fill out the entire form.");
    }
});


// login page




