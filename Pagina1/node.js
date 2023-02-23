var bot_exec = document.getElementById('executar')
bot_exec.addEventListener('click',executar)
var bot_limp = document.getElementById('limpar')
bot_limp.addEventListener('click',limpar)
var oct_html = 0;
var oct_js = 0;

var limparTexto = document.getElementById("limparCampo")
limparTexto.addEventListener("click", textoLimpo)

var voltarPagina = document.getElementById("voltarPagina")
voltarPagina.addEventListener('click',voltarPaginaInicial)

function executar(){
    var oct_html
    var oct_js
    oct_html = document.getElementById('inserirhtml').style.display = 'none'
    oct_js = document.getElementById('inserirjs').style.display = 'none'
}

function limpar(){
    oct_html = document.getElementById('inserirhtml').style.display = 'block'
    oct_js = document.getElementById('inserirjs').style.display = 'block'


}

    function voltarPaginaInicial(){

    }

    function textoLimpo(){
        
    }