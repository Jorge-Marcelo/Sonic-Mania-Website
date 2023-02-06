/*Função para Abrir o menu*/
function openNav(){
document.getElementById("myNav").style.width="100%"; // Largura do menu 100%
document.getElementById("myNav").style.display="flex"; // Alterando o diplay do menu de none para flex quando for clicado
document.getElementById("menu-button-close").style.display="flex";//Mudando o display do botão de fechar


}

/*Função para Fechar o menu*/
function closeNav(){
document.getElementById("myNav").style.width="0%";//Largura do menu 0 quando for fechado
document.getElementById("menu-button-close").style.display="none";//Mudando o display do botão de fechar

}