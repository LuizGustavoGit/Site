
//pegando o elemento botão responsivo
const navbar_btt = document.getElementsByClassName("navbar_button")[0];

//pegando os elementos navbar_links e navbar para adicionar a classe active depois
const navbar_link = document.getElementsByClassName("navbar_link")[0];
const navbar = document.getElementsByClassName("navbar")[0];

//função que verifica o tipo de evento e ativa o desativa a classe active
function toggle_menu(event){
    if(event.type == 'touchstart') event.preventDefault();

    navbar_link.classList.toggle('active');
    navbar.classList.toggle('active');
}

//eventos de escuta para click e toque de tela no botão do menu responsivo
navbar_btt.addEventListener('click', toggle_menu);
navbar_btt.addEventListener('touchstart', toggle_menu);