function updateSize(){
    screen.style.fontSize='500%'
    textToScreenPercent=screen.clientWidth/input.clientWidth
    if(textToScreenPercent<1){
        screen.style.fontSize=screen.style.fontSize.slice(0,-1)*textToScreenPercent+"%"
    }
}
function numberClicked(number){
    if(result){
        input.innerHTML=''
        result=false;
    }
    input.innerHTML=input.innerHTML+number
    input.innerHTML=input.innerHTML.replace("•",".")
    updateSize()
}
function del(){
    input.innerHTML=input.innerHTML.slice(0,-1)
    updateSize()
}
function ac(){
    input.innerHTML=''
}
function calculate(){
    result=true;
    formula=input.innerHTML
    formula=formula.replace("÷","/")
    formula=formula.replace("π","3.141592653589793")
    formula=formula.replace("x","*")
    try{
        input.innerHTML=eval(formula)
        Ans=eval(formula)
    }catch{
        input.innerHTML="error"
    }
    updateSize()
}
acceptCharacters=['1','2','3','4','5','6','7','8','9','0','.','+','-','/','*']
Ans=0
result=false;
screen=document.getElementById("calculatorScreen")
input=document.getElementById("calculatorInputs")
buttons=document.querySelectorAll("button")
for(i=0;i<buttons.length;i++){
    buttons[i].addEventListener("click", function(){
        if(this.innerHTML=='='){
            calculate()
        }else if(this.innerHTML=='DEL'){
            del()
        }else if(this.innerHTML=='AC'){
            ac()
        }else{
            numberClicked(this.innerHTML)
        }
    })
}
document.addEventListener("keydown",function(key){
    console.log(key)
    if(key.key=="Enter"){
        calculate()
    }else if(key.key=="backspace"){
        del()
    }else if(acceptCharacters.includes(key.key)){
        numberClicked(key.key.replace('/','÷').replace('*','x'))
    }
})