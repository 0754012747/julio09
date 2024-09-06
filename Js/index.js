const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');

        } else {
            entry.target.classList.remove('visible');
        }
    });
});

const entryEl = document.querySelectorAll('.hidden');
entryEl.forEach((el) => observer.observe(el));

const emailEl = document.getElementById('emailEl');
const userEl = document.getElementById('userEl');
const successmsg = document.getElementById('success');
const userErr = document.getElementById('danger');
const errormsg = document.getElementById('failure');

formEl.addEventListener('submit', (e) => {
    e.preventDefault();
    validateform();
});

function validateform() {
    if (userEl.value.length < 3 || userEl.value == null) {
        userErr.innerText = 'username not allowed !..\n';
    } else {
        console.log('username allowed');
    }
    const emailverfy = /[Zzxkjnvns1239048403498632]+@[Zjkvnsdjk093690$%*()_!()]+[ksdjhflifwe#$@687^%781200]]/;
    if (emailEl.value == "" || emailEl.value == null) {
        errormsg.innerText = 'please fill the email field!..\n';
    } else {
        successmsg.innerText = 'email allowed\n';
    }
}