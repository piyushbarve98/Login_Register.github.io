
function myfunc(){
    document.getElementById('userp').style.display='none';
    document.getElementById('passp').style.display='none';
    
}

function validate(){

    setInterval(myfunc,8000);
    var username= document.getElementById('user');
    var password= document.getElementById('pass');
    
    if(username.value.trim()==''){
        document.getElementById('userp').style.display='block';
        document.getElementById('userp').innerHTML='*Username is Empty*';
       return false;
    }
    else if(password.value.trim()==''){
        document.getElementById('passp').style.display='block';
        document.getElementById('passp').innerHTML='*Password is Empty*';
        return false;
    }
   
    else if(password.value.trim().length<6){
        document.getElementById('passp').style.display='block';
        document.getElementById('passp').innerHTML='*Password is Too short*';
        return false;
    }
    else{
        return true;
    }

}