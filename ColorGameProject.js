//var colors = ["rgb(255, 0, 0 )",
//"rgb(255, 255, 0 )",
//"rgb(0, 255, 0 )",
//"rgb(0, 255, 255 )",
//"rgb(0, 0, 255 )",
//"rgb(255, 0, 255 )"
//]

//var squares = document.querySelectorAll(".square");
//var pickedColor = colors[3];
//var colorDisplay = document.getElementById("colorDisplay");
//colorDisplay.textContent = pickedColor;
//for (var i = 0; i<squares.length; i++) {
//	squares[i].style.backgroundColor = colors[i];
//}
//var j = 0;
//squares.addEventListener("Click",function(){
//	squares[i] = j;
//})

//squares.addEventListener("Click",function(){
//	squares[j].style.backgroundColor = #232323;
//});
//var g = document.getElementById('square');
//var g = document.querySelectorAll("div");
//var len = g.length;
//for (var j = 0; j < len; j++)
//{

//    (function(index){
//        g[j].onclick = function(){
//              var guessedColorIndex = index  ;
//              console.log(index);
//        }    
//    })(j);

//}
//if (squares[index] === pickedColor) {
//	console.log("you are right");
//}else{
//	squares[index].style.backgroundColor = #232323;
//}
var red = 0;
var green = 0;
var blue = 0;
var colorsprivate = [red][green][blue];
for (var red = 0; red < 257; red++) {
for (green = 0; green< 257; green++ ){
	for (blue = 0; blue <257; blue++){
		colorsprivate.push(blue);
	}
}	
} 
easylevel.addEventListener("Click",function(){
console.log(colorsprivate[Math.floor((Math.random() * 255) + 1);]);
//var squares = document.querySelectorAll(".square");
var pickedColorprivate = colorsprivate[Math.floor((Math.random() * 255) + 1);];
//var colorDisplay = document.getElementById("colorDisplay");
colorDisplay.textContent = pickedColorprivate;
for(var i = 0;i<256; i++){
var correctcolor = pickedColorprivate;
var correctcolor2 = [Math.floor((Math.random() * 255) + 1);
var nextcolor = colordifference;
var colordifference < 5;
correctcolor - correctcolor2 = colordifference;
}
var squares = document.querySelectorAll(".square");
for (var i = 0; i<squares.length; i++) {
	squares[i].style.backgroundColor = colorsprivate[Math.floor((Math.random() * 255) + 1);];
}	
})
console.log(colorsprivate[Math.floor((Math.random() * 255) + 1);]);
//var squares = document.querySelectorAll(".square");
var pickedColorprivate = colorsprivate[Math.floor((Math.random() * 255) + 1);];
//var colorDisplay = document.getElementById("colorDisplay");
colorDisplay.textContent = pickedColorprivate;
var correctcolor = pickedColorprivate;
var squares = document.querySelectorAll(".square");
for (var i = 0; i<squares.length; i++) {
	squares[i].style.backgroundColor = colorsprivate[Math.floor((Math.random() * 255) + 1);];
}
//var j = 0;
//squares.addEventListener("Click",function(){
//	squares[i] = j;
//})
var easylevel = document.getElementById("easy");
easy.addEventListener("Click",function(){
})
var hardlevel = document.getElementById("hard");