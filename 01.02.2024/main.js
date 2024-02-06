// let elem = document.getElementById('example')
// console.log(elem.clientWidth)
// console.log(elem.offsetWidth-elem.cl)
// console.log(elem.clientTop)
// console.log(elem.clientWidth)
// console.log(elem.clientWidth)
// console.log(elem.getComputedStyle)
// console.log()
// let text = document.getElementById('elem')

// function sendMassege(){
//     alert(`sendend masege: ${text.value}`)
// }

// text.onchange = function (){
//     console.log(`sended message: ${text.value}`)
// }

// text.onfocus

// elem.addEventListener('click',() => alert('sdgsdsdgsgd'))
// if (document.querySelector('#elem').value === '123'){
//     elem.removeEventListener('click',() => alert('dfsfsdfsd'))
// }

// elem.onclick = function (event){
//     console.log(event.type, event.currentTarget)
//     event.currentTarget.textContent = 'Not send'
//     console.log(event.clientX, event.clientY)
// }

// document.querySelector('.info').addEventListener('click', 
//     () => alert('p'))
// document.querySelector('.link').addEventListener('click', 
//     (event) => {alert('li');
//     event.stopPropagation();
// })
// document.querySelector('.block').addEventListener('click', 
//     () => alert('div'), capture = true)

let parent = document.querySelector('.sheet')

parent.addEventListener('click',(event) =>{
    let target = event.target;
    if (target.classList.contains == 'DIV'){
        target.classList.add('light');
    } else if (target.tagName == 'DIV'){
        target.classList.add('light');
    }
    selected = target
    if (selected){
        let target = event.target;
        if (target.classList.contains == 'DIV'){
            target.classList.add('light');
    }   else if (target.tagName == 'DIV'){
            target.classList.add('light');
    }
    }
})

let elem = document.querySelector('.field')
elem.addEventListener('click', (event) => {
    console.log(event.clientX, event.clientY)
    document.querySelector('.ball').style.left = event.clientX + 'px'
    document.querySelector('.ball').style.left = event.clientX + 'px'
})