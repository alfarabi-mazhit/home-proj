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
    // let imgSrc = img.parentElement.parentElement.parentElement.querySelector('img').src;
    // let imgSrc = img
    // do{
    //     imgSrc = imgSrc.parentElement.querySelector('.project-item')
    // }while(imgSrc.)
    modalImg.src = img
    modal.style.display = 'flex'
}