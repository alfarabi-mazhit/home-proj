 let modal = document.querySelector('#bigImgModal');
function closeModal(){
    modal.style.display = 'none'
}
let modalImg = document.querySelector('#bigImgframeimg')

function showAtBigImgFrame(img){
    modalImg.src = img.src
    modal.style.display = 'flex'
}
function showAtBigImgFrameSRC(imgsrc){
    modalImg.src = imgsrc
    modal.style.display = 'flex'
}