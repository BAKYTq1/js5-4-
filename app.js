
let number = Math.ceil(Math.random() * 100);

let numberEnd = 0
let attempts = 3;
let reverse = 2;
while(attempts > 0) {
  let gues = prompt(`Угадай какое число загадал JavaScript и у тебя ${attempts} попытки`)
    if(gues == number){
        gues = prompt('ТЫ УГАДАЛ МОЛОДЕЦ') 
        break;
    }else if(number < gues){
      gues = alert(`Больше попробуй еще раз. Попытка ${reverse}`)

    }else if(number > gues){
      gues = alert(`Мало попробуй еще раз. Попытка${reverse}`)
    }
    numberEnd++;
    reverse--;
    attempts--; 
    if(attempts == 0){
      alert(`Ты не угадал это число было ${number} ахахахах. Тебе понадобилось ${numberEnd} попыток.` )
    }
}



