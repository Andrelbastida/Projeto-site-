/*function autoResize()
    {
        objTextArea = document.getElementById('codehtml');
        while (objTextArea.scrollHeight > objTextArea.offsetHeight)
        {
            objTextArea.rows += 1;
        }
    }
*/
var mp1 = 0
var mp2 = document.getElementById('page2').style.display = 'none'
var btn_exec = document.getElementById('btnExecutar')
btn_exec.addEventListener('click',gerar);
var btn_volt = document.getElementById('btnVoltar')
btn_volt.addEventListener('click',voltar);

function gerar(){
    mp1 = document.getElementById('page1').style.display = 'none';
    mp2 = document.getElementById('page2').style.display = 'block';
}

function voltar(){
    mp1 = document.getElementById('page1').style.display = 'block';
    mp2 = document.getElementById('page2').style.display = 'none';
}