const phoneInput = document.querySelector('#phoneInput')
const phoneCheck = document.querySelector('#phoneCheck')
const phoneResult = document.querySelector('.phoneResult')

const phoneRegExp = /^\d{14}$/

phoneCheck.addEventListener('click', () => {
    if (phoneRegExp.test(phoneInput.value)){
        phoneResult.innerText = 'OK'
        phoneResult.style.color = 'blue'
    }else {
        phoneResult.innerText = 'NOT OK'
        phoneResult.style.color = 'red'
    }
})


const bloc = document.querySelector('.bloc')


let num = 0
const log = () => {
    num ++
    if (num < 450){
        bloc.style.left=`${num}px`
        log()
    }
}
log()