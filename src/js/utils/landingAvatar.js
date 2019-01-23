const landingAvatar = () => {
    
    


   function getAvatar() {
    const avatar = document.querySelector(".landing__avatar__img");
       return new Promise((resolve, reject) => {
           avatar.onload = () => {
                resolve(avatar);
           };
       })
   }

   const mouse = {
        x: null,
        y: null
    };   

   getAvatar().then(avatar => {

    class Eye {
        constructor(x, y, radius, type, fillStyle, strokeStyle){

            this.centerX = x;
            this.centerY = y;
            this.x = this.centerX;
            this.y = this.centerY;
            this.radius = radius;
            this.type = type;
            this.fillStyle = fillStyle || "black";
            this.strokeStyle = strokeStyle || "black";
            this.relX = {
                left: leftEyeX,
                right: rightEyeX
            }[this.type],
            this.relY = {
                left: leftEyeY,
                right: rightEyeY
            }[this.type]
        }
        draw(context){
            context.beginPath();
            context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, true);
            context.fillStyle = this.fillStyle;
            context.fill();
            context.strokeStyle = "black";
            context.stroke();
        }
        update() {


            // if(mouse.x > this.relX) {
            //     this.x = this.x + this.radius * 3;
            //     if(this.x > this.centerX + eyeRadius) {
            //         this.x = this.centerX + eyeRadius - this.radius;
            //     }
            // }
            // if(mouse.x < this.relX) {
            //     this.x = this.x - this.radius * 3;
            //     if(this.x < this.centerX + eyeRadius) {
            //         this.x = this.centerX - eyeRadius + this.radius;
            //     }
            // }
            if(mouse.y > this.relY) {
                this.y = this.y + this.radius * 3;
                if(this.y > this.centerY + eyeRadius) {
                    this.y = this.centerY + eyeRadius - this.radius;
                }
            }
            if(mouse.y < this.relY) {
                this.y = this.y - this.radius * 3;
                if(this.y < this.centerY + eyeRadius) {
                    this.y = this.centerY - eyeRadius + this.radius;
                }
            }
        }
    }

        const canvas = document.querySelector(".landing__avatar__canvas");
        canvas.width = avatar.width;
        canvas.height = avatar.height;
        const {width: w, height: h} = canvas;
        const c = canvas.getContext("2d");
        const eyeRadius = w/15;
        const leftEyeX = w * 6/15;
        const leftEyeY =  h * 5 / 12;
        const rightEyeX = w * 9/15 ;
        const rightEyeY =  h * 5 / 12;

        const leftEye = new Eye(leftEyeX, leftEyeY, eyeRadius, "left", "white");
        const rightEye = new Eye(rightEyeX, rightEyeY, eyeRadius, "right", "white");
        const leftPupil = new Eye(leftEyeX, leftEyeY, eyeRadius/3, "left", "black");
        const rightPupil = new Eye(rightEyeX, rightEyeY, eyeRadius/3, "right", "black");
        const mouth = new Eye (w / 2, h * 8 / 12, eyeRadius/2, undefined, "white");

        leftEye.draw(c);
        rightEye.draw(c);
        leftPupil.draw(c);
        rightPupil.draw(c);
        mouth.draw(c);

        window.addEventListener("mousemove", (e) => {
            mouse.x = Math.abs(canvas.offsetLeft - e.x - canvas.width/2);
            mouse.y = Math.abs(canvas.offsetTop - e.y - canvas.height/2);
        });

        window.onclick = () => {
            console.log(mouse.x, mouse.y);
            console.log(`LeftX ${leftEyeX}`);
        }

        function animate() {
            requestAnimationFrame(animate);
            c.clearRect(0, 0, w, h);

            leftEye.draw(c);
            rightEye.draw(c);
            leftPupil.draw(c);
            rightPupil.draw(c);
            mouth.draw(c);
            leftPupil.update();
            rightPupil.update();
        }

        animate();
        
    });
}

export default landingAvatar;