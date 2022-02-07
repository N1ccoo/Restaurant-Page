import { loadHomePage as homePage, loadMenuPage as menuPage, loadContactPage as contactPage } from "./page-load";
import './style.css';

const navEvents = () => {
    let home = document.getElementById('home-button');
    let menu = document.getElementById('menu-button');
    let contact = document.getElementById('contact-button');

    home.addEventListener('click', loadHomePage);
    menu.addEventListener('click', loadMenuPage);
    contact.addEventListener('click', loadContactPage);
};

loadContactPage() // main load

function loadHomePage() {
    homePage()
    navEvents()
}

function loadMenuPage() {
    menuPage()
    navEvents()
}

function loadContactPage() {
    contactPage()
    navEvents()
}