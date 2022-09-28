const sign = document.getElementById('sign')
const res = document.getElementById('res')
const forgot = document.getElementById('forget')
const login = document.getElementById('login')

forgot.addEventListener('click', function ()    {
    sign.style.display = 'none'
    res.style.display = 'flex'
})
login.addEventListener('click', function(){
    res.style.display = 'none'
    sign.style.display = 'flex'
})