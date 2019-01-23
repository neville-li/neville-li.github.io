const toggleNavbar = () => {    
    const navbar  = document.querySelector(".nav__navbar");
    const nav = document.querySelector(".nav");
    navbar.style.top = `${nav.clientHeight}px`;
    navbar.style.transform = navbar.style.transform !== "translateX(0%)" ? "translateX(0%)" : "translateX(200%)";
    
};

export default toggleNavbar;