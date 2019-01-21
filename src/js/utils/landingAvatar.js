const landingAvatar = () => {
    
    class Circle {
        constructor(x, y, radius, fillStyle, strokeStyle){
            this.x = x;
            this.y = y;
            this.radius = radius;
            this.fillStyle = fillStyle || "black";
            this.strokeStyle = strokeStyle || "black";
        }
        draw(context){
            context.beginPath();
            context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, true);
            context.fillStyle = this.fillStyle;
            context.fill();
            context.strokeStyle = "black";
            context.stroke();
        }
    }


   function getAvatar() {
    const avatar = document.querySelector(".landing__avatar__img");
       return new Promise((resolve, reject) => {
           avatar.onload = () => {
                resolve(avatar);
           };
       })
   }

   getAvatar().then(avatar => {
        const canvas = document.querySelector(".landing__avatar__canvas");
        canvas.width = avatar.width;
        canvas.height = avatar.height;
        const {width: w, height: h} = avatar;
        const c = canvas.getContext("2d");
        const eyeRadius = w/15;

        const leftEye = new Circle(w * 6/15, h * 5 / 12, eyeRadius, "white");
        leftEye.draw(c);
        const rightEye = new Circle(w * 9/15, h * 5 / 12, eyeRadius, "white");
        rightEye.draw(c);

        const leftPupil = new Circle(w * 6/15, h * 5 / 12, eyeRadius/3, "black");
        leftPupil.draw(c);
        const rightPupil = new Circle(w * 9/15, h * 5 / 12, eyeRadius/3, "black");
        rightPupil.draw(c);

        const mouth = new Circle (w / 2, h * 8 / 12, eyeRadius/2, "white");
        mouth.draw(c);

    });
   
    

}

export default landingAvatar;