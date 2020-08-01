var svit=document.getElementById("id1")

function abc(obj)
{
    var pushed=obj.innerHTML;
    
    if (pushed=="=")
        {
            svit.innerHTML=eval(svit.innerHTML)
        }
    
    else if(pushed=="AC")
        {
            svit.innerHTML="0"
        }
    else if(pushed=="DEL")
        {
            svit.innerHTML=svit.innerHTML.substr(0,svit.innerHTML.length-1)
        }
    else 
        {
            if(svit.innerHTML=="0")
                {
                    svit.innerHTML=pushed
                }
            else
            {
                svit.innerHTML=svit.innerHTML+pushed
            }
        }  
}