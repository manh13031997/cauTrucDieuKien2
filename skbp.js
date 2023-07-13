function len() {
    let a= document.getElementById('nobita');
    a.style.top =parseInt(a.style.top) -5 +'px'
}
function phai() {
    let a=document.getElementById('nobita');
    a.style.left=parseInt(a.style.left) -5+'px'
    console.log()
}
function manh12() {
    let a= document.getElementById('nobita');
    a.style.left=parseInt(a.style.left) +5 +'px'
}
function manh() {
    let a = document.getElementById('nobita');
    a.style.top = parseInt(a.style.top) + 5 + 'px'
}
function mmm(as) {
    switch (as.keyCode) {
        case 87:
            len()
            break;
        case 65:
            phai()
            break;
        case 68:
            manh12()
            break;
        case 83:
            manh()
            break;
    }
}
function mm() {

}
window.addEventListener('keydown',mmm)