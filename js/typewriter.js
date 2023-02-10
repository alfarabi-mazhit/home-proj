let output = document.getElementById('banner-text-output')
let showText = "Let's Develop Your Next Great App!"
let i = 0
printWord()
function printWord(){
    if(i<=showText.length){
        output.innerHTML = showText.substr(0,i)
        i++
        setTimeout(printWord,100)
    }
    else{
        setTimeout(deleteWord,1500)
    }
}
function deleteWord(){
    if(i >= 0){
        output.innerHTML = showText.substr(0,i)
        i--
        setTimeout(deleteWord,100)
    }
    else{
        i = 0
        setTimeout(printWord,300)
    }
}