let f = document.querySelector('.block');
let button = document.createElement('button');
let input = document.querySelector('.input');
let elem = document.createElement('li');

let arr = [];
function form(){
    elem.setAttribute('class', 'elemList')
    document.body.appendChild(elem);
    f.appendChild(button);
    button.textContent = 'Button'
}
form();
button.addEventListener('click',(e) => {
    e.preventDefault();

    if(input.value.length > 0){
        arr.push(input.value) + ' ';
    }
    elem.textContent = arr;
 });
 console.log(arr);