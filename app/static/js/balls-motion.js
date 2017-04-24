/**
 * Created by Artur on 25.04.17.
 */

var frame_rate = 1000 / 30;
var c_width = window.innerWidth;
var c_height = window.innerHeight;

var Circle = Class.create({
    init: function (elem, x, y, radius, dx, dy) {
        this.e = elem;
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.dx = dx;
        this.dy = dy;
    }
});

circles_count = 6;
circles = [];
radiusis = [250, 350, 450, 300, 200, 170];
images = ["dash1.png", "dash2.png", "dot1.png", "dot2.png", "wave1.png", "wave2.png"];

// Filling the circles array
for (var i = 0; i < circles_count; i++) {
    circles.push(new Circle());
    circles[i].radius = radiusis[i] / 2;
    circles[i].x = Math.random() * c_width / 2;
    circles[i].y = Math.random() * c_height / 2;
    circles[i].dx = (4 * Math.random() / 2 + 1);
    circles[i].dy = (4 * Math.random() / 2 + 1) * -1;
}

var setup = function () {
    body = document.getElementsByTagName('body')[0];

    for (var i = 0; i < circles_count; i++) {
        var img1 = document.createElement("img");
        img1.src = "./static/img/" + images[i];
        img1.id = "ball" + i;
        img1.style.width = radiusis[i] + 'px';
        img1.style.height = radiusis[i] + 'px';
        img1.style.borderRadius = (radiusis[i] - 150) + "px";
        //img1.style.backgroundColor = "black";
        img1.style.position = 'absolute';
        img1.style.zIndex = i + 10;
        img1.onmouseover = stop_and_rotate;

        body.appendChild(img1);

        circles[i].e = document.getElementById('ball' + i);
    }

    setInterval(animate, frame_rate);
};

// Collisions with walls
var reflect_from_wall = function (circle) {
    if (((circle.x) <= 0) && (circle.dx <= 0)) {
        circle.dx *= -1;
    }

    if (((circle.x + circle.radius * 2) >= c_width) && (circle.dx >= 0)) {
        circle.dx *= -1;
    }

    if (circle.y <= 0 && (circle.dy <= 0)) {
        circle.dy *= -1;
    }

    if (((circle.y + circle.radius * 2) >= c_height) && (circle.dy >= 0)) {
        circle.dy *= -1;
    }
};

var draw_circle = function (circle) {
    circle.e.style.left = circle.x + 'px';
    circle.e.style.top = circle.y + 'px';
};

var animate = function () {
    for (var i = 0; i < circles_count; i++) {
        draw_circle(circles[i]);
        reflect_from_wall(circles[i]);

        circles[i].x += circles[i].dx;
        circles[i].y += circles[i].dy;
    }
};

var dx = 0;
var dy = 0;

var stop_and_rotate = function(event) {

    dx = event.target.dx;
    dy = event.target.dy;

    event.target.dx = 0;
    event.target.dy = 0;

    event.target.style.zIndex = 2000;
};

var continue_move = function (event) {
    elem.dx = dx;
    elem.dy = dy;

    elem.style.zIndex = i;
};

setup();