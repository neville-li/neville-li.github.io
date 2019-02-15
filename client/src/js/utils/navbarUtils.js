const toggle = () => {    
    const navbar  = document.querySelector(".nav__navbar");
    const nav = document.querySelector(".nav");
    navbar.style.top = `${nav.clientHeight}px`;

    if(navbar.style.display !== "flex" && navbar.clientWidth == 0){
        
        navbar.style.display = "flex";
        navbar.style.flexDirection = "column";
        navbar.style.transform = "translateX(100%)";
        navbar.style.bottom ="0";
        
    
        let i = 100;
        let open = setInterval(() => {
            if(i > 1){
                navbar.style.transform = `translateX(${i *= 0.965}%)`;
            } else {
                navbar.style.transform = "translateX(0%)";
                clearInterval(open);
            } 
        }, 10);
    } else {
            if(!navbar.style.transform.includes("translateX(0%)")){
                return null;
            }
        let i = 100;
        let close = setInterval(() => {
            if(i > 1){
                i *= 0.965;
                navbar.style.transform = `translateX(${100 - i}%)`;
            } else {
                navbar.style.transform = `translateX(0%)`;
                navbar.style.display = "none";
                clearInterval(close);
            } 
        }, 10);
    }
};



export {toggle};