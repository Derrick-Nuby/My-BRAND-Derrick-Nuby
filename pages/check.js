let fname = document.getElementById('fname');
let lname  = document.getElementById('lname');
let email = document.getElementById('email');
let pwd = document.getElementById('pwd');
let errors = document.getElementById('errors')
// let signbtn = document.getElementById('signbtn');

let loginBtn = document.getElementById('logIntoAccount');

if (localStorage.getItem('account') != null) {
    var account = JSON.parse(localStorage.getItem('account'));
} else {
    var account = [];
}


let createAccount = () => {
    if (fname.value == '' || lname.value == '' || pwd.value == '' || email.value == '') {
        console.log("please fill");
    } else {
        // Saving data into localStorage
        account.push({
            username: fname.value,
            lastname: lname.value,
            email: email.value,
            pass: pwd.value
        });
        localStorage.setItem('account', JSON.stringify(account));
    }
}

loginBtn.addEventListener('click', (e) => {
    e.preventDefault();
    login();
});

// 
// 
let login = ()=> {
    if (email.value == '' || pwd.value == '') {
        alert("please fill");
    } else {
        // Loging master as the admin
        if (email.value == 'master@main.com' && pwd.value == 'master') {
            document.cookie = `admin=master; exprires=Dec 25 2030 00:00:00; path='/'`;
            window.location.href = '../admin/index.html';
        } else { // If user is not admin, search into our database
            for (let person of account) {
                if (person.email == email.value && person.pass == pwd.value) {
                    document.cookie = `user= ${person.username}; expires= Dec 20 2022 00:00:00`;
                    window.location.href = './blog.html';
                    break;
                } else {
                    errors.style.display = 'block';
                }
            }
        }
    }
}