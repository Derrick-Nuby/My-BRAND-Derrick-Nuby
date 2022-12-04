let fname = document.getElementById('fname');
let lname  = document.getElementById('lname');
let email = document.getElementById('email');
let pwd = document.getElementById('pwd');
let errors = document.getElementById('errors');
let fill = document.getElementById('fill');
let hidden = document.getElementById('hidden');


let loginBtn = document.getElementById('logIntoAccount');//loginbutton


// Finding our account saved
if (localStorage.getItem('account') != null) {
    var account = JSON.parse(localStorage.getItem('account'));
} else {
    var account = [];
}

let createAccount = () => {
    if (fname.value == '' || lname.value == '' || email.value == '' || pwd.value == '') {
        fill.style.display = 'block';
    } else {
        // Saving data into localStorage
        account.push({
            FirstName: fname.value,
            LastName: lname.value,
            Email: email.value,
            pass: pwd.value
        })
        localStorage.setItem('account', JSON.stringify(account));
        window.location.href = './login.html';
    }
}

// Adding event on login button
loginBtn.addEventListener('click', (e) => {
    e.preventDefault();
    login();
});

// Login function
// admin username: master ..password: master
let login = ()=> {
    if (email.value == '' || pwd.value == '') {
        fill.style.display = 'block';
    } else {
        // Loging master as the admin
        if (email.value == 'master@main.com' && pwd.value == 'master') {
            document.cookie = `admin=master; exprires=Dec 25 2030 00:00:00; path='/'`;
            window.location.href = '../admin/index.html';
        } else { // If user is not admin, search into our database
            for (let person of account) {
                if (person.Email == email.value && person.pass == pwd.value) {
                    document.cookie = `user= ${person.FirstName}; expires= Dec 20 2022 00:00:00`;
                    window.location.href = './blogpost.html';
                    hidden.style.display = 'block';
                    break;
                } else {
                    errors.style.display = 'block';
                    fill.style.display = 'none';
                }
            }
        }
    }
}