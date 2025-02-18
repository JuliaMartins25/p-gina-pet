function teste() {
    const nome = document.getElementById("nome").value;
    alert(nome);
}

function enviarEmail() {


const public_key = "hpnvvKF0HaZEyDiXM";
const secret_key = "V6KExG-qeEJU7SJhoL_8D";

(function() {
    emailjs.init(public_key);
})();


    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const mensagem = document.getElementById("mensagem").value;

    if (!nome || !email || !mensagem) {
        alert("Preencha todos os campos!");
        return;
    }


    const params = {
        nome: nome,
        email: email,
        mensagem: mensagem
    };

     const serviceID = "service_uf659f3";
     const templateID = "template_zw2fm4s";

     emailjs.send(serviceID, templateID, params)
        .then((res) => {
            document.getElementById("nome").value = "";
            document.getElementById("email").value = "";
            document.getElementById("mensagem").value = "";
            console.log(res);
            alert("Mensagem enviada com sucesso para Au Au Miau🐾!");
        })
        .catch((err) => console.log(err));
}


