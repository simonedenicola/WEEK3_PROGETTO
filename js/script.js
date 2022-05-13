function visualizza(char)
    {
        if(document.getElementById("schermo").value=="0" || document.getElementById("schermo").value==null)
        {
            document.getElementById("schermo").value=char;
        }else{
            document.getElementById("schermo").value+=char;
        }
    }
function calcola() 
    { 
        document.getElementById("schermo").value=eval(document.getElementById("schermo").value); 
    }
function cancella() 
    { 
        document.getElementById("schermo").value="0"; 
    }