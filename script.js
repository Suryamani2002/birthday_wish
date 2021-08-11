var mainHeading = document.getElementById("main-heading")
var button_click=document.getElementById("btn-click");

// console.log(mainHeading.classList)
// mainHeading.classList.add('big'); // big is after small in css so big will overwrite small

// mainHeading.classList.remove('big') // for removing the class big
// setTimeout(function(){
//     mainHeading.classList.remove('big')  // after 3 sec big willbe removed
// },3000)
var a=document.getElementById("btn-click")

var main_head=document.getElementById("main_head")







function change_class(){


    if(mainHeading.classList.contains('big')){ 
        mainHeading.classList.remove('big')
        mainHeading.classList.add('small')
    }

    else if(mainHeading.classList.contains('small')){
        mainHeading.classList.remove('small')
        mainHeading.classList.add('big')
    }
    // setTimeout(function(){
    //         mainHeading.classList.remove('big')  // after 3 sec big willbe removed
    //     },500)


    
    if(a.contains(a)){
        a.style.backgroundColor="rgb(86,65,231)"
    }
    
setTimeout(function(){
a.style.backgroundColor="yellow"
},500)

main_head.style.backgroundColor="pink"
// var randomNO=Math.floor(Math.random()*255);
// main_head.style.backgroundColor="rgb("+ randomNO +","+ randomNO +","+ randomNO +")"


}
button_click.addEventListener('click',change_class)












// function onbttnclick1(){

//     if(a.contains(a)){
//         a.style.backgroundColor="coral"
//     }
    
// setTimeout(function(){
// a.style.backgroundColor="white"
// },400)

// main_id.style.backgroundColor="pink"
// // var newListElement=document.createElement('p')
// // var textNode=document.createTextNode('List item')
// // newListElement.appendChild(textNode)
// // list.appendChild(newListElement)

// }

// a.addEventListener('click',onbttnclick1)

