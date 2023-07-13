    // let bong=null;
    // bong=document.getElementById('manh');
   function aaa() {
       bong=document.getElementById('manh');

       bong.style.position='relative';
       bong.style.left='0px';
       bong.style.top='0px';


}
function aa() {
    console.log(bong.style.top)
        bong.style.top=parseInt(bong.style.top)+10+'px';
    bong.style.left=parseInt(bong.style.left)+10+'px';

    }
    window.onload=aaa;