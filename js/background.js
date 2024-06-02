const imgName = [
    "0.jpg",
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg"
];

const bgImage = imgName[Math.floor(Math.random() * imgName.length)]
const bgImagePath = `url(../styles/img/bgImg/${bgImage})`;

document.body.style.background = bgImagePath;