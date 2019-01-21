const toggleNavbar = () => {    
    const navbar  = document.querySelector(".nav__navbar");
    const nav = document.querySelector(".nav");
    navbar.style.top = `${nav.clientHeight}px`;
    navbar.style.display = navbar.style.display !== "flex" ? "flex" : "none";
};

export default toggleNavbar;