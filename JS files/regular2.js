function validate()
{
    var username=document.getElementById("uname").value;
    var regx=/[a-x]00/i;
    //regx=new RegExp("E00","i")  ---> another way of regx
    if(regx.test(username))
    {
        document.getElementById("lbluser").innerHTML="valid";
        document.getElementById("lbluser").style.visibility="visible";
        document.getElementById("lbluser").style.color="green";

    }
    else{
        document.getElementById("lbluser").innerHTML="Invalid";
        document.getElementById("lbluser").style.visibility="visible";
        document.getElementById("lbluser").style.color="red";
    }
}