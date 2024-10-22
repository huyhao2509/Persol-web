// JavaScript cho mỗi slider
const sliders = document.querySelectorAll('.wrapper-slide');

sliders.forEach(slider => {
    const listImages = slider.querySelector('.list-image');
    const images = listImages.querySelectorAll('.list-image-item');
    const btnLeft = slider.querySelector('.btn-left');
    const btnRight = slider.querySelector('.btn-right');
    const indexItems = slider.querySelectorAll('.index-item');
    let currentIndex = 0;

    function updateSlider(index) {
        // Cập nhật vị trí của hình ảnh
        listImages.style.transform = `translateX(-${index * 100}%)`;
        // Cập nhật chỉ mục
        indexItems.forEach((item, i) => {
            item.classList.toggle('active', i === index);
        });
    }

    btnLeft.addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
        updateSlider(currentIndex);
    });

    btnRight.addEventListener('click', () => {
        currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
        updateSlider(currentIndex);
    });

    // Nếu muốn tự động chuyển hình ảnh
    setInterval(() => {
        currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
        updateSlider(currentIndex);
    }, 5000); // 5 giây
});
