let cname = document.getElementById('cname');
let ctext = document.getElementById('ctext');
let csubmit = document.getElementById('csubmit');
let cposted = document.getElementById('posted_comments');
let like = document.getElementById('like');
let counter = document.getElementById('counter');
let answer = 1;
csubmit.addEventListener('click', (e) => {
    e.preventDefault();
    comment();
});

let comment = ()=> {
    cposted.innerHTML += `<div class="one_comment">
    <span class="title title__comment">${cname.value}</span>
    <p>${ctext.value}</p>
</div>`
}

like.addEventListener('click', (e) => {
    e.preventDefault();
    liked();
});

let liked = ()=> {
    answer++;
    counter.innerHTML = answer;
}