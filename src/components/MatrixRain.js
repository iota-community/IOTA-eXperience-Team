import React from "react";

export default function MatrixRain() {

    React.useEffect(() => {

        var midiv = document.getElementById("bg");
        var c = document.getElementById("canvas");
        var ctx = c.getContext("2d");

        //making the canvas full screen
        c.height = window.innerHeight - 300;
        c.width = window.innerWidth;


       //english characters
        var english = "1001010101110101010101010010101000101011101111010101010110101010101010101110000101";
        //converting the string into an array of single characters
        english = english.split("");

        var font_size = 42;
        var columns = c.width / font_size; //number of columns for the rain
        //an array of drops - one per column
        var drops = [];
        //x below is the x coordinate
        //1 = y co-ordinate of the drop(same for every drop initially)
        for (var x = 0; x < columns; x++)
            drops[x] = 1;

        //drawing the characters
        function draw() {
            //Black BG for the canvas
            //translucent BG to show trail
            // ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
            ctx.fillStyle = "rgba(10, 21, 41, 0.05)";
            ctx.fillRect(0, 0, c.width, c.height);

            ctx.fillStyle = "#14CABF";
            ctx.font = font_size + "px";
            //looping over drops
            for (var i = 0; i < drops.length; i++) {
                //a random chinese character to print
                var text = english[Math.floor(Math.random() * english.length)];
                //x = i*font_size, y = value of drops[i]*font_size
                ctx.fillText(text, i * font_size, drops[i] * font_size);

                //sending the drop back to the top randomly after it has crossed the screen
                //adding a randomness to the reset to make the drops scattered on the Y axis
                if (drops[i] * font_size > c.height && Math.random() > 0.975)
                    drops[i] = 0;

                //incrementing Y coordinate
                drops[i]++;
            }
        }

        setInterval(draw, 100);

    }, [])


    return (
        <canvas id="canvas"></canvas>
    );
}
