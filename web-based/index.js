

function buttonSwitchToRegister(){
    const signin = document.getElementById('signin')
    const signup = document.getElementById('signup')
    signin.style.display = 'none'
    signup.style.display = 'flex'
}

function buttonSwitchToLogin(){
    const signin = document.getElementById('signin')
    const signup = document.getElementById('signup')
    signin.style.display = 'flex'
    signup.style.display = 'none'
}

function loginHandle(){
    var email = document.getElementById('loginEmail')
    var pwd = document.getElementById('loginPwd')

    var validated = validateEmail(email) && pwd
}

// $(document).ready(()=>{
//     $('#register-form').submit(e=>{
//         e.preventDefault()
//         console.log('submitted')
//     })
// })


function validateForm(){

    const fullname = document.getElementById('regFN').value
    const mobile = document.getElementById('regMPN').value
    const email = document.getElementById('regEmail').value
    const password = document.getElementById('regPwd').value
    const cPassword = document.getElementById('regCPwd').value

    var fn = false, em = false, mbl = false, pwd = false, cpwd = false;
    
    if(fullname == ""){
        document.getElementById('e-fName').setAttribute("style", 'visibility: visible;');
    }else{
        fn = true;
        document.getElementById('e-fName').setAttribute("style", 'visiblity: hidden;');
    }

    if(email == ""){
        document.getElementById('e-email').setAttribute("style", 'visibility: visible;');
    }else{
        if(validateEmail(email)){
            em = true;
            document.getElementById('e-email').setAttribute("style", 'visiblity: hidden;');
        }else{
            document.getElementById('e-email').setAttribute("style", 'visibility: visible;');
        }
    }

    if(mobile == ""){
        document.getElementById('e-mobile').setAttribute("style", 'visibility: visible;');
    }else{
        var validate = validatePhone(mobile);
        if(validate){
            mbl = true;
            document.getElementById('e-mobile').setAttribute("style", 'visiblity: hidden;');
        }else{
            document.getElementById('e-mobile').setAttribute("style", 'visibility: visible;');
        }
    }

    
    pwd = validatePassword(password);

    if(cPassword == ""){
        document.getElementById('e-cpwd').setAttribute("style", 'visibility: visible;');
    }else{
        var validate = validateConPassword(cPassword, password);
        if(validate){
            cpwd = true;
            document.getElementById('e-cpwd').setAttribute("style", 'visiblity: hidden;');
        }else{
            document.getElementById('e-cpwd').setAttribute("style", 'visibility: visible;');
        }
    }

    if(fn && em && mbl && pwd && cpwd){
        form = document.getElementById('register-form')
        form.submit()
        if(document.getElementById('register-form').addEventListener){
        
            document.getElementById('register-form').addEventListener('submit', (e)=>{
                e.preventDefault()
                console.log('submitted')
            }, false)
        }
        //form submit here
    }
}


function validateEmail(email){
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
function validatePhone(phone) {
    var len = phone.length-3;
    return (len > 9 && len < 12) ? true : false;
}

function validatePassword(password){
    var upper = false, lower=false, chars = false, specs = false, nums = false, noSpace = false;
    if(password.length > 5){
        document.getElementById('chars').setAttribute("style", 'color: green;');
        chars = true;
    }else{
        document.getElementById('chars').setAttribute("style", 'color: red;');
    }

    var regUpper = /[A-Z]/;
    if(password.search(regUpper) != -1){
        document.getElementById('upper').setAttribute("style", 'color: green;');
        upper = true;
    }else{
        document.getElementById('upper').setAttribute("style", 'color: red;');
    }

    var regLower = /[a-z]/;
    if(password.search(regLower) != -1){
        document.getElementById('lower').setAttribute("style", 'color: green;');
        lower = true;
    }else{
        document.getElementById('lower').setAttribute("style", 'color: red;');
    }

    var regNum = /\d/;
    if(password.search(regNum) != -1){
        document.getElementById('nums').setAttribute("style", 'color: green;');
        nums = true;
    }else{
        document.getElementById('nums').setAttribute("style", 'color: red;');
    }

    var regSpecs = /[!\@\#\$\%\^\&\*\(\)\_\+\.\,\;\:]/;
    if(password.search(regSpecs) != -1){
        specs = true;
        document.getElementById('spec').setAttribute("style", 'color: green;');
    }else{
        document.getElementById('spec').setAttribute("style", 'color: red;');
    }

    if(password.search(/\s/) == -1){
        document.getElementById('ws').setAttribute("style", 'color: green;');
        noSpace = true;
    }else{
        document.getElementById('ws').setAttribute("style", 'color: red;');
    }

    if(upper && lower && chars && specs && nums && noSpace){
        document.getElementById('error-password').setAttribute("style", 'visibility: hidden;');
        return true;
    }else{
        document.getElementById('error-password').setAttribute("style", 'visibility: visible;');
        return false;
    }
}

function validateConPassword(conPwd, password){
    return conPwd == password ? true : false;
}

function checkAlphanumeric(password){
    var alphaNumeric = /^(?=*\d)(?=*[a-z])(?=*[A-Z])(?=*[!@#$%^&*+-]){6,20}$/;
    return password.match(alphaNumeric);
}
