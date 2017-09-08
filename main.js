(function() {
  var canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");
  window.addEventListener('resize', resizeCanvas, false);

  function resizeCanvas() {
    canvas.width = window.innerWidth *.9;
    canvas.height = window.innerHeight *.9;
    ratioW = window.innerWidth / (window.innerWidth-canvas.width) ;
    drawStuff();
  }
  resizeCanvas();

  function drawStuff(){
    var gameSpace = new Border();
    var mainPaddle = new Paddle();
    var theBall = new Ball();
    var targets = new Target();
    gameSpace.render();
    mainPaddle.render();
    theBall.render();
    targets.render();
  }

  function Border() {
    this.render = function() {
      ctx.strokeStyle = "#FFFFFF";
      ctx.lineWidth=10;
      ctx.strokeRect(.5,.5,canvas.width-1, canvas.height-1);
    };
  }

  function Paddle() {
    this.render = function() {
      ctx.fillStyle = "#FFFFFF";
      ctx.fillRect((canvas.width/2)-30,canvas.height-60, window.innerWidth-canvas.width, 15 );
    };
  }

  function Ball() {
    this.render = function() {
      ctx.fillStyle = "#FFFFFF";
      ctx.fillRect((canvas.width/2), (canvas.height/2), 15,15);
    };
  }

  function Target() {
    this.render = function() {
      // canvas width / 10 gives space for 10 targets
      // make 7 rows of targets
      // create this as 2 dim array?
      var startX = 0;
      var startY = 40;
      var end = 0;
      var size = canvas.width/10
      for (var row = 0; row < 7; row++) {
        for (var col = 0; col < 10; col++) {
          end = startX + size ;
          ctx.fillStyle = "#FFFFFF";
          ctx.fillRect(startX, startY, size-1, 20);
          console.log(startX);
          //end+=1;
          startX=end;
        }
        startX = 0;
        end = 0;
        startY+=22;
      }
    }
  }



})();
