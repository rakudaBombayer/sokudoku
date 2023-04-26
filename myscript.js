var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var myText = {
  x: 0,
  y: canvas.height / 8,
  xSpeed: 100,
  image: new Image(),
  draw: function() {
    this.x += this.xSpeed;
    if (this.x > canvas.width + this.image.width) {
      this.x = 0;
    }
    ctx.drawImage(this.image, this.x, this.y);
  }
};

var imageSources = ["./学長2.jpg","./学長2.jpg", "./zakiyama.jpg", "./masayosi.jpg"];
var currentIndex = 0;

var myButton = document.getElementById("myButton");
myButton.addEventListener("click", function() {
  currentIndex++;
  if (currentIndex >= imageSources.length) {
    currentIndex = 0;
  }
  myText.image.src = imageSources[currentIndex];
  myText.xSpeed = 100;
});

var slowButton = document.getElementById("slowButton");
slowButton.style.display = "block";
slowButton.addEventListener("click", function() {
  myText.xSpeed = 1;
});
slowButton.addEventListener("click", function() {
  audio.src = "../まさよしgame.mp3";
  audio.play();
});



function loop() {
  ctx.fillStyle = "#ccc";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  myText.draw();
  requestAnimationFrame(loop);
}

loop();


// クリック時の音 3回目のボケ

const myParagraph = document.getElementById("slowButton");
const myAudio = document.getElementById("my-audio");
let clickCount = 0;

function handleClick() {
  clickCount++;
  if (clickCount === 3) {
    myAudio.play();
  }
}

myParagraph.addEventListener("click",handleClick
);

// ↑ここまで