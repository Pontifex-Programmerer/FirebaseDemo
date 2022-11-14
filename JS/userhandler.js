const countersection = document.querySelector('#countersection');
const counter = document.querySelector('#counter');
const loginForm = document.querySelector('#loginform');

const counterDoc = db.collection('counters').doc('zMii3zJGOAOcadleEIux');
let username = null;

let localCounter = 'X';

//listener for the counterdocument.
counterDoc.onSnapshot(snapshot => {
    localCounter = snapshot.data().count;
    counter.innerText = localCounter;
});

loginForm.addEventListener('keypress', event => {
    if(event.key === 'Enter' && loginForm['username'].value.length > 5 && loginForm['password'].value.length > 5){
        login(loginForm['username'].value);
    }
});

countersection.addEventListener('click', e => {
    e.preventDefault();
    const emitter = e.target.textContent;

    switch(emitter){
        case '+':
            counterDoc.update('count', ++localCounter);
            break;
        case '-':
            if(localCounter > 0) counterDoc.update('count', --localCounter);
            break;
        default:
            break;
    }
});

function login(inputuser){
    db.collection('users').where('username','==', inputuser).get()
    .then(result => {
        console.log(result.docs)
        if(result.docs.length === 1){
            const user = result.docs[0].data();
            if(user.password === loginForm['password'].value){ 
                username = user.username; 
                console.log(user.username, username)  
                renderCounter();
            } else {
                setWarning();
            }
        } else if(result.docs.length === 0) {
            setWarning();
        }

        function setWarning() {
            const feedback = document.querySelector('#feedback');
                feedback.innerText = 'invalid userdata, please try again!';
                feedback.classList.toggle('hidden');

                //show message for 5 seconds
                setTimeout(()=>{
                    feedback.classList.toggle('hidden');
                },5000)
        }
    }).catch(err => console.log(err));
}

function renderCounter(){
    loginForm.classList.toggle('hidden');
    countersection.classList.toggle('hidden');
    console.log('setting username', username)
    document.querySelector('#username').innerText = username;
}

