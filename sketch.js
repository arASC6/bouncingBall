// define in global space, but set values within setup function
let circle_radius, circle_diameter;

let x, y, x_speed, y_speed;

function setup(){
   createCanvas(600,600);
   circle_radius = 40;
   circle_diameter = circle_radius * 2;

   // starts in center of canvas
   x = width/2;
   y = height/2;

   // BONUS - starts at random place on canvas
   // x = random(circle_radius,width-circle_radius);
   // y = random(circle_radius,height-circle_radius);

   x_speed = 2;
   y_speed = 3;
   // styling circle
   stroke(225,123,0);
   fill(10,123,200);
}

function draw(){
   background(100);

   ellipse(x,y,circle_diameter);

   //Y DIRECTION
   if (y >= height - circle_radius ) {
       y_speed = -y_speed;

       //Bonus - speeds up each bounce
       // y_speed--;
   }
   else if (y <= 0 + circle_radius ){
       y_speed = -y_speed;
       //Bonus - speeds up each bounce
       // y_speed++;
   }
   y += y_speed;

   //X DIRECTION
   if( x >= width - circle_radius ){
       x_speed = -x_speed;
       //Bonus - speeds up each bounce
       // x_speed--;
   }else if(x <= 0 + circle_radius ){
       x_speed = -x_speed;
       //Bonus - speeds up each bounce
       // x_speed++;
   }
   x += x_speed;
}

// Bonus - changes color if mouse clicks circle
function mousePressed(){
   // distance mouse is from circle
   let distance = dist( mouseX, mouseY, x, y );

   // if mouse within circle's radius, change color
   if(distance <= circle_radius){
       fill(random(255),random(255),random(255));
   }
}