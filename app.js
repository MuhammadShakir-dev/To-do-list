const input = document.querySelector('input');
const selectedForm = document.querySelector('#form');
const newList = document.querySelector('#list');
const btn = document.querySelector('.formbtn');


btn.addEventListener('mousedown', () => {
    btn.style.transform = 'scale(0.9)';
});

btn.addEventListener('mouseup', () => {
    btn.style.transform = 'scale(1)';
});



selectedForm.addEventListener('submit', (e) => { 
    e.preventDefault();
    const inputValue = input.value;
    const newLi = document.createElement('li');
    const newImg = document.createElement('img');
    newImg.src = './delete (1).png';
    newLi.innerText = inputValue;
    newLi.draggable = true;
    newList.append(newLi);
    newImg.style.float = 'right';
    newImg.style.padding = '10px 10px';
    newLi.append(newImg);    
    input.value = '';

    newLi.addEventListener('dblclick', () => {
        newLi.style.textDecoration = 'line-through';
        newLi.style.backgroundColor = 'rgb(217, 141, 0)';
        newLi.style.color = 'rgb(65, 111, 175)'
    });

    newImg.addEventListener('click', () => { 
        newLi.remove();
    })

})







