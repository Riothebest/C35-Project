var ball;
var database;
var position;
var ballPosition;

function setup()
{
    //to create an instance of the database from the firebase object
    database = firebase.database();
    console.log(database);
    createCanvas(400,400)
    ball = createSprite(200,200,10,10)

    var asyncBallPosition = database.ref('ball/position');
    asyncBallPosition.on("value", readPosition, showError)
}

function draw()
{
    background('white')
     if(position!=undefined)
     {
    if(keyWentDown(RIGHT_ARROW))
    {
        writePosition(4,0)
    }
    if(keyWentDown("left"))
    {
        writePosition(-4,0)
    }
    if(keyWentDown("up"))
    {
        writePosition(0,-4)
    }
    if(keyWentDown("down"))
    {
       writePosition(0,4)
    }
}
    drawSprites();
}


 function writePosition(x,y)
 {
     database.ref('ball/position').set({
         
        'x' : position.x + x,
        'y' : position.y + y
     })
 }

 //this is helping you to read the data and bring it back to the application 
 function readPosition(data)
 {
     //store the JSON object in the application
     //val() JSON 
      position = data.val();
      ball.x = position.x;
      ball.y = position.y;

 }

 function showError()
 {
     console.log("Error in writing to the database");
 }