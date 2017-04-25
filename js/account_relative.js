/**
 * Created by Gaby on 3/19/2017.
 */
AddloadEvent(prepareButton);
AddloadEvent(changeInputBackground);

function prepareButton() {
    if(!document.getElementsByClassName) {
        return false;
    }

    if(!document.getElementsByClassName("btn-primary")) {
        return false;
    }

    var greenButton = document.getElementsByClassName("btn-primary")[0];
    greenButton.onclick = changeState(greenButton);
}

function changeState(button) {
    return function () {//这个地方如果不这样写，onclick函数会立即执行
        //另一种解决办法：http://stackoverflow.com/questions/14592004/onclick-event-firing-even-without-click
        button.style.backgroundColor = 'rgba(0, 128, 0, 0.39)';
        button.style.borderColor = 'white';
        var ellipsis = document.createTextNode('...');
        button.appendChild(ellipsis);
        var btnID = button.getAttribute('id');

            window.location.href = "index.html";
            return false;


    }
}

function changeInputBackground() {
    if(!document.getElementById){
        return false;
    }

    if(!document.getElementById('just-post')){
        return false;
    }

    if(!document.getElementById('save-asdraft')){
        return false;
    }

    var postButton = document.getElementById('just-post');
    var draftbutton = document.getElementById('save-asdraft');

    postButton.onclick = function () {
        postButton.style.backgroundColor = 'rgba(39, 174, 96, 0.63)';
    }

    draftbutton.onclick = function () {
        draftbutton.style.backgroundColor = 'rgba(0, 149, 255, 0.63)';
    }
}

function AddloadEvent(func) {
    var oldLoad = window.onload;
    if(typeof window.onload != 'function') {
        window.onload = func;
    } else {
        window.onload = function () {
            oldLoad();
            func();
        }
    }
}