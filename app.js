//                                                 // Javascript assignment 2
//                                                 // Chapter 38-42
//                                                 //Question No. 1
// function power(a,b){
//     return a**b
// }
// document.write(power(3,2))

//                                                 //Question No. 2
// function leapYear(){
// var year = +prompt("Enter an year")
// if (year%4 === 0){
//     document.write("Yup! Its a leap year")
// }
// else{
//     document.write("Nope! Not a leap year")
// }
// }

//                                                 //Question No. 3
// function AreaOfTraingle(a,b,c){
//     var s = (a+b+c)/2
//     var area = (s)*(s-a)*(s-b)*(s-c)
//     document.write("The area of a traingle is :" + area + "sq. unit")
// }

//                                                 //Question No. 4
// function avg(a,b,c){
//     return (a+b+c)/3
// }
// function perc(d,e,f){
//     return (d+e+f)*(100/300)
// }
// function marksheet(Eng,Math,Physic){
//     document.write("Average Marks obtained" + avg(Eng,Physic,Math))
//     document.write("Percentgae : " + perc(Eng,Math,Physic) + "%")
// }
                                        
//                                                 //Question No. 5
// function inndexOF(){
//     word = prompt("Enter a word ")
//     entr = prompt("enter the charcter you want to find index of : ")
//     for (var i=0 ; i<word.length ; i++){
//         charcter = word[i]
//         if (charcter === entr){
//             document.write("the index of letter " + charcter + "is" + i)
//             break
//         }
//         else{
//             continue
//         }
//     }
// }

// //                                                 //Question No. 6
// function vowelDel() {
//     var word= ""; 
//     var inp = prompt('Enter a sentence of length not more than 25 character')
//     var rest = inp.replace(["a","e","i"],"")
// //     for (var i = 0; i<inp.length; i++){
       
// //         document.write(inp.slice(i,i+1) + "\n")
// //         inp.replace("a","")
// //     }
//     document.write(rest)
// }
// vowelDel()

//                                                 //Question No.  7
// var vowelinstance = prompt("Enter a word or line");
// var count = 0;
// for (var i =0 ; i< vowelinstance.length; i++){
//     switch(vowelinstance.slice(i,i+1)){
//         case ("a"|"e"|"i"|"o"|"u"):
//                 case (vowelinstance.slice(i+1,i+2)=== "a"):
//                     count= count +1
            
//     }
// }
// document.write(count)

//                                                 //Question No. 8
// dist = +prompt("Enter the distance between two points in km : ")
// function distconverter(dist){
//     var feet = dist * 3280
//     var m = dist * 1000
//     var inches =  dist * 39370
//     var cm = m *100
//     document.write(feet + "ft <br>" + m + "m <br>" + inches + "inches <br>" + cm + "cm <br>")
// }

//                                                 //Question No. 9
// function overTime(){
//     hours =  +prompt("Enter the Node. of hour you worked for : ")
//     if (hours > 40){
//         OTP = (hours -40)*12 
//     }
//     document.write("Your Overtime pay is : " + OTP)
// }

                                                //Question No. 10
// function NoteCount(){
//     var Amount = +prompt("Enter the amount : ")
//     var hundreds,fifty,tens = 0
//     if (Amount >= 100){
//         hundreds = Math.floor(Amount/100)
//         if ((Amount - Math.floor(Amount/100)*100) != 0 && (Amount - Math.floor(Amount/100)*100) >= 50){
//             var remaining = Amount - Math.floor(Amount/100) *100
//             fifty = Math.floor(remaining/50)
//         }
//         if ( (remaining - 50) != 0 && (remaining - 50) < 50){
//             tens = Math.floor((remaining-50)/10)
         
//         }
//     document.write("you have " + hundreds + " hundreds notes, " + fifty + " notes of fifty & " + tens + " notes of tens")
//     }
//     if (Amount < 100){
//         fifty = Math.floor(Amount/50)
//         if( (Amount - fifty*50)!=0){
//             tens = Math.floor((Amount - fifty*50)/10)
//         }
//     document.write("You have " + fifty + " Note of fifty & " + tens + " Notes of ten")
//     }
//     else if (Amount <50) {
//         document.write("you have " +Math.floor(Amount/10) + " Notes of ten" )
//     }
// }


                                            //Chapter No.  43-48
                                            // Question no. 3
function del(a) {
    document.getElementById("mytable").deleteRow(a) 
    
}

// var count=0                             //Question NO.5
// function increase(){
//     counter = document.getElementById("counter")
//     counter.value=++count

// }
// function decrease(){
//     counter = document.getElementById("counter")
//     counter.value=--count

// }

                                            //Chapter 49-52
                                            //question No. 1
// function getvalue(){
//     var data = document.getElementById("Username").value
//     var text =document.getElementById("data")
//     text.innerHTML=data
//     document.getElementById("aa").style.display = "none"
    
// }

                                            //Question No. 2
// function Readmore(){
//     var text = "There are the further details odf the item: <ul> <li>a</li> <li>c</li> <li>c</li> <li>c</li> </ul> "
    
//     var readMore= document.getElementById("readmore")

//     readMore.innerHTML= text
// }

                                            //Question No.3
// function SNo(){
//     var b=0
//     document.write(b)
//     b++
    
// }
// function Delete(b){
//     document.getElementById("Table").deleteRow(b)
// }
// function Update(i){
//     document.getElementById("mytable").className="hidden"
    // document.getElementById("hiddenText").className="None"
//     var aa = document.getElementsByTagName("tr")[i]
//     document.getElementById("Name").innerHTML= aa.textContent
    
// }


                                            //Chapter 53-57
                                            //Question No. 1
// function zoom(a){
//     document.getElementById(a).className = "zoom";
//     document.getElementById("Every").className= "ZoomButton" ;
//     document.getElementById("FBody").style.background="grey";
//     document.getElementById("FBody").style.transition="2s"
// }
// function again(){
//     document.getElementById("img 1").className = "Again";
//     document.getElementById("img 2").className = "Again";
//     document.getElementById("img 3").className = "Again";
//     document.getElementById("img 4").className = "Again";
//     document.getElementById("Every").className= "Again";
//     document.getElementById("FBody").style.background="white"
        
// }

                                                //Question No. 2
// function zoomin(){
//     var b = 1
//     var c=26
//     var d= "px"

//     var para = document.getElementById("Para").style.fontSize +=  
//     b++
// }
// function zoomout(){
    
//     var para = document.getElementById("Para").style.fontSize = " 6px" 
    
// }


                                                //Chapter 58-67

                                                //Question No. 1
                                                // i & ii
// var aa = document.getElementById("main-content").textContent
// var bb = document.getElementById("Para")
// bb.innerHTML=aa
                                                // iii 
// var render = document.getElementsByClassName("render")
// for (var i=0;i<4;i++){
//     document.write(render[i].innerHTML)
// }
//                                                  //iv
// var firstName= document.getElementById("first-name")
// firstName.value="Ahmed"   
//                                                 // V
// var lastName= document.getElementById("last-name")
// lastName.value="Usama"
// var email = document.getElementById("email")
// email.value= "ahmed.usama25@hotmail.com"   

                                                    //Question No. 2
var aa = document.getElementById("form-content").nodeType
document.write(document.getElementById("last-name").childNodes[1])