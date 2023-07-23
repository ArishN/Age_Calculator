// var dobInput = document.querySelector('#dob-picker');
// var calculate = document.querySelector('#calculate');

// calculate.addEventListener("click",()=>{
//     var dobValue = dobInput.value;
//     var dob = new Date(dobValue);

//     var currDate = new Date();

//     var newDate = new Date(currDate-dob);

//     var year = newDate.getFullYear() - 1970;
//     var month = newDate.getMonth();
//     var date = newDate.getDate()- 1;
//     console.log(year,month,date);

// });



var dobInput = document.querySelector('#dob-picker');
var submitBtn = document.querySelector('#calculate');
var outputStatement = document.querySelector('.outputsection');

submitBtn.addEventListener("click",()=>{
    var dob = new Date(dobInput.value);
    var currentdate = new Date();
    var newDate = new Date(currentdate-dob);

    var year = newDate.getFullYear() - 1970;
    var month = newDate.getMonth();
    var days = newDate.getDate() - 1;

     outputStatement.innerHTML = ` <h3 class="output"> You're ${year} years ${month} Months ${days} Days Old!</h3>`;
    console.log(year,month,date);
})