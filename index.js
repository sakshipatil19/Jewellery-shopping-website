const parallax = document.getElementsByClassName("sale")

window.addEventListener("scroll", function ()
{
   let  offset = window.pageYOffset;
//    console.log('Offset: ' + offset);
//    console.log('Offset * 0.7: '+ offset*0.7);
   sale.style.backgroundPositionY = offset * 0.7 + "px";
})