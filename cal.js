for(i=0;i<16;i++){
    let button = document.createElement('button');
    button.innerText = `${i}`
    document.querySelector('.mydiv').appendChild(button);
    if(button.innerText==10){
      button.innerText = '+';
    }
    if(button.innerText==11){
      button.innerText = '-';
    }
    if(button.innerText==12){
      button.innerText = '*';
    }
    if(button.innerText==13){
      button.innerText = '/';
    }
    if(button.innerText==14){
      button.innerText = 'C';
    }
    if(button.innerText==15){
      button.innerText = '=';
    }
    button.addEventListener('click', function () {
         if(button.innerText=='C'){
            document.querySelector('.p').innerText = '';
         }
         else if(button.innerText=='='){
           document.querySelector('.p').innerText = eval(document.querySelector('.p').innerText);
         }
         else{
            document.querySelector('.p').innerText += button.innerText; 
         }
    });
}
 
