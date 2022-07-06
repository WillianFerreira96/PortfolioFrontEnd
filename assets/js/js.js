/************************ver mais e menos*******************************/
const btn_ver_mais = window.document.getElementById("btn_ver_mais")
const btn_ver_menos = window.document.getElementById("btn_ver_menos")
const moreRow = window.document.getElementById("moreRow")
btn_ver_menos.addEventListener('click', ver_menos)
btn_ver_mais.addEventListener('click', ver_mais)

function ver_mais(){
    moreRow.style.display = "flex"
    btn_ver_menos.style.display = "block"
    btn_ver_mais.style.display = "none"
}
function ver_menos(){
    moreRow.style.display = "none"
    btn_ver_menos.style.display = "none"
    btn_ver_mais.style.display = "block"
}

/************************Scroll*******************************/
function getDistance(element){
    return document.getElementById(element).offsetTop
}

function scrollToSection(element){
    window.scroll({
        top: getDistance(element)-50,
        behavior: "smooth"
    })
}
/************************animação escrever*******************************/

const nome = document.getElementById('nome')
const saidaNome = document.getElementById('saidaNome')
nome.style.display='none'
cont = 0
function EfeitoDigitacao(){
    if(cont<nome.textContent.length){
        setTimeout(function(){
            saidaNome.innerText += nome.textContent .charAt(cont)
            cont++
            EfeitoDigitacao()
        },150)
    }        
}

/************************animação scroll*******************************/

/*
function getDistance(element){
    return document.getElementById(element).offsetTop
}

function scrollAnimacao(){
    if(scroll>getDistance('sobre-mim')){
        document.querySelector('#sobreMim-box-text h2').classList.add.animation = 'scrollAnimacaoLeft 3s normal;'
    }
    
}
*/
