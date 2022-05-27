//--------- task6 --------\\
var circle = prompt("enter circle value for calc");
var square =  prompt ("enter square value for calc ");
var Tangle =parseInt( prompt("enter Tangle value for calc "));

var cArea = Math.PI*circle*Math.pow(circle , 2);
var sArea = Math.sqrt(square);
var TArea = Math.cos(Tangle*(Math.PI / 180)).toFixed(4);


document.write(`<h1> circle area of ${circle} = ${cArea}</h1>`)
document.write(`<h1> square area of ${square} = ${sArea}</h1>`)
document.write(`<h1> Tangle area of ${Tangle} = ${TArea}</h1>`)
