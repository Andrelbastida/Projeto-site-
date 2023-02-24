function autoResize()
    {
        objTextArea = document.getElementById('codehtml');
        while (objTextArea.scrollHeight > objTextArea.offsetHeight)
        {
            objTextArea.rows += 1;
        }
    }