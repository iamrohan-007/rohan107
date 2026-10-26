
function validateForm() {
    let number = document.getElementById("number").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmpassword = document.getElementById("password1").value;

    let pattern1 = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!pattern1.test(email)) {
        alert("Enter a valid email address now");
        return false;
    }
    if (password.trim() === "") {
        alert("Please enter your password");
        return false;
    }
   

    let pattern2 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if(!pattern2.test(password)){
        alert("Password is not strong enough");
        return false;
    }
    if(password.length < 8){
        alert("Password must contain at least 8 characters");
        return false;
    }
    if(confirmpassword !== password){
        alert("Password do not match");
        return false;
    } 


    let pattern3 = /^[6-9]\d{9}$/;
    if(!pattern3.test(number)){
        alert("Enter a valid 10 digit mobile number");
        return false;
    }

    alert("Login successful!!!!");
    return false;
}


