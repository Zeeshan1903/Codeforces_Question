let a = document.getElementById('box');

let url_myprob = ' https://codeforces.com/api/user.status?handle=zeeshan19&from=1&count=10';

//Taking url of all problem set 
let url_probSet = 'https://codeforces.com/api/problemset.problems?tags=implementation';

// document.addEventListener('DOMContentLoaded', ()=> {
//     // Get the form element
//     const form = document.getElementById('myform');
  
//     // Add event listener to the form's submit event
//     form.addEventListener('submit', (event)=> {
//       // Prevent the default form submission behavior
//       event.preventDefault();
      
//       // Access form data
//       const username = document.getElementById('handle').value;
//       const password = document.getElementById('tag').value;
//       a.innerHTML+=`<br>`+username;
//       a.innerHTML+='<br>'+password+'<br>';
//     });
// });


async function getData() {

    //Fetching mine problems 
    let data1 = await fetch(url_myprob);
    let convertdata1 = await data1.json();

    //Fetching the problems 
    let data2 = await fetch(url_probSet);
    let convertdata2 = await data2.json();

    console.log('Hi we received the data successfully :::::::::::)))))))))');
    a.innerHTML += '<br>Hi You can solve these quetions with the contest rating and Id mention<br>';

    //No of problems we want 
    var no_prob = 0;

    for (let i = 0; i < convertdata2.result.problems.length && no_prob <= 5; i++) {
        for (let j = 0; j < convertdata1.result.length && no_prob <= 5; j++) {
            if (convertdata2.result.problems[j].contestId == convertdata1.result[j].contestId) {
                j++;
            }
            else {
                a.innerHTML += convertdata2.result.problems[j].contestId + ' with index or question part ';
                a.innerHTML += convertdata2.result.problems[j].index + '<br>';
                no_prob++;
            }
        }
    }

}
getData();
