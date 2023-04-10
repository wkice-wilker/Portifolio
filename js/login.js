function logar(){
    var login = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;

    if(login == "admin@gmail.com" && senha == "admin"){
        location.href = "painelcontrole.html";
    }else{
        alert('usuario ou senha incorreto');
    }
}
console.log(logar);