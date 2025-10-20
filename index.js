setInterval(()=>{
    let imgs = document.querySelectorAll('img');
    imgs.forEach((a, i) => {
        a.src='https://raw.githubusercontent.com/Cobslab/imageBible/main/image/like_lenna224.png';
    });
    document.querySelectorAll('*').forEach(el => {
        const bg = window.getComputedStyle(el).backgroundImage;
        if (bg && bg !== 'none') {
            el.style.backgroundImage = 'url(https://raw.githubusercontent.com/Cobslab/imageBible/main/image/like_lenna224.png)';
        }
    })
}, 200);