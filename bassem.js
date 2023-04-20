let img =document.getElementById('beso');
let tick =document.getElementById('tick');
let icons= document.getElementById('icons')

function photo(src) {
  
    if (img.src="tecn.png") {
        tick.innerHTML='<h1> First class <span>tiket</span></h1> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit Voluptates reprehenderit eligendi explicabo consequuntur eum blanditiis ullam commodi voluptatem placeat odio esse magnam officiis nam iusto sit ad molestiae natus nihil we are the best team  who are the best travel agency kill the owmen</p>';
    }
};
function change(src) {
    if (img.src="teck4.png") {
        tick.innerHTML='<h1> second class <span>tikets</span></h1> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit Voluptates reprehenderit eligendi explicabo consequuntur eum blanditiis ullam commodi voluptatem placeat odio esse magnam officiis nam iusto sit ad molestiae natus nihil we are the best team  who are the best travel agency kill the owmen</p>';
    }
};
function change2(src) {
    if (img.src="colection.png") {
        tick.innerHTML='<h1> Variety Travel <span>classes</span></h1> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit Voluptates reprehenderit eligendi explicabo consequuntur eum blanditiis ullam commodi voluptatem placeat odio esse magnam officiis nam iusto sit ad molestiae natus nihil we are the best team  who are the best travel agency kill the owmen</p>';
    }
};
function change3(src) {
    if (img.src="last.png") {
        tick.innerHTML='<h1>Third class <span>tikets</span></h1> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit Voluptates reprehenderit eligendi explicabo consequuntur eum blanditiis ullam commodi voluptatem placeat odio esse magnam officiis nam iusto sit ad molestiae natus nihil we are the best team  who are the best travel agency kill the owmen</p>';
    }
};
function change4(src) {
    if (img.src="tec1.png") {
        tick.innerHTML='<h1> Golden <span>tiket</span></h1> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit Voluptates reprehenderit eligendi explicabo consequuntur eum blanditiis ullam commodi voluptatem placeat odio esse magnam officiis nam iusto sit ad molestiae natus nihil we are the best team  who are the best travel agency kill the owmen</p>';
    }
};
// sign in and sign up//
let phone= document.getElementById('phone');
let date= document.getElementById('date1');
let name=document.getElementById ('name');
let login= document.getElementById('login');
let sub =document.getElementById ('sub'); 
let ww = document.getElementById('ww');
let signup=document.getElementById('signup');
let form=document.getElementById('form');
let ss= document.getElementById('ss')
let hide=document.getElementsByClassName('hide');
login.onclick= function signin(params) {  
        name.style.display='none';
date.style.display='none';
phone.style.display='none';
sub.innerHTML=`  <input type="submit" value="sign in">`;
login.style.display='none';
signup.style.display='block';
};
signup.onclick=function signup1(params) {
    name.style.display='block';
date.style.display='block';
phone.style.display='block';
sub.innerHTML=`  <input id="sub" type="submit" value="regester">`;
login.style.display='block';
signup.style.display='none';
};
// btn
let upbtn=document.getElementById('upbtn');
window.onscroll=function() {
    if (scrollY >= 400) {
        upbtn.style.display='block';

    }else{
        upbtn.style.display='none';
    }
}
upbtn.onclick=function name(params) {
    scroll({
        left:0,
        top:0,
        behavior:"smooth"
    })
}
// scroller
let scroller=document.getElementById('scroller');
let hight=document.documentElement.scrollHeight-document.documentElement.clientHeight;
window.addEventListener("scroll",function() {
    let scrollTop=document.documentElement.scrollTop;
    scroller.style.width=`${(scrollTop/hight)*100}%`;
});
// nav res//
hamburger= document.querySelector(".hamburger");
hamburger.onclick=function(){
    nav=document.querySelector(".nav");
    nav.classList.toggle("active");
};
let toggler= document.getElementById('toggler');
toggler.onclick= function (params) {
    document.getElementById('sy').style.display='none';
}
    

