let l;
let c = 0;
let lines = [];
let space;
let pos;
let strWeight;
let arrLength;
let scnLength;
let dropdown;
let randomIndex;
let bubbleSortBttn, runBubbleSort;
let shuffleBttn, runSuffle;
let bar;

function setup() {
  shuffleBttn = createButton("shuffle");
  shuffleBttn.mousePressed(shufflePrssd);
  runSuffle = false;

  bubbleSortBttn = createButton("bubble sort ");
  bubbleSortBttn.mousePressed(bubbleSortPrssd);
  runBubbleSort = false;

  //select colors
  dropdown = createSelect();
  dropdown.option("orange");
  dropdown.option("green");
  dropdown.option("skyblue");

  //select how many bars
  bar = createSlider(10, 100, 40);
  bar.input(updateBar);

  let canvas = createCanvas(windowWidth, 400);
  l = 56;
  space = 8;
  strWeight = 5;

  pos = width / 2 - l * (strWeight - 1);
  for (let a = 0; a < l; a++) {
    lines.push(
      new Lines((pos += space), height, random(height - 90), strWeight)
    );
  }
  arrLength = lines.length;
  scanLenght = 0;
}

function updateBar() {
  lines = [];
  pos = width / 2 - bar.value() * (strWeight - 1);
  for (let a = 0; a < bar.value(); a++) {
    lines.push(
      new Lines((pos += space), height, random(height - 90), strWeight)
    );
  }

  arrLength = lines.length;
}
function shufflePrssd() {
  runSuffle = !runSuffle;
  arrLength = lines.length;
}
function bubbleSortPrssd() {
  runBubbleSort = !runBubbleSort;
}

function draw() {
  background(dropdown.value());

  for (each of lines) {
    each.render(255, 0, 0);
  }

  print(arrLength);

  if (runBubbleSort) {
    bubbleSort();
  }

  if (runSuffle) {
    shuffleff();
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
    // temp = lines[currentIndex];
    // lines[currentIndex] = lines[randomIndex];
    // lines[randomIndex] = temporaryValue;
  }
}

function bubbleSort() {
  if (arrLength < 0) {
    arrLength = lines.length;

    runBubbleSort = false;
  }
  if (arrLength >= 0) {
    if (scanLenght >= arrLength - 1) {
      arrLength--;
      scanLenght = 0;
    } else {
      lines[scanLenght].render(0, 0, 255);
      lines[scanLenght + 1].render(0, 255, 0);
      if (lines[scanLenght].valY() > lines[scanLenght + +1].valY()) {
        swap(scanLenght, scanLenght + 1);
      }
      scanLenght++;
    }
  }
}
function swap(a, b) {
  let temp = lines[a].valY();
  lines[a].change(lines[b].valY());
  lines[b].change(temp);
}
