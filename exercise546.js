// Select all divs and give them a purple background
$("div").css("background", "purple");

// Select the divs with class "highlight" and make them 200px wide
$("div.highlight").css("width", "200px");

// Select the div with id "third" and give it a orange border
$("#third").css("border", "4px solid orange");

// Bonus: Select the first div only and change its font color to pin
$("div:first-of-type").css("color", "pink");

func isOdd(_n:Int)->Bool{
	if(n==0){
	//BASE CASE
		return false
	}
	if(n==1){
		return true
	}
	else{
		n=n-2;
	//RECURSIVE CASE
		return isOdd()
	}
}

isOdd(0)= false
isOdd(1)= true
isOdd(7)=true

func isOdd(n:Int)->Bool{
	if(n==0){
	//BASE CASE
		return false
	}
	if(n==1){
		return true
	}
	else{
		var n=n;
    	n=n-2;
	//RECURSIVE CASE
		return isOdd(n)
	}
}

func isOdd(n:Int)->Bool{
	if(n==0){
	//BASE CASE
		return false
	}
	if(n==1){
		return true
	}
	else{
	//RECURSIVE CASE
		return isOdd(n-2)
	}
}
func ListFact(n:[Int])->String{
	if(n.count==0){
		[]
	}else{
for num:Int in n {
	func factorial(_n:Int)->Int{
		if (n==0){
			return 1
		}else{
			return n*factorial(n-1)
		}
	}
}
}
}
print(ListFact(n))
let monthNames = ["january","february","march","april","may","june","july","august","september","october","november","december"]
let monthDays = ["january":31,"february":29,"march":31,"april":30,"may":31,"june":30,"july":31,"august":31,"september":30,"october":31,"november":30,"december":31]
func daysPastThisYear(month:String,day:Int)->Int{
	for daysGone in monthNames{
		//let yoyo:Int = monthDays[monthNames]
		func factorial(_n:Int)->Int{
			if key==january{
				return 31}
				else{
			for(key,value) in monthDays{
				return day1 = value*factorial(value-1)
			}
		}

		}
	}
}


let someDic = ["a":1, "b":2, "c":3, "d":4, "e":5, "f":6, "g":7, "h":8, "i":9]
for (key,value) in someDic {
    print("key:\(key) value:\(value)")
}