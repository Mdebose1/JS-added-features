// console.log('Hello! Let\'s Slay Something!');

// console.log(document)

// let titleElement = document.getElementById('title');
// console.log(titleElement.innerText);

// titleElement.innerText = 'This is a Test.' 

let listItems = document.querySelectorAll('.list-group-item');
// console.log(listItems)

// listItems.forEach(function( listItem, idx ) {
//     // console.log(idx, listItem)
//     listItem.innerHTML = `<strong>${listItem.innerHTML }<strong>`

//     listItem.innerHTML = `
//         <p>
//             <strong>
//                 ${ listItem.innerHTML }
//                 <span class="float-right"> This is a test</span>
//             </strong>

//         </p>`
// });

// for (const listItem of listItems) {
    // console.log(listItem.innerText)
    // listItem.innerHTML = `<strong>${listItem.innerHTML }<strong>`

    // listItem.innerHTML = `
    //     <p>
    //         <strong>
    //             ${ listItem.innerHTML }
    //             <span class="float-right"> This is a test</span>
    //         </strong>

    //     </p>`
    
//     // console.log(listItem);

// }
let titleElement = document.getElementById('title');

let horizontalRules = document.getElementsByTagName('hr');

let form = document.querySelector('#todoForm');

let todoInputField = document.querySelector('#todo-input-field');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    console.log(e.target.todoItemInput.value);
})