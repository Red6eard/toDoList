// поле для ввода
const inp = document.getElementById("inp");

// кнопка добавления пункта
const button = document.getElementById("btn");

//список
const list = document.getElementById("list");


//при нажатии на кнопку происходит следующее:
//вызывается функция sendItem,которая
function sendItem(btn){
  //создает пункт списка newList
  const newList = document.createElement("li");
  list.appendChild(newList,);
  
  //присваевает пункту списка значение введеное в поле ввода
  newList.innerHTML = inp.value;
  
  //создает кнопку удаления пункта списка
  const check =   document.createElement("button");
  check.innerHTML = "OK";
  newList.appendChild(check);
  
  //делает поле для ввода чистым 
  inp.value = "";
  
};
