function ControlForm(e) {
    let inavlidlenght = document.getElementById(e).querySelectorAll(':invalid').length,  
    button = document.getElementById(e).querySelector('button[type="submit"]');


    let passwordin = document.getElementById('password');
    let password = document.getElementById('password').value;


    let passwordcdin = document.getElementById('passwordcdin');
    let passwordcd = document.getElementById('passwordcdin').value;

    let icons = document.getElementById('iconsps');
    let iconss = document.getElementById('icons');

    let emails = document.getElementById('email');
    let email = document.getElementById('email').value;
    let pattern = /^([0-9a-zA-Z]([-_\\.]*[0-9a-zA-Z]+)*)@([0-9a-zA-Z]([-_\\.]*[0-9a-zA-Z]+)*)[\\.]([a-zA-Z]{2,9})$/;
    
    let usernamein = document.getElementById('username');
    let username = document.getElementById('username').value;

    let error = document.getElementById('error');
    
    if (username[0].toUpperCase() == username[0]) {
        usernamein.style.border = '2px solid green';
    }else{
        usernamein.style.border = '2px solid red';
       
    }
    
    function isEmail(email){
        return pattern.test(email);
    }

    if(isEmail(email) == true && email !== ''){
        emails.style.border = '2px solid green'
        iconss.style.display = 'none';

    }else if(isEmail(email) == false && email !== ''){
        emails.style.border = '2px solid red'
        iconss.style.display = 'inline';
        iconss.style.color = 'red';
    }

    //Password
    if(password === ''){
        passwordin.style.border = 'none';
    }else{
        if(password.length>6){
            passwordin.style.border = '2px solid green'
            icons.style.display = 'none';
        }else{
            passwordin.style.border = '2px solid red'
            icons.style.display = 'inline';
            icons.style.color = 'red';
        }
    }

    //Password Check
    if (password === passwordcd && password !== '' && passwordcd.length>6){
        
        passwordcdin.style.border = '2px solid green';
    
    }else if(password !== passwordcd && password !== '' && passwordcd.length < 5){
        passwordcdin.style.border = '2px solid red';
        
    }else{
        passwordcdin.style.border = 'none';
    }
    if(password !== passwordcd){
        document.getElementById('error').classList.remove('d-none')
        document.getElementById("error").innerHTML = "Parollar uygun deyil";
    }
    else{
        document.getElementById('error').classList.add('d-none')

    }



    //Submit Button
    // if(inavlidlenght === 0 && password === passwordcd){
    //     button.removeAttribute('disabled');
    // }else{
    //     button.setAttribute('disabled' , 'disabled');
    // }






}
ControlForm('forms');
        

        
 

       
        
 


