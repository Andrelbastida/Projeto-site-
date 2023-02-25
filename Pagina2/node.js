/*function autoResize()
    {
        objTextArea = document.getElementById('codehtml');
        while (objTextArea.scrollHeight > objTextArea.offsetHeight)
        {
            objTextArea.rows += 1;
        }
    }
*/
var p1 = 0
var p2 = document.getElementById('page2').style.display = 'none'
var btn_exec = document.getElementById('btnExecutar')
btn_exec.addEventListener('click', gerar);
var btn_volt = document.getElementById('btnVoltar')
btn_volt.addEventListener('click', voltar);


function gerar() {
    p1 = document.getElementById('page1')
    p2 = document.getElementById('page2')

    p1.style.display = 'none';
    p2.style.display = 'block';

    var tHtml = document.getElementById('codeHtml').value
    var tJs = document.getElementById('codeJs').value

    p2.innerHTML = tHtml 
    document.getElementById('jsUser').innerHTML = tJs;
}

function voltar() {
    mp1 = document.getElementById('page1').style.display = 'block';
    mp2 = document.getElementById('page2').style.display = 'none';
}