let Fname = document.getElementById("name");
let email =  document.getElementById("email");
let subject = document.getElementById("subject");
let mention =  document.getElementById("mention");
let realtext = document.getElementById('realtext');
let submit =  document.getElementById("subtton");
let table = document.getElementById("tbody");




window.addEventListener("load", (event) => {
    show();
  });


submit.addEventListener('click', (e) => {
    e.preventDefault();
    display();
});

let contacts = [];

function display () {
    contacts.push( {
        Fname: Fname.value,
        email: email.value,
        subject: subject.value,
        mention: mention.value,
        realtext: realtext.value
    });
    console.log(contacts);
    localStorage.setItem("allContacts", JSON.stringify(contacts));
}

function show () {
    var account = [];
    var account = JSON.parse(localStorage.getItem('allContacts'));
    

    // account.forEach(function (person) {
        table.innerHTML += `<tr>
        <td>${person.Fname}</td>
        <td><a href="mailto:${person.email}">${person.email}</a></td>
        <td>${person.subject}</td>
        <td>${person.realtext}</td>
    </tr>`
        
    //     ` <br>
    // <p>fname:    ${person.mention}  </p>
    // <p>phone: ${person.phone} </p>
    // <p>pass: ${person.pass} </p>`
    // });

    // users.forEach(function(person) {
      
    // items.innerHTML += `<h1> hello world </h1>
    // <p>fname: ${person.fname} </p>
    // <p>phone: ${person.phone} </p>
    // <p>pass: ${person.pass} </p>`
    // });
};
