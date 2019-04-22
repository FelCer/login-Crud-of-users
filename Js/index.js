window.onload = function(){
    const button = document.getElementById("redirect");
    button.onclick = function () {
        Valid();
    };
}
function Valid() {
    var xhr = new XMLHttpRequest();
    let user = document.getElementById("user").value;
    let password = document.getElementById("password").value;
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
                if(this.responseText==1){
                    window.location="table.html";
                }
                else{
                    alertify.error('El usuario no existe');
                }
        }
    }
    xhr.open("POST", "./php/queryUser.php", false);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send("name=" + user + "&password=" + password );
}
