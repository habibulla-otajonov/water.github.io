const h2 = document.getElementsByTagName('body');
const random = (min, max) => Math.floor(Math.random() * (max - min +1) + min);

const randomColor = () => `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
console.log('444');
document.querySelector('.heych').addEventListener( 'click', function (w) {
 this.style.color = randomColor();  
});
console.log('boo');
document.querySelector('.boo').addEventListener( 'click', function (w) {
 this.style.color = randomColor();  
})