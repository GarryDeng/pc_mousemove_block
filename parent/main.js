import html from './template/index.html';
document.getElementById('app').innerHTML = html


const abc = document.getElementById('abc');
let x=0,y=0;

window.addEventListener('message', function(event) {
    // if(event.origin == 'http://localhost:8082') {
        if(event.data.status == 'down') {
            x = Number(event.data.x);
            y = Number(event.data.y);
        }
        if(event.data.status == 'move') {
            let ax = Number(abc.style.left.replace('px',''))
            let ay = Number(abc.style.top.replace('px',''))
            abc.style.left = Number(event.data.x) -x + ax + 'px';
            abc.style.top = Number(event.data.y) -y + ay + 'px';
        }
    // }
})
