function validate()
{
    var username=document.getElementById("uname").value;
    var regx=/E00/i;
    if(regx.test(username))
    {
        alert("Valid UserName");
    }
    else{
        alert("Invalid Username");
        document.getElementById("lbluser").style.visibility="visible" ;
    }
}