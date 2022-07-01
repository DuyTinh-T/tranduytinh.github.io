
// phần đn

var CORRECT_USER ='duytinh';
var CORRECT_PASS ='tinh';


var inputUsername = document.getElementById('username');
var inputUsername = document.getElementById('password');


var formLogin= document.getElementById('form-dn');

if(formLogin.attachEvent){
    formLogin.attachEvent('submit',onFormSubmit)
}else{
    formLogin.addEventListener('submit',onFormSubmit);
}

function onFormSubmit(e){
    var username =inputUsername.value;
    var password =inputUsername.value;

    if(username != CORRECT_USER && password != CORRECT_PASS){
        alert('Đăng nhập thất bại');
    }else{
        alert('Đăng nhập thành công');
    }
}



$(document).ready(function(){
    $('#eye').click(function(){
        $(this).toggleClass('open');
        $(this).children('i').toggleClass('fa-eye-slash fa-eye');
        if($(this).hasClass('open')){
            $(this).prev().attr('type','text');
        }else{
            $(this).prev().attr('type','password');

        }
     });
});