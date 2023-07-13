function manh() {
let a= parseInt(document.getElementById("month").value)
    if (a>0 && a<13){
            switch (a) {
                case 1:
                case 3:
                case 5:
                case 7:
                case 8:
                case 10:
                case 12:
                    document.getElementById("thang").innerHTML="tháng"+a+"có 31 ngày"
                    break;
                case 2:
                    document.getElementById("thang").innerHTML="tháng"+a+"có 28 hoặc 29 ngày"
                    break
                default:
                    document.getElementById("thang").innerHTML="tháng"+a+"có 30 ngày"
                    break
            }
    }else {
        document.getElementById("thang").innerHTML="nhập lại tháng"
    }
}