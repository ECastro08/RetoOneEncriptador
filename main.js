
function encriptar() {
    const inputUser = document.querySelector('.inputUser').value.toLowerCase();
    
    const replacements = {
        'a': 'ai',
        'e': 'enter',
        'i': 'imes',
        'o': 'ober',
        'u': 'ufat'
    };

    const textEncriptado = inputUser.replace(/[aeiou]/g, match => replacements[match]);

    document.querySelector('.outText').innerHTML = textEncriptado;
    document.querySelector('.h5-desc').innerHTML = 'Texto Encriptado';
    document.querySelector('.btn-copy').style.display = 'block';
    document.querySelector('.btn-share').style.display = 'block';
    document.querySelector('.img-des').style.display = 'none'
};

function desencriptar() {

    const inputUser = document.querySelector('.inputUser').value;

    const replacements = {
        'ai': 'a',
        'enter': 'e',
        'imes': 'i',
        'ober': 'o',
        'ufat': 'u'
    };

    let textDesencriptado = inputUser;

    for (const [key, value] of Object.entries(replacements)) {
        const regex = new RegExp(key, 'g');
        textDesencriptado = textDesencriptado.replace(regex, value);
    }

    document.querySelector('.outText').innerHTML = textDesencriptado;
    document.querySelector('.h5-desc').innerHTML = 'Texto Desencriptado';
};

function copiar() {

    let areaTemporal = document.createElement("textarea");
    let texto = document.querySelector('.outText').innerText;
    areaTemporal.value = texto;
    document.body.appendChild(areaTemporal);
    areaTemporal.select();
    document.execCommand("copy");
    document.body.removeChild(areaTemporal);
    alert("Texto copiado: " + texto);
}

function shareWhatsapp() {
    
    let texto = document.querySelector('.outText').innerText;
    
    let enlace = "https://wa.me/?text=" + encodeURIComponent(texto);
    
    window.open(enlace, "_blank");
}