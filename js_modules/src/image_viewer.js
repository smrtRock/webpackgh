
import small from '../assets/small.png';
import '../style/image_viewer.css';

export default () => {
    
const image = document.createElement('img');
image.src = small;
// 'http://lorempixel.com/400/400'; //lorem is a fake service for images

document.body.appendChild(image);
} 