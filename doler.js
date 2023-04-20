let u =  document.getElementById('u');
let p = document.getElementById('p');
u.onkeyup = () => {
    p.value = u.value*30.17;
    
}
p.onkeyup= () => {
    u.value = p / 30.17;
}