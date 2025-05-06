const target = document.getElementById('target');
const clickCountElement = document.getElementById('clickCount');
const avgTimeElement = document.getElementById('avgTime');

let clickCount = 0;
let totalReactionTime = 0;
let lastClickTime = 0;

function getRandomPosition() {
    const container = document.querySelector('.container');
    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;
    
    const maxX = containerWidth - target.clientWidth;
    const maxY = containerHeight - target.clientHeight;
    
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
    
    return { x: randomX, y: randomY };
}

function showTarget() {
    const position = getRandomPosition();
    target.style.left = `${position.x}px`;
    target.style.top = `${position.y}px`;
    target.style.display = 'block';
}

function hideTarget() {
    target.style.display = 'none';
}

function updateStats(reactionTime) {
    clickCount++;
    totalReactionTime += reactionTime;
    const avgTime = Math.round(totalReactionTime / clickCount);
    
    clickCountElement.textContent = clickCount;
    avgTimeElement.textContent = avgTime;
}

target.addEventListener('click', (e) => {
    const currentTime = Date.now();
    const reactionTime = currentTime - lastClickTime;
    
    updateStats(reactionTime);
    hideTarget();
    showTarget(); // 지연 없이 바로 다음 타겟을 보여줌
    lastClickTime = currentTime;
});

// 게임 시작
hideTarget();
showTarget(); // 첫 타겟을 바로 보여줌
lastClickTime = Date.now(); 