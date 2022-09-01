const button = document.getElementById('button');
// button.forEach((el, index) => {
    button.addEventListener('click', handleClickQrCode);
// })

function handleClickQrCode() {
    var divCont = document.getElementById('qrcode-area')
    var input = document.getElementById('input')
    if(input.value == '') return;
    divCont.innerHTML = '';

    var qrcode = new QRCode(divCont, {
        text: input.value,
        width: 180,
        height: 180,
        colorDark: '#000',
        colorLight: '#FFF',
        correctLevel: QRCode.CorrectLevel.H
    })
}