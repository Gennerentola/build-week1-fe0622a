function findIndex() {
    var display = document.getElementsByName("next");
    var check = 0;
    for (i=0; i<display.length; i++) {
        if (display[i].checked==true) {
            check = (i + 1);
        }
    }
    return check;
}

function next() {
    let now = findIndex();
    let next = now + 1;       
    document.getElementById("nav"+ next).checked = true;
    document.getElementById("nav"+ now).checked = false;    
}




/*


function next() {
    let display = document.querySelector('input[name="next"]:checked').id;
    let move = display;
    move = parseInt(move.toString().substring(3,4));
    move = move + 1;    
    let nextStep = "nav" + move;
    document.getElementById(nextStep).checked = true;
    document.getElementById(display).checked = false;    
}
*/
//document.write(move);