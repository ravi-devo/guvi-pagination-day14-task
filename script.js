const data = [
    {
        id: '1',
        name: 'Rajesh',
        email: 'rajesh@gmail.com'
    },
    {
        id: '2',
        name: 'Muthu',
        email: 'muthu@gmail.com'
    },
    {
        id: '3',
        name: 'John',
        email: 'john@gmail.com'
    },
    {
        id: '4',
        name: 'Andrea',
        email: 'andrea@gmail.com'
    },
    {
        id: '5',
        name: 'Ownen',
        email: 'Owen@gmail.com'
    },
    {
        id: '6',
        name: 'Vel',
        email: 'vel@gmail.com'
    },
    {
        id: '7',
        name: 'Ram',
        email: 'ram@gmail.com'
    },
    {
        id: '8',
        name: 'Mohan',
        email: 'mohan@gmail.com'
    },
    {
        id: '9',
        name: 'Ganesh',
        email: 'ganesh@gmail.com'
    },
    {
        id: '10',
        name: 'Vijay',
        email: 'vijay@gmail.com'
    }
];

const page = document.querySelector('#page-no');
const nameElement = document.querySelector('#name');
const email = document.querySelector('#email');

let counter = 0;
function previousFunc(){
    counter = counter - 1;
    callPage(counter);
}

function nextFunc(){
    counter = counter + 1;
    callPage(counter);
}

function callPage(pageNo){
    counter = pageNo;
    page.innerHTML = `${data[pageNo].id}`;
    nameElement.innerHTML = `${data[pageNo].name}`;
    email.innerHTML = `${data[pageNo].email}`;
}