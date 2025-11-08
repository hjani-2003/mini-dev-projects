let myInput = document.querySelector('input');
let addTask = document.querySelector('button');
let myUL = document.querySelector('ul');
let deleteButtons = document.querySelectorAll('.delete');

let addToList = function (event) {
    if (document.querySelector('ul') == null) {
        if (myInput.value != '') {
            let freshList = document.createElement('ul');
            let task = document.createElement('li');
            let delButton = document.createElement('button');

            delButton.innerText = 'Delete';
            delButton.classList.add('delete');
            
            // delButton.addEventListener('click', delElement);

            task.innerText = myInput.value;

            addTask.insertAdjacentElement('afterend', freshList);
            freshList.insertAdjacentElement('afterbegin', task);
            task.appendChild(delButton);

        } else {
            alert("bad input!");
        }

        // task.innerText = myInput.value;
        // console.log('this is innerText: ', myInput.innerText);
        // console.log('this is value: ', myInput.value);
        // if(myInput.value == '') {
        //     console.log('OMG! null encountered!');
        // }
        
        // console.log(task);
        
    } else {
        if (myInput.value != '') {
            let myList = document.querySelector('ul');
            let task = document.createElement('li');
            let delButton = document.createElement('button');

            delButton.innerText = 'Delete';
            delButton.classList.add('delete');

            // delButton.addEventListener('click', delElement);

            task.innerText = myInput.value;
            myList.insertAdjacentElement('afterbegin', task);
            task.appendChild(delButton);

        } else {
            alert("bad input!");
        }

        // if(myInput.value == '') {
        //     console.log('OMG! null encountered!');
        // }
        // console.log('this is value: ', myInput.value);

    }
};

let delElement = function () {
    console.log('listened');
    let toDel = this.parentNode;
    toDel.remove();
};

addTask.addEventListener('click', addToList);

myUL.addEventListener('click', function(event) {

    // console.log('clicked');
    // console.log(event.target.nodeName)

    if(event.target.nodeName == 'BUTTON') {
        event.target.parentElement.remove();
    }
});


// for(btn of deleteButtons) {
//     btn.addEventListener('click', delElement);
// }