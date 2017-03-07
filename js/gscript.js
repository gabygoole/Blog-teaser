/**
 * Created by Gaby on 3/3/2017.
 */
window.onload = prepareCollapse;

function prepareCollapse() {
    if(window.innerWidth > 414){
        return false;
    }
    if(!document.getElementsByClassName) {
        return false;
    }
    if(!document.getElementsByClassName("column")) {
        return false;
    }
    if(!document.getElementsByClassName("title")) {
        return false;
    }

    var fiveColumns = document.getElementsByClassName("column");
    for(var i = 0; i < fiveColumns.length; i++) {
        var currenColumn = fiveColumns[i];
        var aTag = currenColumn.getElementsByClassName("title")[0];
        var ulTag = currenColumn.getElementsByClassName("items")[0];
        var style = getComputedStyle(ulTag);
        var ulTagDisplay = style.getPropertyValue("display");
        aTag.onclick = funcCreation(ulTagDisplay,ulTag);
    }

}

function funcCreation(ulTagDisplay,ulTag) {
    return function () {
        if (ulTagDisplay == "none"){
            ulTag.style.display = "block";
            ulTagDisplay = "block";
        } else {
            ulTag.style.display = "none";
            ulTagDisplay = "none";//这个地方可以改变第27行的ulTagDisplay
        }
        return false;
    }

}