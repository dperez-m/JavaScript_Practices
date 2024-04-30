'use strict'

document.addEventListener('DOMContentLoaded', () => {
    const img1 = document.getElementById('img1');
    const img2 = document.getElementById('img2');
    const img3 = document.getElementById('img3');
    let change = true;

    const img4 = document.getElementById('img4');
    const img5 = document.getElementById('img5');
    const img6 = document.getElementById('img6');

    img4.addEventListener('mouseover', changeImage);
    img4.addEventListener('mouseout', changeImage);
    img5.addEventListener('mouseover', changeImage);
    img5.addEventListener('mouseout', changeImage);
    img6.addEventListener('mouseover', changeImage);
    img6.addEventListener('mouseout', changeImage);
        setTimeout(changeImage2, 1000);

    function changeImage(evt) {
        let finalIndex = 0;
        if (evt.target.id === 'img4') {
            finalIndex = 86;
        } else {
            finalIndex = 87;
        }
        let src = evt.target.src;
        let newSrc = "";
        if (evt.type === 'mouseover') {
            newSrc = parseInt(src.substring(85, finalIndex)) + 1;
            console.log(newSrc);
        }else {
            newSrc = parseInt(src.substring(85, finalIndex)) - 1;
            console.log(newSrc);
        }
        evt.target.src = newSrc + ".JPG";
    }

    function changeImage2(){
        if (change) {
            img1.src = "2.JPG";
            img2.src = "4.JPG";
            img3.src = "6.JPG";
            change = false;
        }else {
            img1.src = "1.JPG";
            img2.src = "3.JPG";
            img3.src = "5.JPG";
            change = true;
        }
        setTimeout(changeImage2, 2000);
    }
})