

function callvalue(){

    const first= document.getElementById("first").value
    const second=document.getElementById("second").value;
    const third=document.getElementById("third").value;

    const avg=(parseInt(first)+parseInt(second)+parseInt(third))/3;

    document.getElementById("result").innerHTML="The average is: "+avg;

}
