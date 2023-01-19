let center, space;
let lines;
let slider, shuffleButton, bubbleSortButton;
let arrLength, randomIndex, scanLength;
let runSuffle, runBubbleSort;
j;
function setup() {
  createCanvas(windowWidth, 400);

  lines = [];
  runSuffle = false;

  slider = select("#test5");
  slider.input(createLines);

  shuffleButton = select("#shuffles");
  shuffleButton.mousePressed(shufflePrssd);

  bubbleSortButton = select("#bubble");
  bubbleSortButton.mousePressed(bubbleSortPrssd);
  runBubbleSort = false;

  space = 2;
  center = windowWidth / 2;
  frameRate(5);
  createLines();

  arrLength = lines.length;
  scanLength = 0;
}

function createLines() {
  lines = [];
  for (let a = 0; a < slider.value(); a++) {
    lines.push(
      new Lines(
        a * 12 + (center - (12 * slider.value()) / 2),
        400,
        random(400 - 90),
        8
      )
    );
  }

  arrLength = lines.length;
  scanLenght = 0;
}

function shufflePrssd() {
  runSuffle = !runSuffle;
  arrLength = lines.length;
}

function bubbleSortPrssd() {
  runBubbleSort = !runBubbleSort;
}

function draw() {
  background(255);
  for (each of lines) {
    each.render(0, 131, 143);
  }
  if (runSuffle) {
    shuffleff();
  }
  if (runBubbleSort) {
    bubbleSort();
  }
}

function shuffleff() {
  if (arrLength > 0) {
    randomIndex = floor(random(0, arrLength));
    arrLength--;
    lines[randomIndex].render(0, 0, 255);
    lines[arrLength].render(0, 255, 0);
    swap(arrLength, randomIndex);
    if (arrLength <= 0) {
      arrLength = lines.length;
      runSuffle = false;
    }
  }
}

function bubbleSort() {
  if (arrLength < 0) {
    arrLength = lines.length;

    runBubbleSort = false;
  }
  if (arrLength >= 0) {
    if (scanLength >= arrLength - 1) {
      arrLength--;
      scanLength = 0;
    } else {
      lines[scanLength].render(0, 0, 255);
      lines[scanLength + 1].render(0, 255, 0);
      if (lines[scanLength].valY() > lines[scanLength + +1].valY()) {
        swap(scanLength, scanLength + 1);
      }
      scanLength++;
    }
  }
}

function swap(a, b) {
  let temp = lines[a].valY();
  lines[a].change(lines[b].valY());
  lines[b].change(temp);
}
