// начальное состояние — не можем рисовать
var weCanDraw = false;
// начальное состояние кнопки — «не нажата»
var isClicked = false;
// javascript здесь нашёл и выбрал элемент кнопки
var button = document.getElementsByTagName('button')[0];
var buttonReset = document.getElementsByTagName('button')[1];
var ifa = false;

// при клике по кнопке скрипт начинает выбирать
button.onclick = function() {
  if (isClicked) {
    // если состояние кнопки — «нажата», делай это
    button.classList = 'button_like';
    isClicked = false;
    weCanDraw = false;
    
  } else {
    // если состояние кнопки — «не нажата», делай это
    button.classList.add('clicked');
    isClicked = true;
    weCanDraw = true;
  }
}

function setup() {
  // создание полотна для рисования
 var parent = document.getElementById("project_name_like");

  canvas = createCanvas(parent.offsetWidth, parent.offsetHeight);
  canvas.parent('project_name_like');

}

function draw() {
  // размер шрифта
  textSize(74);

  if (weCanDraw) {
    // если рисовать можно — рисуем
    text('🖤', mouseX, mouseY);
  }
}


// при клике по кнопке скрипт начинает выбирать
buttonReset.onclick = function() {

  if (ifa) {
    // если состояние кнопки — «нажата», делай это
    buttonReset.classList = 'button_reset';
    ifa = false;
    
  } else {
    // если состояние кнопки — «не нажата», делай это
    buttonReset.classList.add('clicked');
    ifa = true;
  }
}

// function reset() {
//   var context = canvas.getContext('2d');
//   var parent = document.getElementById("project_name_like");
//   if (ifa) {
//     context.clearRect(parent, parent, parent.offsetWidth, parent.offsetHeight);

//   }
// }
