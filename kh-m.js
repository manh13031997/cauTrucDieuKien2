function js() {
    let cc=document.getElementById('height').value
    let cn=document.getElementById('weigh').value
    let bmi=cn/(cc*cc)
if (bmi<18) {
    document.getElementById("tổng").innerHTML = "gầy";
} else if (bmi<=25) {
    document.getElementById("tổng").innerHTML = "bình thường"
} else if (bmi<30) {
    document.getElementById("tổng").innerHTML = "thừa cân"
}
else{
                document.getElementById("tổng").innerHTML="béo phì"
}
}