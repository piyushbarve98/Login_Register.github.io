function myfunc(){
    document.getElementById('uname').style.display='none';
    document.getElementById('passp').style.display='none';
    document.getElementById('fname').style.display='none';
    document.getElementById('lname').style.display='none';
}

setInterval(myfunc,8000);
function validate(){
   
    myfunc();
    var username= document.getElementById('uname1');
    var password= document.getElementById('pass1');
    var fname= document.getElementById('fname1');
    var lname= document.getElementById('lname1');
    var phone= document.getElementById('phone1');
    var email = document.getElementById('email1');

    if(username.value.trim()==''){
        document.getElementById('uname').style.display='block';
        document.getElementById('uname').innerHTML='*Username is Empty*';
       return false;
    }
    else if(password.value.trim()==''){
        document.getElementById('passp').style.display='block';
        document.getElementById('passp').innerHTML='*Password is Empty*';
        return false;
    }
    else if(fname.value.trim()==''){
        document.getElementById('fname').style.display='block';
        document.getElementById('fname').innerHTML='*First name is Empty*';
        return false;
    }
    else if(lname.value.trim()==''){
        document.getElementById('lname').style.display='block';
        document.getElementById('lname').innerHTML='*Last name is Empty*';
        return false;
    }
    
    else if(password.value.trim().length<6){
        document.getElementById('passp').style.display='block';
        document.getElementById('passp').innerHTML='*Password is Too short*';
        return false;
    }
    else if(username.value.trim().length<6){
        document.getElementById('uname').style.display='block';
        document.getElementById('uname').innerHTML='*Username is Too short*';
        return false;
    }

}