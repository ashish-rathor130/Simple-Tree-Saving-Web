document.querySelector('.login-btn').onclick = function(){
    document.querySelector('.user-input').classList.toggle('login-box');
}

document.querySelector('.login-btn').addEventListener('onmouseover', ()=>{
    document.querySelector('.user-input').classList.remove('login-box');
    console.log('mouseovered');
})