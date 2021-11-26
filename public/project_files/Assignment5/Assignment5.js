// JavaScript Document
//Creating Canvas
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
canvas.height = 650;
canvas.width = 1000;
document.body.appendChild(canvas);


//Background and Bug
var background = false;
var backgroundImage = new Image();
backgroundImage.onload = function () 
{
    background = true;
};
backgroundImage.src = "images/grass.jpg";


var bugCharacter = false;
var bugImage = new Image();
bugImage.onload = function () 
{
    bugCharacter = true;
};
bugImage.src = "images/bug.png";


//game objects
var bug = {};
var bugsCaught = 0;
var speed = 10;

function bugSmash(bug, x, y)
{
    if(x <= (bug.x + 96) && y <= (bug.y + 96) && x >= (bug.x) && y >= (bug.y))
        {
            speed += 3;
            bugsCaught++;
            return true;            
        }
    return false;
}

var reset = function()
{
    bug.x = (Math.random() * (canvas.width - 96));
    bug.y = 96 + (Math.random() * (canvas.height - 192));
}

function replay(x,y)
{
    if (x > (440)
        && x < (670)
        && y > (15)
        && y < (85)
    ) {
        return true;
    }
    return false;
}

function InitialSpeed(x, y) {
    if (x > (770)
        && x < (980)
        && y > (15)
        && y < (85)
    ) {
        speed = 10;
        return true;
    }
    return false;
}

var render = function()
{
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    if(background)
        {
            ctx.drawImage(backgroundImage,0,100,1000,550);
        }
    if(bugCharacter)
        {
            ctx.drawImage(bugImage, bug.x, bug.y);
        }
    
    ctx.fillStyle = "#D9D4D4";
    ctx.font = "42px verdana";
    ctx.textAlign = "left";
    ctx.textBaseline = "top";
    ctx.fillText("Bug Smasher", 25, 40);
    ctx.font = "22px verdana";
    ctx.fillText("Bugs Smashed: " + bugsCaught, 65, 10);

    ctx.fillStyle = "#D9D4D4";
    ctx.fillRect(420, 18, 250, 61);
    ctx.fillRect(760, 18, 220, 61);
    ctx.fillStyle = "#BEF992";
    ctx.fillRect(425, 21, 240, 54);
    ctx.fillRect(765, 21, 210, 54);
    ctx.fillStyle = "#000000";
    ctx.font = "28px verdana";
    ctx.fillText("Reset Score", 460, 34);
    ctx.fillText("Reset Speed", 785, 34);
}

//Player Input
var timer = 0;
window.addEventListener("mousedown", onmousedown, false);
function onmousedown(e){
    var xCord = e.clientX;
    var yCord = e.clientY;
    if (bugSmash(bug, xCord, yCord)) {
        clearInterval(timer);
        timer = setInterval(reset, 20000 / speed);
        reset();
    }
	if (replay(xCord, yCord)) {
        location.reload();
    }
    if (InitialSpeed(xCord, yCord)) {
        clearInterval(timer);
        timer = setInterval(reset, 20000 / speed);
        reset();
        render();
    }
}


var main = function ()
{
    render();
    requestAnimationFrame(main);
}
reset();
main();