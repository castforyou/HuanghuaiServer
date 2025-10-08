// script.js
document.addEventListener('DOMContentLoaded', () => {
    const carouselSlide = document.querySelector('.carousel-slide');
    const carouselContents = document.querySelectorAll('.carousel-content');
    const totalContents = carouselContents.length;
    let counter = 0;
    const size = carouselContents[0].clientWidth;
    const switchInterval = 4000; // 切换间隔时间，单位为毫秒（这里设置为3秒）

    // 切换函数
    function switchCarousel() {
        counter = (counter + 1) % totalContents; // 使用取模运算实现循环切换
        carouselSlide.style.transform = `translateX(-${counter * size}px)`;
    }

    // 设置定时器，自动切换轮播图
    let carouselInterval = setInterval(switchCarousel, switchInterval);

    // 可选：添加鼠标悬停时暂停自动切换的功能
    const carouselContainer = document.querySelector('.carousel-container');
    carouselContainer.addEventListener('mouseenter', () => {
        clearInterval(carouselInterval); // 清除定时器，暂停自动切换
    });

    carouselContainer.addEventListener('mouseleave', () => {
        carouselInterval = setInterval(switchCarousel, switchInterval); // 重新设置定时器，恢复自动切换
    });

    // 可选：添加手动切换按钮的功能（如果之前已经实现了的话，这部分可以保留）
    const nextButton = document.querySelector('.carousel-btn.next');
    const prevButton = document.querySelector('.carousel-btn.prev');

    nextButton.addEventListener('click', () => {
        clearInterval(carouselInterval); // 清除定时器，避免与手动切换冲突
        counter = (counter + 1) % totalContents;
        carouselSlide.style.transform = `translateX(-${counter * size}px)`;
        carouselInterval = setInterval(switchCarousel, switchInterval); // 重新设置定时器
    });

    prevButton.addEventListener('click', () => {
        clearInterval(carouselInterval); // 清除定时器，避免与手动切换冲突
        counter = (counter - 1 + totalContents) % totalContents; // 使用取模运算和加法确保counter不为负数
        carouselSlide.style.transform = `translateX(-${counter * size}px)`;
        carouselInterval = setInterval(switchCarousel, switchInterval); // 重新设置定时器
    });
});