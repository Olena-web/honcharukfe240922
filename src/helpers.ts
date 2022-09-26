export function getRandomNum(min: number, max: number ){
    min = Math.ceil(min);
    max = Math.floor(max);
    let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNum;
  }
  