let cities = ["faisalabad","lahore","karachi" ]
cities[2] = "sangla"
// proper method to enter city at the end can also add multiple cities
cities.push("islamabad")
// to enter city at the end
cities[cities.length] = "kashmir"
// for change the last city
cities[cities.length-1] = "azad kashmir"
// proper method to enter city at the start
cities.unshift("karachi","shakot")
// for removing last city 
// cities.pop()
// for removing first city
// cities.shift()
console.log(cities)
// copy of array to make changes write index between paranthesis to copy that index
// let copyOfcities = cities.slice(2,5)
// used to remove/add city write index in paranthesis  
// let copyOfcities = cities.slice()
// copyOfcities.splice(2,0, "hunza")
// console.log("copycities",copyOfcities)
var Text = document.getElementById('originalText').innerText
console.log(Text)
document.getElementById("btn1").onclick = function(){
    let usernum = document.getElementById('input/text').value
    if(!usernum){
        alert("Enter the that you want to round off")
        return
    }
    usernum = Math.round(usernum)
    document.getElementById('output-section').innerHTML = usernum
}
document.getElementById("btn2").onclick = function(){
    let usernum = document.getElementById('input/text').value
    if(!usernum){
        alert("Enter the number that you want Ceil")
        return
    }
    usernum = Math.ceil(usernum)
    document.getElementById('output-section').innerHTML = usernum       
}
document.getElementById('btn3').onclick = function (){
    let usernum = document.getElementById('input/text').value
    if(!usernum){
        alert("Enter the number that you want Floor")
        return
    }
    usernum = Math.floor(usernum)
    document.getElementById('output-section').innerHTML = usernum
}
document.getElementById('btn4').onclick = function (){
    let num = Math.random()
document.getElementById('output-section').innerHTML = num

}
document.getElementById("btn5").onclick = function (){
    let dice = Math.random()
    dice = dice*6
    dice = dice + 1
    dice = Math.floor(dice)
    document.getElementById('output-section').innerHTML = dice
}

document.getElementById('btn6').onclick = function(){
    let randomString = ""
    let uppercase = "ABCDEFGHIGKLMNOPQRSTUVWXYZ"
    let lowercase = "abcdefghijklmnopqrstuvwxyz"
    let num = "1234567890"
    let symbols = "`~!@#$%^&*-_=+/?.,"
    let all = uppercase + lowercase + num + symbols
    console.log(all)
    console.log(all.length)
    let length = +prompt("Enter the length of password")
    if(!length){
        alert("Enter the length of password")
        return
    }
    let limit = length
    for(let i=0;i<limit;i++){
        let randomnum = Math.random()
        randomString += all.charAt(Math.floor(randomnum*all.length)) 
        document.getElementById('output-section').innerHTML = randomString
    }
}

document.getElementById('btn7').onclick = function(){
    let userCity = document.getElementById("input/text").value
       if(userCity.length<3){
          alert("Enter your city name correctly")
          return
        }
    let cityFirstLetter = userCity.slice(0,1).toUpperCase()
    // console.log(cityFirstLetter)
    let cityAllLetters = userCity.slice(1).toLowerCase()
    // console.log(cityAllLetters)
    let userCityCapitalize = cityFirstLetter + cityAllLetters
    // console.log(userCityCapitalize)
    let cityFound = false
    for(i=0;i<cities.length;i++){
        if(cities[i] === userCityCapitalize){
            cityFound = true
            let html = '<span style = "color:red; font-size:20px;">"'+userCityCapitalize+'"</span>is already in list'
            document.getElementById("output-section").innerHTML = html
        }
    }
    if(cityFound === false){
        cities.push(userCityCapitalize)
        let html = 'Click on<span style = "color:green; font-size:20px;">"Add your city in list"</span> to add your city in list'
        document.getElementById("output-section").innerHTML = html
    }
}

document.getElementById('btn8').onclick = function(){
    // console.log(Text)
    let originaltext = Text.toLowerCase()
    let userword = document.getElementById("input/text").value
    if(!userword){
        alert("Enter a word that you want to find")
        return
    }
    userword = userword.toLowerCase()
    let findword = originaltext.indexOf(userword)
    console.log(findword)
    if(findword !==-1){
        let html = 'your word is at index <span style = "color:green; font-size:20px;">"'+findword+'"</span>'
        document.getElementById('output-section').innerHTML = html
    } else {
        let html = ' <span style = "color:green; font-size:20px;">"'+userword+'"</span> is not found in original text'
        document.getElementById('output-section').innerHTML = html
    }
}
document.getElementById('btn9').onclick = function(){
    // let cnic = '33198-1345467-5'
    // let word = "-"
    // let replacewith = " "
    // word = new RegExp(word,'g')
    // let cinicwithout = cnic.replace(word,replacewith)
    // console.log(cinicwithout)
    let boxtext = Text.toLowerCase()
    let word = document.getElementById("input/text").value
    if(!word){
        alert("Enter the word which you want to replace")
        return
    }
    let replacewith = prompt('Enter the word with which you want to replce')
    word = word.toLowerCase()
    word = new RegExp(word,'g')
    replacewith = replacewith.toLowerCase()
    let original = boxtext.replace(word,replacewith)
    console.log(original)
    document.getElementById('output-section').innerHTML = original
}

document.getElementById("clear").onclick = function (){
    document.getElementById("output-section").innerHTML = ""
}



