

function generatePassword() {
    let pSET="ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890abcdefghijklmnopqrstuv@[]&$";
    let lengthOfPWD=pSET.length;
    let x=document.getElementById('Password');
    var randomPassword="";
    for(var i=0;i<16;i++){
        var r=Math.floor((Math.random() * lengthOfPWD) + 1);
        randomPassword +=pSET.charAt(r);
    }
    x.innerHTML=" Password :: "+randomPassword;

}