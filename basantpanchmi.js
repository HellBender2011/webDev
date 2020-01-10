//var firstname = prompt("enter us firstname");
//var lastname = prompt("enter us lastname");
//var age = prompt("enter us age");
//alert(firstname + lastname + "his//her name is");
//alert("your days are limited samisana" + (age * 36));
//var age = prompt("enter your age");
//if (age<0) {
//	alert("an error message");
//}
//else if(age == 21){
//	alert("happy 21st birthday !!");
//}
//var i = age%2;
//if (!(i<1 && i>-1)) {
//	alert("your age is odd!");
//}
//if ((age/sqrt(age))=sqrt(age)) {
//	alert("print square!");
//}
//var number = prompt("enter the number");
//if (number<16) {
//	alert("number is low");
//}
//else if (number > 16) {
//	alert("number is high");
//}
//else if (number===16) {
//else{
//	alert("love you pratilsha");
//}
// num = -10;
//while(num<=19){
//	console.log(num);
//	num+=1;
//}
 
//var num2 = 300;
//while(num2<=333){
//	if (num2%2!==0)
//	console.log(num2);
//	num2+=1;
//}
//var num3 = 5;
//while(num3<=50){
//	if ((num3%5===0)&&(num3%3===0))
//    console.log(num3);
//	num3+=1;
//}
//var num = 0;
//var count = 0;
//var str = prompt("are we there yet ?");
//while(num<1){
//	var str = prompt("are we there yet ?");
//	if (str="yes" || str="yeah") {
//		alert("yay, we finally made it");
//		num = 1;
//	}
//	else {
//		while(count<(str.length)){
//			if (str[count]==='y'&&str[count+1]==='e'&&str[count+2]==='s'){
//			alert("yay, we finally made it");
//			}
//			count++;
//			}
//}
//} 
//for(var i=-10; i<=19;i++){
//	console.log(i);
//}
//for(var j=10;j<=40;j++){
//	if (j%2===0) {console.log(j);}
//}
//for(var k=300;k<=333;k++){
//	if (k%2!==0) {console.log(k);}
//}
//for(var l=5;l<=50;l++){
//	if(l%5===0 && l%3===0) {console.log(l);}
//}
//function greet (person1,person2,person3){
//	console.log("jai ram"+person1);
//	console.log("jai ram" +person2);
//	console.log("jai ram" +person3);
//}
//greet("ram", "ram", "ram");
//greet = 1;
//console.log(greet);
//function isEven(i){
//	if (i%2===0) {
//		return true;
//	}
//}
//function factorial(k){
//if(k>0){
//	for(j=1;j<k;j++){
//		k = k*(k-1)
//	return k;
//	}
//	}
//	 if(k=0){
//return 1;
//}
//}
//function kebabtosnake (l){
//        var newStr = l.replace(/-/g, "_");
//        return newStr;
//}
//window.setTimeout(function() {
  // put all of your JS code from the lecture here
//var i = 0;
//var todo = [];
//for(var i = 0;i<1;i++){
//var value1 = prompt("what would you like to do ?");
//if(value1 === "new"){
//	var value2 = prompt("what would you like to do ?");
//	if (value2 === "list") {
//	todo.push("value1");
//	console.log(todo);
//	}
//	else (
//		var value3 = prompt("what would you like to do ?");
//		todo.push("value3");
//		console.log(todo);
//		)
//}
//else if(value1 === "quit"){
//i++;
//}
//}
//}, 500);
//function square(x){
//	return x*x;
//	console.log(x*x);
//}
//square(4);
//var colors = [];
//var input = prompt("what do you want you do ?");
//if(input === "new"){
//colors.push(input);
//input = prompt("what do you want you do ?");
//}
//else if(input === "list"){
//	colors.forEach(function(color){
//		console.log(color);
//	});
//input = prompt("what do you want you do ?");
//}
//else if(input === "delete"){
//	var input2 = prompt("which position array ?");
//	colors.pop(input2);
//input = prompt("what do you want you do ?");
//}
//else{
//	alert("ok quit ");
//}

//printReverse();

//function printReverse(){
//	var todos = [];
//	var j = prompt("how many array members do you want to add ?");
//    for(i=0;i<j;i++){
//    	var k = prompt("now the actual members");
//    	todos.push(k);
//    	 console.log(todos);
//    }
//	todos.forEach(function(todo, index){
//		input = todos.length;
//		console.log(todos[input-(index+1)]);
//	});
//}

//isUniform();

//function isUniform(){
//	var todos = [];
//	var j = prompt("how many array members do you want to add ?");
//    for(i=0;i<j;i++){
//    	var k = prompt("now the actual members");
//    	todos.push(k);
//    	 console.log(todos);
//    }
//    todos.forEach(function(todo, index){

//    	if(todos[index] === todos[index+1]){
//    		console.log(todos);
//    		console.log("true");

//    	}
//    	else{
//    		console.log("false");
//    	}
//    });
//}

//sumArray(); 


//function sumArray(){
//var todos = [];
//	var j = prompt("how many array members do you want to add ?");
//    for(i=0;i<j;i++){
//    	var k = prompt("now the actual members");
//    	todos.push(k);
//    	 console.log(todos);
//    }
    //todos.forEach(function(todo, index){
    //		var sum = (todos[index]+todos[index+1]);
    //		console.log(sum);
    //	});
//    var sum = 0;
//for(var l = 0; l<j; l++){
//	 sum = (todos[l+1]+sum);
//	console.log(sum);
//}

//}

//max();

//function max(){
//	var todos = [];
//	var j = prompt("how many array members do you want to add ?");
//    for(i=0;i<j;i++){
//    	var k = prompt("now the actual members");
//    	todos.push(k);
//    	 console.log(todos);
//    }
//    var a = 0;
//    todos.forEach(function(todo, index){
//    		for(l=0;l<j;l++){
//    			if (todos[l]>todos[l+1]) {
//    				
//    				todos[1] = todos[l+1];
//    				
//    			}
//    		}
//    		
//    	});
//
//    		var maxvar = todos[j];
//    		console.log(maxvar);
//}



//var movieobjects = [
//{ title: "In bruges",
//  rating: "5 stars",
//  haswatched: "you have seen"
//},
//{ title: "Frozen",
//  rating: "4.5 stars",
//  haswatched: "you have not seen"
//},
//{ title: "mad max fury road",
//  rating: " 5 stars",
//  haswatched: "you have seen"
//},
//{ title: "les miserables",
//  rating: "3.5 stars",
//  haswatched: "you have not seen"
//}
//]

//for(i=0;i<4;i++){
//	console.log(movieobjects[i].haswatched+ " " + movieobjects[i].title + "-" + movieobjects[i].rating);
//}

//for(var i = 0; i<links.length;i++){
//	console.log(links[i].textContent)
//}

//var button = document.querySelector("button");
//for(var i = 0; i<6;i++){
//button.addEventListener("Click",function(){
//	if(i%2=0){
//		document.bgcolor = "white";
//	}
//	else{
//		document.bgcolor = "orange";
//	}
//})}  
//var button = document.querySelector("button");

//button.addEventListener("click",function(){
//	for(var i = 0; i<3;i++){
//		if(i%2==0){
//		document.bgColor = "white";
//	}
//	else{
//		document.bgColor = "orange";
//	}
//}});
//var i = 0;
//while(i<40){
//       button.addEventListener("click",function(){
//       if(i%2==0){
//       document.body.style.background = "white";
//    }
//    else if(i%2 != 0){
//      document.body.style.background = "orange";
//    }
//})};
alert("connected");

//var i = 0;
//var j = tag7;
//var tag = document.querySelector("span");
//tag.textContent = "i";
//var tag2 = document.querySelector("p");
//tag2.textContent = "i";
//var tag8 = document.querySelector("h2");
//var tag3 = document.querySelector("#playerone");
//var tag4 = document.querySelector("#playertwo");
//var tag5 = document.querySelector("button");
//var tag6 = document.querySelector("#submit");
//var tag7 = document.getElementById('submit').value;
//var tag9 = document.getElementById('reset');
//tag8.textContent = tag7;
//span.addEventListener("click",function()
//{
//  if(i<j){i = i++;}
//  else{
//  	i = j ;
//  }
//});
//p.addEventListener("click",function()
//{
//  if(i<j){i = i++;}
//  else{
//  	i = j ;
//  }
//});
//playerone.addEventListener("click",function(){
//	if (i<j) {i = i++;}
//	else{
//		i = j;
//	}
//});
//playertwo.addEventListener("click",function(){
//	if(i<j){i= i++;}
//	else{
//		i=j;
//	}
//});
//submit.addEventListener("click",function(){
//     submit.textContent = tag7;
//})
//reset.addEventListener("click",function(){
//	i = 0;
//	j = 0;
//}); -->

var events = document.querySelectorall("code");
for (var i = 0; i < events.length; i++){
	console.log("i");
}