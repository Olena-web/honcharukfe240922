export function getRandomNum(min: number, max: number ){
    let randomNum = +Math.floor(Math.random() * (max - min + 1)).toFixed(2) + min;
    return randomNum;
  }
  