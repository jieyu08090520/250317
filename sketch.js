let seaweeds = [];
let canvas;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.style('position', 'absolute');
  canvas.style('z-index', '2'); // 確保畫布在 iFrame 之上
  
  // 創建 iFrame 並設置其屬性
  let iframe = createElement('iframe');
  iframe.attribute('src', 'https://www.et.tku.edu.tw/'); // 替換為你想要的網址
  iframe.attribute('width', "80%");
  iframe.attribute('height', "80%");
  iframe.style('position', 'absolute');
  iframe.style('top', "10%");
  iframe.style('left', "10%");
  
  // 初始化海草
  for (let i = 0; i < 40; i++) { // 增加海草數量
    seaweeds.push(new Seaweed(i * (windowWidth / 40) + (windowWidth / 80), windowHeight));
  }
}

function draw() {
  clear(); // 清除畫布
  for (let seaweed of seaweeds) {
    seaweed.display();
  }
}

class Seaweed {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.angle = random(TWO_PI);
  }
  
  display() {
    stroke(34, 139, 34, 150); // 半透明顏色
    strokeWeight(20); // 更粗一點
    noFill();
    beginShape();
    for (let i = this.y; i > this.y - 400; i -= 20) { // 更長的海草
      let offsetX = sin(this.angle + i * 0.1) * 10;
      vertex(this.x + offsetX, i);
    }
    endShape();
    this.angle += 0.02; // 更新角度以實現搖擺效果
  }
}
