let num = 0
let num2 = 0
let num3 = 0
document.getElementById("btn1").onclick = function(){
    num = num +1
    console.log(num)
    document.getElementById("head").innerHTML = num
}
document.getElementById("btn2").onclick = function(){
    num = 0
    console.log(num)
    document.getElementById("head").innerHTML = num
}
document.getElementById("btn3").onclick = function(){
    num = num-1
    console.log(num)
    document.getElementById("head").innerHTML = num
    if (num <= 0){
        window.alert("hey you are choosing -ve value")
        num = 0
        document.getElementById("head").innerHTML = "eroor"
    }
}

document.getElementById("btn4").onclick = function(){
    num2 = num2 +1
    console.log(num2)
    document.getElementById("head2").innerHTML = num2
}
document.getElementById("btn5").onclick = function(){
    num2 = 0
    console.log(num2)
    document.getElementById("head2").innerHTML = num2
}
document.getElementById("btn6").onclick = function(){
    num2 = num2-1
    console.log(num2)
    document.getElementById("head2").innerHTML = num2
}

document.getElementById("btn7").onclick = function(){
    num3 = num +num2
    console.log(num3)
    document.getElementById("head3").innerHTML = num3
}
document.getElementById("btn8").onclick = function(){

    if(check.checked){
        console.log("it is checked")
        num3 = num - num2
        console.log(num2)
        document.getElementById("head3").innerHTML = num3
    }
}
document.getElementById("btn9").onclick = function(){
    num3 = num * num2
    console.log(num3)
    document.getElementById("head3").innerHTML = num3
}
document.getElementById("btn10").onclick = function(){
    num3 = num / num2
    console.log(num3)
    document.getElementById("head3").innerHTML = num3
}