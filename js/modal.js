 let modal = document.querySelector('#bigImgModal');
function closeModal(){
    modal.style.display = 'none'
}
let modalImg = document.querySelector('#bigImgframeimg')

function showAtBigImgFrame(img){
    modalImg.src = img.src
    modal.style.display = 'flex'
}
function showAtBigImgFrameSRC(img){
    let imgSrc = img.parentElement.parentElement.parentElement/querySelector('img').src;
    modalImg.src = imgSrc
    modal.style.display = 'flex'
}