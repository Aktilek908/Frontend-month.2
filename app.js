const phoneInput = document.querySelector('#phoneInput')
const phoneCheck = document.querySelector('#phoneCheck')
const phoneResult = document.querySelector('.phoneResult')

const phoneRegExp = /^\+7 \d{3} \d{3} \d{2}-\d{2}$/

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
    num++
    bloc.style.left=`${num}40px`
}
log()