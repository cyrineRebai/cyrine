
  function myFunction() {
  var text;
  if (confirm("Hey le site xxxvidsxxx est trop bien. Viens dessus stp please")) {
    window.location.href=' https://www.youtube.com/watch?v=dQw4w9WgXcQ';
  } else {
    text = "You pressed Cancel!";
  }
  
}


var number = prompt("entrer le nombre d'étages du pyramide", "1");
var rows = number;
for(var i=1; i<=rows; i++)
{
for(var k=1; k<=( rows-i ); k++)
{
console.log(" ");
}
for(var j=1; j<=i; j++)
{
console.log("* ");
}
console.log("<br/>");
}

myFunction();
