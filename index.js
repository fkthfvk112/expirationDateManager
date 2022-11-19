let goods = new Array(1000);
let sortingBtn = document.querySelector(".sortingBtn");
let textArea = document.querySelector(".textArea");
let resultArea = document.querySelector(".resultArea");

function sortingGoods(goods){
  let swap1, swap2;
  let month = new Array(goods.length);
  for(let i = 0; i < goods.length; i++){
    for(let j = 0; j < 50; j ++){
      if( goods[i][j] != ' ' && !isNaN(Number(goods[i][j]))){
        month[i] = goods[i][j];
        if(month[i] == 1){
          if(goods[i][j+1] == 0) month[i] = 10;
          else if(goods[i][j+1] == 1) month[i] = 11;
          else if(goods[i][j+1] == 2) month[i] = 12;
        }
        break;
      }
    }
  }

  for(let i = 0; i < month.length; i++){
    for(let j = 0; j < month.length; j++){
      if(month[i] <= month[j]){
        swap1 = goods[i];
        goods[i] = goods[j];
        goods[j] = swap1;

        swap2 = month[i];
        month[i] = month[j];
        month[j] = swap2;
      }
    }
  }
}

function createResult(goods){
  let resultText;
  resultText = goods.join('\n');

  resultArea.value = resultText;
}

sortingBtn.addEventListener("click", ()=>{
  let temp = textArea.value;
  goods = temp.split('\n');
  sortingGoods(goods);
  createResult(goods);
  //console.log(goods);
})