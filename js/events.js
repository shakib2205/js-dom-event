//option 1
//this is important
function makeRed(){
    const makeRed =document.body.style.backgroundColor = 'red';
}

//option 2
const makeBlueBtn = document.getElementById('make-blue');
makeBlueBtn.onclick =makeBlue;

function makeBlue(){
     document.body.style.backgroundColor = 'blue'
}

//option 3
const purpleButton = document.getElementById('make-purple');
        purpleButton.onclick = function makePurple(){
            document.body.style.backgroundColor ='purple';
        }

//option 4
const pinkButton = document.getElementById('make-pink');
        pinkButton.addEventListener('click',  function makePink(){
            document.body.style.backgroundColor = 'pink';
        }) 

//final option ready to use
//this is also important
//maximum time we will use this method
document.getElementById('make-green').addEventListener('click',function(){
    document.body.style.backgroundColor = 'goldenrod'
})