// Пользователь вводит строку кириллицей разного регистра. Напишите функцию, которая принимает строку в качестве 
// аргумента и заменяет регистр каждого символа на противоположный. Например, если вводится «КаЖдЫй ОхОтНиК», то 
// на выходе должен быть массив [кАжДыЙ оХоТнИк].ss
function doOtherRegister(str) {
    let result = []
    str.split("")
    for(let i = 0; i < str.length ; i++) {
      if (str[i] === str[i].toLowerCase()) {
        ( result += str[i].toUpperCase())
      } else if(str[i] === str[i].toUpperCase()) {
        ( result += str[i].toLowerCase())
      }
    }
    return result
  }
  console.log(doOtherRegister("КаЖдЫй ОхОтНиК"))