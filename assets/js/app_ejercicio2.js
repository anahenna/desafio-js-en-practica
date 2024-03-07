
const btn1 = document.querySelector('#btn-1')
const btn2 = document.querySelector('#btn-2')
const btn3 = document.querySelector('#btn-3')
const btn4 = document.querySelector('#btn-4')
const btn5 = document.querySelector('#btn-5')
const btn6 = document.querySelector('#btn-6')
const cajajs = document.querySelector('#caja')

btn1.addEventListener("click", () => {
    cajajs.style.backgroundColor = '#e53e3e'
})

btn2.addEventListener("click", () => {
    cajajs.style.backgroundColor = '#dd6b20'
})

btn3.addEventListener("click", () => {
    cajajs.style.backgroundColor = '#faf089'
})

btn4.addEventListener("click", () => {
    cajajs.style.backgroundColor = '#48bb78'
})

btn5.addEventListener("click", () => {
    cajajs.style.backgroundColor = '#81e6d9'
})

btn6.addEventListener("click", () => {
    cajajs.style.backgroundColor = '#d53f8c'
})
