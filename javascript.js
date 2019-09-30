// given 3 strings, find the smallest length....
/*
function findSmallestString(a,b,c) {
    // get all 3 lengths
    const i= a.length
    const j=b.length
    const k=c.length
}*/

function callbill(){

    const first= document.getElementById("first").value
    const second=document.getElementById("second").value;
    const third=document.getElementById("third").value;

    const avg=(parseInt(first)+parseInt(second)+parseInt(third))/3;

    document.getElementById("result").innerHTML="The average is: "+avg;

}
