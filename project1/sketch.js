let circleX = 0;  // 원의 초기 위치
let circleSize = 50;  // 원의 초기 크기

function setup() {
  createCanvas(400, 400);
  noStroke();  // 원의 외곽선 제거

}

function draw() {
  background(220);
  
  // 원의 위치를 왼쪽에서 오른쪽으로 이동시킴
  circleX = frameCount % width;  // 화면을 넘어가면 다시 왼쪽으로
  
  // 원의 색상을 주기적으로 변화시킴
  // 100 프레임이 지날 때마다, 60프레임 동안에는 색상을 빨간색으로 변화
  if (frameCount % 100 < 60) {
    fill(255, 0, 0);
  } else {
    fill(255, 255, 0);
  }
  
  ellipse(circleX, height / 2, circleSize, circleSize);  // 원을 그린다
}
