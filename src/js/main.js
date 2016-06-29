import $ from 'jquery'

var userdiv_temp = 



$.ajax({
  url: 'http://api.randomuser.me/?results=12',
  dataType: 'json',
       }).then(function(x){
       
       var email;
       
       var phone;
       var social;
       var name;

console.log(x);
 
var getItems= function(){
        x.results.forEach(function(y){

   
  var image = y.picture.large;
   name = y.name.title +"."+ y.name.first +" "+ y.name.last;
   email = y.email;
var street = y.location.street ;
var city = y.location.city + " ";
var state =y.location.state + " ";
var postcode = y.location.postcode;
   var address =` <div> ${street} </div> <div> ${city} ${state} ${postcode}</div>`;
    phone = y.phone;
    social = y.id.value;
  $(".main_div").append(`<div class="user_div">
  <div class="img_div">   <img src=${image}>   </div>
  <span class="user_name"> ${name}</span>
  <div class="user_email"> ${email}</div>
  <div class="user_address"> ${address} </div>
  <div class="user_phone">${phone} </div>
  <div class="user_ssn"> ${social}</div>
</div>`) });


 }
getItems();
});


//  var getName= function(){
//         x.results.forEach(function(y){
//              phone = y.phone;
//              social = y.id.value;
//             name = y.name.title +"."+ y.name.first +" "+ y.name.last;
//             console.log(name) 
        	
//             $(".user_div").append(`<span class="user_name">${name}</span>`)

//         }); }
//         getName()




//        var getEmail= function(){
//         x.results.forEach(function(y){
//         	console.log(y.email)
//         	email = y.email;
//             $(".user_div").append(`<div class="user_email"> ${email}</div>`)

//         }); }
//         getEmail()

	     
//        var getAddress= function(){
//         x.results.forEach(function(y){
//         	var street = y.location.street ;
//             var city = y.location.city + " ";
//             var state =y.location.state + " ";
//             var postcode = y.location.postcode;

//         	address =` <div> ${street} </div> <div> ${city} ${state} ${postcode}</div>`;
//             $(".user_div").append(`<div class="user_address"> ${address}</div>`)

//         }); }
//         getAddress()


// console.log(phone);
// console.log(social);














	    