  
  const presentDate = new Date();
  const presentYear = presentDate.getFullYear();
  const submitBtn = document.querySelector('.js-submitbtn');
  const inputBar = document.querySelector('.js-inputbar');
  const errorMessage = document.querySelector('.js-errorhide');
  const age = document.querySelector('.js-agetext');
  const genration = document.querySelector('.js-gentext');

  submitBtn.addEventListener('click',()=> {
    getAge();
  });

  inputBar.addEventListener('keydown',(event)=>{
    if (event.key === 'Enter') {
        getAge();
    }
  });


  function getAge() {
  age.innerHTML = '';
  genration.innerHTML = '';
  let yearsCount = 0;
  const bornYear = inputBar.value;
   if((!isNaN(bornYear)) && bornYear.length === 4 && bornYear <= presentYear) {
    for(let i = bornYear; i<=presentYear; i++) {
      yearsCount++
      errorMessage.classList.add('error-off');
      age.innerHTML = `YOUR AGE IS <span class="text-primary"'>${yearsCount}</span>`;
    }   
  } else {
    if(Number(bornYear) === presentYear) {
    }
    errorMessage.classList.remove('error-off');
  }
  inputBar.value = '';

  if(yearsCount === 1) {
    age.innerHTML = 'LESS THAN A YEAR';
    genration.innerHTML = 'KID!'
  }
  if(yearsCount >= 2 && yearsCount <= 12) {
    genration.innerHTML = 'YOUNGER!'
  }

  if(yearsCount >= 13 && yearsCount <= 30) {
    genration.innerHTML = 'TEENAGER!' 
  }

  if(yearsCount >= 31 && yearsCount <= 60) {
    genration.innerHTML = 'MIDDLE AGE!'
  }

  if(yearsCount >= 61) {
    genration.innerHTML = 'OLDER AGE!'
  }

 
  
}



  


  
  

  



  
  

  
  

  
  


  

