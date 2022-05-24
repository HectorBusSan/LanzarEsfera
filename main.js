// https://developer.mozilla.org/es/docs/Learn/JavaScript/Objects/Object_building_practice
const RADIUS= 20;
        const WIDTH= 500;
        const HEIGHT= 500;
        const SPEED= 10;

        const coord = {x: WIDTH / 2, y: HEIGHT / 2};
        const delta = {x: Math.random()*SPEED*2-SPEED,
                    y: Math.random()*SPEED*2-SPEED};

        const cnv = document.getElementById('canvas');
        const ctx = cnv.getContext('2d');

            function tick() {
                const newx= coord.x + delta.x;
                const newy= coord.y +delta.y;

                if(newx> WIDTH - RADIUS || newx < RADIUS)
                {
                    delta.x = -delta.x;
                }
                if(newy> HEIGHT - RADIUS || newy < RADIUS){
                    delta.y = -delta.y;
                }
                coord.x= newx;
                coord.y= newy;

                requestAnimationFrame(draw);
                setTimeout(tick, 10);
            }
            function draw() {
                ctx.fillStyle = "white";
                ctx.clearRect(0, 0, WIDTH, HEIGHT);
                ctx.beginPath();
                ctx.arc(coord.x, coord.y, RADIUS, 0, Math.PI * 2, 1);
                ctx.fill();
            }

        tick();
