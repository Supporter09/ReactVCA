export default function getRandomColor(){
    const r= Math.round(Math.random() * 255);
    const g= Math.round(Math.random() * 255);
    const b= Math.round(Math.random() * 255);
    return `rgb(${r},${g},${b})`;
}