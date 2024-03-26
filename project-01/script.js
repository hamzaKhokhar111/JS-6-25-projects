
let index=0;

function changeclr(){
    const clr=["blue","black","pink","green","yellow"]

    document.getElementsByTagName('body')[0].style.background=clr[index++]

    if(index > clr.length -1)
    index=0;

}