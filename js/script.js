// example 1
function formal(){
    document.getElementById("fashion").src = "images/3.jpg"
}
function casual(){
    document.getElementById("fashion").src = "images/1.jpg"
}
function street(){
    document.getElementById("fashion").src = "images/2.jpg"
}

// example 2
function dateTime(){
    document.getElementById("date").innerHTML = Date();
}

// example 3
function revealE(){
    document.getElementById("reveal").innerHTML = "I am just an ordinary text buddy...!";
}
function reveal(){
    document.getElementById("reveal").innerHTML = "অনেক চেস্টা করলাম নিজেকে লুকাই রাখার... কিন্তু পারলাম না... হতাশ, খুবই হতাশ..!";
}

// example 4
function showVar(){
    document.getElementById("variable").innerHTML = "The var keyword should only be used in code written for older browsers.";
}
function showLet(){
    document.getElementById("variable").innerHTML = "Only use let if you can't use const";
}
function showConst(){
    document.getElementById("variable").innerHTML = "Always use const if the value should not be changed. Always use const if the type should not be changed (Arrays and Objects)";
}
function addition(){
    let first = document.getElementById("first_number").value;
    let second = document.getElementById("second_number").value;
    let z = 0;
    z = Number(first) + Number(second);
    document.getElementById("result").innerHTML= z    
}
function subtraction(){
    let first = document.getElementById("first_number").value;
    let second = document.getElementById("second_number").value;
    let z = 0;
    z = Number(first) - Number(second);
    document.getElementById("result").innerHTML= z
}
function multiblication(){
    let first = document.getElementById("first_number").value;
    let second = document.getElementById("second_number").value;
    let z = 0;
    z = Number(first) * Number(second);
    document.getElementById("result").innerHTML= z
}
function division(){
    let first = document.getElementById("first_number").value;
    let second = document.getElementById("second_number").value;
    let z = 0;
    z = Number(first) / Number(second);
    document.getElementById("result").innerHTML= z
}



function sub(){
    let result = document.getElementById("value");
    result = parseInt(result.textContent)
    if(result <= 1){
        result = 0;
        document.getElementById("value").style.color = "red";
    }
    else{
        result--;
        document.getElementById("value").style.color = "black";
    }
    document.getElementById("value").innerHTML = result;
}
function add(){
    let result = document.getElementById("value");
    result = parseInt(result.textContent)
    result++;
    document.getElementById("value").innerHTML = result;
    document.getElementById("value").style.color = "black";
}