const hamburguer = document.querySelector('.hamburguer').addEventListener('click', open)

function open(){
    const navigation = document.querySelector('.nav-principal').classList.toggle('open')
}