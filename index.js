let elForm = document.querySelector('.block');
let userName = document.querySelector('.inputName');
let password = document.querySelector('.inputPass');
let text1 = document.querySelector('.la');
let text2 = document.querySelector('.la2');
let h2 = document.querySelector('h2');
let nan = [':',';','-','!','/'];

let arr = ['rrt0110','goodmoon_11','blackmi_1','izob1lie666'];

elForm.addEventListener('submit',(e) => {
    e.preventDefault();

   h2.style.color = 'green';
   h2.textContent = "Ro'yxatdan o'tdingiz!";

   if(userName.value.length >= 5){
    arr.push(userName.value);
   }
});

userName.textContent.toLowerCase();

userName.addEventListener('keyup',e => {
        if(userName.value.length < 5){
            text1.style.color = 'red';
            text1.style.visibility = 'visible'
            userName.style.borderColor = 'red';
            text1.textContent = 'harf 5 tadan kam';
        }
        else if(userName.value.length >= 5){
            userName.style.borderColor = 'green';
            text1.textContent = 'Bu joy bosh';
            text1.style.color = 'green';
        }

        arr.forEach(el => {
            if(userName.value == el){
                text1.style.color = 'red';
                text1.textContent = 'Bunday foydalanuvchi bor!';
                userName.style.borderColor = 'red';
            }
        });
        
        if(userName.value == 0){
            userName.style.borderColor = '';
            text1.style.visibility = 'hidden';
        }

        nan.forEach(ell => {
            if(userName.value.indexOf() == ell){
                text1.style.color = 'red';
                text1.textContent = 'bor!';
                userName.style.borderColor = 'red';
            }
        })
    }

);

password.addEventListener('keyup',e => {
    for(let i = 0;i < arr.length;i++){
        if(password.value.length < 5){
            text2.style.color = 'red';
            password.style.borderColor = 'red';
            text2.style.visibility = 'visible';
            text2.textContent = 'harf 5 tadan kam';
        }
        else if(password.value.length >= 5){
            password.style.borderColor = 'green';
            text2.style.color = 'green';
            text2.style.visibility = 'hidden';
        }
        
        if(password.value == 0){
            password.style.borderColor = '';
            text2.style.visibility = 'hidden';
        }
    };

});

