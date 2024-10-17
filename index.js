const listImage = document.querySelector('.list-image');
const imgs = document.getElementsByTagName('img');
const length = imgs.length;
let current = 0;

setInterval(() => {
    let width = imgs[0].offsetWidth; // Lấy chiều rộng của ảnh để trượt
    if (current === length - 1) {
        current = 0; // Reset về ảnh đầu tiên
        listImage.style.transform = `translateX(0)`; // Quay về vị trí đầu tiên
    } else {
        current++;
        listImage.style.transform = `translateX(${-width * current}px)`; // Trượt tới ảnh tiếp theo
    }
}, 4000);
