const activePage = window.location.pathname;
console.log(activePage);

const navLinks = document.querySelectorAll ('nav a').
forEach(link => {
    if(link.href.includes(`${activePage}`)){
        link.classList.add('active');
    }
})



Fancybox.bind("[data-fancybox]", {
// Your custom options
});


const buttons = document.querySelectorAll('popup_button');
const popUp = document.querySelector('.pop-up');

const people = [
    {
        name: "Brian Muntean",
        about: "Lorem Ipsum",
    },
    {
        name: "Douglas Sloan",
        about: "Lorem ipsum",
    },
]

buttons.forEach(button => {
    button.addEventListener('click', (event) => {
        console.log(event.target.id);
        popUp.innerHTML = 
        `<h3>${people[event.target.id].name}</h3>
        <p>${people[event.target.id].about}</p>
        <img src="${people[event.target.id].imageSrc}">
        <button onClick="togglePopUp()">Close Window</button>`;
        popUp.classList.toggle('visible');
    })
});

function togglePopUp() {
    popUp.classList.toggle('visible');
}
