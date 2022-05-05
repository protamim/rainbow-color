const colors = ['red', 'green', 'orange', 'yellow', 'blue', 'indigo', 'violet']

const container = document.getElementById('container')
const text = document.getElementsByTagName('h1')[0]
const selectedColor = document.querySelector('#selectedColor')

for(let color of colors){
    const box = document.createElement('div')
    container.appendChild(box)
    box.classList.add('box')
    box.style.backgroundColor = color
    
    box.addEventListener('click', function () {
        text.textContent = 'You have selected: '
        selectedColor.style.backgroundColor = color
        selectedColor.textContent = color
    })

}