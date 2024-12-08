// 使用Canvas动态生成图片示例
document.addEventListener('DOMContentLoaded', function() {
    const createCanvas = (color1, color2) => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = 300;
        canvas.height = 200;
        
        const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
        gradient.addColorStop(0, color1);
        gradient.addColorStop(1, color2);
        
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        return canvas;
    };

    const gallery = document.createElement('div');
    gallery.className = 'image-gallery';
    
    const colors = [
        ['#4a90e2', '#357abd'],
        ['#45b7d1', '#2d8ba3'],
        ['#67c23a', '#4a9226'],
        ['#f56c6c', '#d14343']
    ];

    colors.forEach(([color1, color2]) => {
        const item = document.createElement('div');
        item.className = 'gallery-item';
        item.appendChild(createCanvas(color1, color2));
        gallery.appendChild(item);
    });

    document.querySelector('.section:nth-child(2)').appendChild(gallery);
});