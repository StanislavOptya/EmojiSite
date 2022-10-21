let getJsonFile = (pathToFile) => {
    let request = new XMLHttpRequest();
    request.open("GET", pathToFile, false);
    request.send(null);
    let my_JSON_object = JSON.parse(request.responseText);
    return my_JSON_object;
  };

  const allEmoji = getJsonFile("https://emoji-api-app.herokuapp.com/");
  let pos = document.getElementById('pos');
  nahod (allEmoji);

function nahod (massiv){
  let str = "";
  for(let i = 0; i < massiv.length; i++){
    str +=
    `<div class="emoji">
        <p>${massiv[i].symbol}</p>
        <h1 class="name">${massiv[i].title}</h1>
        <h2>${massiv[i].keywords}</h2>
      </div>`;
    }
    pos.innerHTML = str;
}


  document.querySelector('#search').oninput = function(){

    let value = this.value.trim();
    newEmj = allEmoji.filter(emoji => emoji.title.includes(value) || emoji.keywords.includes(value));

    nahod(newEmj);
  }




  /* document.querySelector('#search').oninput = function(){
    let value = this.value.trim();
    let info = document.querySelectorAll(".emoji");
    if (value){
      info.forEach(function(elem){
        if (elem.innerText.search(value) == -1)
        {
          elem.classList.add('hide');
        }
        else{
          elem.classList.remove('hide');
        }
      });
    }
    else
    {
      info.forEach(function(elem){
        elem.classList.remove('hide');
      });
    }
  }
  */





    /*for(let i = 1; i < allEmoji.length; i++){
    let div = document.createElement('div');
    div.innerHTML =
      `<div class="emoji">
        <p>${allEmoji[i].symbol}</p>
        <h1 class="name">${allEmoji[i].title}</h1>
        <h2>${allEmoji[i].keywords}</h2>
      </div>`;
      position.append(div);
  }
*/
