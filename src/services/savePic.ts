import { user } from "../constants/constants";

export function createAvatar(): HTMLElement {
  const divAva = document.createElement('div');
  divAva.className = 'ava';
  const imgAva = document.createElement('img');
  imgAva.className = 'ava__icon';
  imgAva.src = user.avatar;
  divAva.append(imgAva);
  return divAva;
}

function savePics() {
  const image = <HTMLFormElement>document.querySelector('.tooltip__register_ava');
  const canvas = document.createElement('canvas');
  const img = new Image();
  img.setAttribute('crossOrigin', 'anonymous');
  img.src = image.src;
  img.addEventListener('load', () => {
    canvas.width = image.naturalWidth;
    canvas.height = image.naturalHeight;
    const ctx = <CanvasRenderingContext2D>canvas.getContext('2d');
    ctx.drawImage(img, 0, 0);
    const link = document.createElement('a');
    link.download = 'image.png';
    link.href = canvas.toDataURL('image/png');
    user.avatar = link.href;
  });
}
  
export function loadImg(): void {
  const file = <HTMLFormElement>document.getElementById('ava');
  const image = <HTMLFormElement>document.querySelector('.tooltip__register_ava');
  image.src = URL.createObjectURL(file.files[0]);
  image.style.display = 'block';
  file.value = null;
  savePics();
}