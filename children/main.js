import html from './template/index.html';
const app = document.getElementById('app');
app.innerHTML = html

var isMove = false;

app.onmousedown = function (event) {
    window.parent.postMessage({x: event.x, y: event.y, status: 'down'}, '*')
    //* 建议取具体域名，避免有安全问题 如https://www.xxxx.com
    event.preventDefault()
    this.style.cursor = 'move'
    isMove = true;
}

app.onmouseup = function (event) {
    this.style.cursor = 'auto'
    isMove = false;
}
app.onmousemove = function (event) {
    if(isMove) {
        window.parent.postMessage({x: event.x, y: event.y, status: 'move'}, '*')
    }
}