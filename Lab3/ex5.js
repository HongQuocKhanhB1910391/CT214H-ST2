setNull = ()=> {
    document.getElementById("noti-name").innerHTML = "";
    document.getElementById("noti-sex").innerHTML="";
    document.getElementById("noti-email").innerHTML ="";
    document.getElementById("noti-birthday").innerHTML ="";
    document.getElementById("noti-street").innerHTML ="";
    document.getElementById("noti-city").innerHTML ="";
    document.getElementById("noti-region").innerHTML="";
    document.getElementById("noti-zipcode").innerHTML ="";
}

checkName = ()=>{
    if (document.getElementById("name").value == "") {
        document.getElementById("noti-name").innerHTML = "Name is empty"
    }
}
checkSex = ()=>{
    if(document.getElementById('male').checked) {
        //Male radio button is checked
    }else if(document.getElementById('female').checked) {
        //Female radio button is checked
    }
    else {
        document.getElementById("noti-sex").innerHTML="Sex is not choosen"
    }
}
checkEmail = ()=>{
    if (document.getElementById("email").value=="")
        document.getElementById("noti-email").innerHTML ="Email is empty"
    else {
        let format = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (!format.test(document.getElementById("email").value)) {
            document.getElementById("noti-email").innerHTML ="Email is not valid"
        }
    }
}

isDateValid = (dateInput)=>{
    
}
checkBirthday = () =>{
    if (document.getElementById("birthday").value=="")
        document.getElementById("noti-birthday").innerHTML ="Birthday is empty"
    
}

checkAddress = () =>{
    if (document.getElementById("street").value == "")
        document.getElementById("noti-street").innerHTML ="Street is empty"
}
checkCity = ()=>{
    if(document.getElementById("city").value == "")
        document.getElementById("noti-city").innerHTML ="City is empty"
}
checkRegion = ()=>{
    if(document.getElementById("region").value =="Choose"){
        document.getElementById("noti-region").innerHTML = "Region is not choosen"
    }
}
checkZipcode = ()=>{
    if (document.getElementById("zipcode").value=="")
        document.getElementById("noti-zipcode").innerHTML ="Zipcode is empty"
    else if (isNaN(document.getElementById("zipcode").value))
        document.getElementById("noti-zipcode").innerHTML ="Zipcode must be number"
    else if(document.getElementById("zipcode").value.length != 5)
        document.getElementById("noti-zipcode").innerHTML ="Zipcode have length 5"
}
checkValid = () =>{
    setNull();
    checkName();
    checkSex();
    checkEmail();
    checkBirthday();
    checkAddress();
    checkCity();
    checkZipcode();
    checkRegion();
}
setClear =() =>{
    setNull();
    document.getElementById("name").value = "";
    document.getElementById('male').checked = false;
    document.getElementById('female').checked = false;
    document.getElementById("email").value = "";
    document.getElementById("birthday").value="";
    document.getElementById("street").value = "";
    document.getElementById("city").value = "";
    document.getElementById("zipcode").value="";
    document.getElementById("region").value ="Choose";
}