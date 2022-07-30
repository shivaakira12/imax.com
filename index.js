let navbar = document.querySelector('.header .navbar');
let search_bar=document.querySelector('.search-container');
document.querySelector('.search-icon').onclick=()=>{
	search_bar.classList.toggle('active');
}

document.querySelector('#menu-btn').onclick = () =>{
   navbar.classList.toggle('active');
}

// document.querySelector('#user-btn').onclick = () =>{
//    profile.classList.toggle('active');
//    navbar.classList.remove('active');
// }

window.onscroll = () =>{
   profile.classList.remove('active');
   navbar.classList.remove('active');
}