
function stickyNavbar () {
    let navbar = document.getElementById('nav-container');
    let menu = document.getElementById('nav-menu');
    window.addEventListener('scroll',sticky);

    function sticky () {
        if (window.pageYOffset >= menu.offsetTop) {
            navbar.classList.add('sticky');
        } else {
            navbar.classList.remove('sticky');
        };
    };
};

export default stickyNavbar;