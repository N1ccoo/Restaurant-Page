const initialLoad = () => {
   createNavBar();
}

function createNavBar() {
    const header = document.createElement('header');
    const ul = document.createElement('ul');

    header.classList.add('nav-bar');
    ul.classList.add('nav-links');

    header.append(ul);
    document.body.append(header);
    createNavLinks('home',ul);
    createNavLinks('menu',ul);
    createNavLinks('contact',ul);
}

function createNavLinks(text,container) {
    const li = document.createElement('li');
    const links = document.createElement('a');

    links.setAttribute('href','#');
    links.textContent = text;
    li.append(links);

    container.append(li);
}



export default initialLoad