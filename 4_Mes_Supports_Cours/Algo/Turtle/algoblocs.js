/*
// A1
// Initialisation
setPos(300,300);
faceDown();
changeColor(color.red);
setLineWidth(10);

// Réalisation
forward(200);
faceRight();
forward(100);
*/

/*
// A2
// Initialisation
setPos(300,300);
faceLeft();
setLineWidth(10);
changeColor(color.yellow);

//Réalisation
forward(100);
faceDown();
forward(100);
faceRight(100);
forward(200);
faceUp();
forward(200);
*/

/*
// A3
// Initialisation
setPos(300,300);
faceLeft();
setLineWidth(10);
changeColor(color.red)

// Réalisation 
forward(100);
faceRight();
forward(200);
faceLeft();
forward(100);
faceDown()
forward(100);
faceUp();
forward(200);
*/

/*
// A4
// Initialisation
setPos(150,500);
faceRight();
setLineWidth(10);
changeColor(color.green);


// Réalisation
forward(200);
arcLeft(100,180);
arcRight(100,180);
forward(200);
*/

/*
// A5 
// Initialisation
setPos(300,150);
faceRight();
setLineWidth(10);
changeColor(color.fuchsia);

// Réalisation
arcRight(200,360);
arcRight(100,180);
arcLeft(100,180);
*/

/*
// A6
// Initialisation 
setPos(300,500);
faceUp();
setLineWidth(10);
changeColor(color.blue)

// Réalisation 
forward(100);
up()
forward(100);
down();
forward(200);
*/

/*
// A7
// Initialisation 
setPos(300,300);
faceDown();
setLineWidth(10);
changeColor(color.green);

// Réalisation 
forward(200);
arcLeft(100,180);
forward(100);
up();
forward(100);
down();
forward(200);
arcLeft(100,180);
forward(100);
*/

/*
// A8
// Adaptation des distances(/2)
// Initialisation
setPos(300,300);
faceUp();
setLineWidth(10);
changeColor(color.fuchsia);

// Réalisation
forward(50)
faceRight();
forward(100);
faceDown();
forward(200);
faceLeft();
forward(50);
up();
forward(50);
faceUp();
forward(50);
down();
forward(50);
*/

/*
// A9 
// Initialisation 
setPos(150,400)
faceRight(),
setLineWidth(10);
changeColor(color.blue);

// Réalisation 
forward(200);
faceLeft();
arcRight(50,180);
arcLeft(50,180);
forward(200);
arcLeft(50,180);
arcRight(50,180);
*/

/*
// B1
// Initialisation 
setPos(100,100);
faceRight();
setLineWidth(10);
changeColor(color.green);

// Réalisation 
for (let i = 0 ; i < 4 ; i++) {
    forward(100);
    faceDown();
    forward(100);
    faceRight();
}
*/

/*
// B2 
// Initialisation 
setPos(100, 300);
faceUp();
setLineWidth(10);
changeColor(color.red);

// Réalisation 
for (let i = 0; i < 4; i++) {
    forward(50);
    faceRight();
    forward(50)
    faceDown();
    forward(50);
    faceRight();
    forward(50);
    faceUp();
}
*/


/*
// B3 
// Initialisation
setPos(200,300);
changeColor(color.fuchsia);
setLineWidth(10);
faceRight();

// Réalisation 
for (let i = 0 ; i < 4 ; i++) {
    forward(100);
    right(90);
}
*/

/*
// B4 
// Initialisation 
setPos(300,300);
changeColor(color.blue);
setLineWidth(10);
faceRight();

// Réalisation 
for (let i=0; i<3; i++) {
    forward(100);
    left(180-60);
}
*/

/*
// B5
// Initialisation 
setPos(300,300);
changeColor(color.yellow);
setLineWidth(10);
faceUp();

// Réalisation 
forward(100);
changeColor(color.red);

for (let i=0; i<3; i++) {
    forward(50);
    right(180-60);
}
*/

/*
// B6 
// Initialisation 
setPos(200,300);
changeColor(color.red);
setLineWidth(10);
faceRight();

// Réalisation 
for (let i=0; i<2; i++) {
    faceRight();
    forward(50);
    faceUp();
    forward(50);
}
changeColor(color.green)

for (let i=0; i<3; i++) {
    faceRight();
    forward(50);
    faceDown();
    forward(50);
}
*/

/*
// B7
// Initialisation 
setPos(300,300);
changeColor(color.yellow);
setLineWidth(10);
faceRight();

// Réalisation 
for (let i=0; i<3; i++) {
    forward(100);
    left(180-60);
}
faceDown()
for (let i=0; i<4; i++) {
    forward(100);
    left(90);
}
*/ 

/*
// B8
// Initialisation
setPos(300,300);
faceRight();
setLineWidth(10);
changeColor(color.yellow);

// Réalisation 
for (let i=0; i<8; i++) {
    forward(200);
    right(180-45);
}
*/

/*
// B9
// Initialisation 
setPos(200,300);
changeColor(color.fuchsia);
setLineWidth(10);
faceRight();

// Réalisation 
forward(50);
up();
forward(50);
down();

for (let i=0; i<3; i++) {
    forward(100);
    right(180-60);
}
*/

/*
// B10
// Initialisation 
setPos(100,300);
changeColor(color.blue);
faceRight();
setLineWidth(10);

// Réalisation 
for (let i=0; i<8; i++) {
    forward(100);
    right(180-45);
}

up();
forward(200);
down();
changeColor(color.yellow);

for (let i=0; i<8; i++) {
    forward(200);
    left(180-45);
}

up();
faceDown();
forward(100);
down();
changeColor(color.fuchsia);

for (let i=0; i<8; i++) {
    forward(100);
    right(180-45);
}

*/

/*
// B11
// Initialisation 
setPos(300,300);
changeColor(color.red);
faceRight();
setLineWidth(10);

// Réalisation 
for (let i=0; i<4; i++) {
    forward(50);
    left(90);
    forward(50);
    right(90);
    forward(50);
    right(90);
}
*/

/*
// B12
// Initialisation
setPos(300,300);
faceRight();
setLineWidth(10);
changeColor(color.fuchsia);

// Réalisation 
for (let i=0; i<3; i++) {
    right(90);
    forward(50);
}

up();
forward(50);
down();
changeColor(color.green);

for (let i=0; i<3; i++) {
    forward(50);
    right(90);
}
*/

/*
// B13
// Initialisation
setPos(300,300);
faceRight();
setLineWidth(10);
changeColor(color.green);

// Réalisation 
for (let i=0; i<8; i++) {
    forward(50);
    left(180-45);
    forward(25);
    right(90);
    forward(25);
    right(90);
}
*/

/*
// B14
// Initialisation
setPos(100,100);
faceRight();
setLineWidth(10);
changeColor(color.yellow);

// Réalisation 
for (let i=0; i<5; i++) {
    forward(50);
    right(180-60);
    forward(100);
    left(180-60);
    forward(50);
}
*/

/*
//B15
// Initialisation
setPos(300,300);
faceRight();
setLineWidth(10);
changeColor(color.red);

// Réalisation 

for (let i=0; i<4; i++) {
    forward(100);
    arcLeft(50,90);
}
*/

/*
//B16
// Initialisation
setPos(200,400);
faceRight();
setLineWidth(10);
changeColor(color.green);

//Réalisation
arcLeft(200,90);
faceLeft();

for (let i=0; i<4; i++) {
    arcLeft(25,90);
    arcRight(25,90);
}
*/

/*
//B17 
// Initialisation
setPos(300,300);
faceRight();
setLineWidth(10);
changeColor(color.blue);

//Réalisation
for (let i=0; i<6; i++) {
    arcLeft(50,180);
    left(180-60);
}
*/

/*
//B18
// Initialisation
setPos(300,300);
faceRight();
setLineWidth(10);
changeColor(color.yellow);

//Réalisation
for (let i=0; i<8; i++) {
    forward(200);
    left(90);
    forward(50);
    left(180-135);
}
*/ 

/*
// C1
// Initialisation
setPos(100,300);
faceRight();
setLineWidth(5);

// Réalisation
for(let i = 0 ; i < 4 ; i++) {
    for(let j = 0 ; j < 3 ; j++) {
        forward(100);
        right(180-60);
    }
    forward(100);
}
*/

/*
// C2 
// Initialisation
setPos(300,500);
faceUp();
setLineWidth(5);
changeColor(color.fuchsia);

//Réalisation
for (let i=0; i<5; i++) {
    for (let j=0; j<5; j++) {
        forward(50);
        right(90);
    }
    faceUp();
    up();
    forward(50);
    down();
}
*/

/*
// C3
// Initialisation
setPos(100,300);
faceRight();
setLineWidth(5);
shiftColor(0.33);

// Réalisation
for (let j=0; j<3; j++) {
    for (let i=0; i<8; i++) {
        forward(100);
        left(180-45);
    }
    up();
    forward(200);
    down();
    shiftColor(0.1);
}
*/


/*
//C4
// Initialisation
setPos(100,300);
faceRight();
setLineWidth(5);
changeColor(color.red);

//Réalisation 
for (let i=0; i<5; i++) {
    for (let j=0; j<3; j++) {
        changeColor(color.red);
        forward(50);
        left(180-60);
    }
    changeColor(color.yellow);
    for (let k=0; k<4; k++) {
        forward(50);
        right(90);
    }
    up();
    forward(100);
    down();
}
*/

/*
//C5
// Initialisation
setPos(300,300);
faceRight();
setLineWidth(5);
shiftColor(1/6);

// Réalisation
for (let i=0; i<8; i++) {
    for (let j=0; j<8; j++) {
        forward(200);
        left(180-45);
    }
    shiftColor(0.25);
    right(90);
}
*/

/*
// C6
// Initialisation
setPos(300,300);
faceRight();
setLineWidth(5);
changeColor(color.yellow);

//Réalisation
for (let i=0; i<4; i++) {
    for (let j=0; j<5; j++){
        forward(100);
        left(180-60);
    }
    right(180-60);
}
*/

/*
//C7
// Initialisation
setPos(300,300);
faceRight();
setLineWidth(5);
changeColor(color.yellow);

//Réalisation 
for (let i=0; i<8; i++){
    for (let j=0; j<3; j++){
        forward(50);
        right(180-60);
    }
    forward(50);
    left(180-135);
}
*/
/*
//C8 
// Initialisation
setPos(300,500);
faceUp();
setLineWidth(5);
changeColor(color.green);

// Réalisation
forward(200);
for (let i=0; i<4; i++) {
    changeColor(color.red);
    right(180-135);

    for (let j=0; j<3; j++){
        forward(100);
        right(180-60);   
    }

    changeColor(color.yellow);
    forward(100);
    left(180-45);
}
*/
/*
//C9
// Initialisation
setPos(400,400);
faceUp();
setLineWidth(5);
changeColor(color.green);
*/

/*
//D9
// Initialisation
setPos(300,300);
faceRight();
setLineWidth(5);

//Réalisation

let longueur = 50;
for (let i=0; i<6; i++) {
    forward(longueur);
    right(180-60);
    longueur += 50;
}
*/

/*
//D10
// Initialisation
setPos(300,300);
faceRight();
setLineWidth(5);


//Réalisation
let longueur = 50;
for (let i=0; i<10; i++){
    forward(longueur);
    right(90);
    longueur += 50;
}
*/

// D11
//Initialisation 

let longueur = 250;
for (let i=0; i<5; i++) {
    for (let j=0; i<3; i++){
        forward(longueur);
    }
}
