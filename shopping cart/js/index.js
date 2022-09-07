let storyOpen = document.querySelector('#ayuda');
let storyOpen2=document.querySelector('#vista');
let story = document.querySelector('.historia');
let storyOpen3=document.querySelector('#vista2');
let story3 = document.querySelector('.info2');
let storyClose2 = document.querySelector('#close-cart2');
let storyClose = document.querySelector('#close-cart');
let storyClose3 = document.querySelector('#close-cart3');
let storyOpen4 = document.querySelector('#vista3');
let storyClose4 = document.querySelector('#close-cart4');

storyOpen.onclick = () =>{
    story.classList.add('active');
};
storyClose.onclick = () =>{
    story.classList.remove('active');
};
storyOpen2.onclick = () =>{
    story3.classList.add('active');
};
storyClose2.onclick = () =>{
    story3.classList.remove('active');
};
storyOpen3.onclick = () =>{
    story3.classList.add('active');
};
storyClose3.onclick = () =>{
    story3.classList.remove('active');
};
storyOpen4.onclick = () =>{
    story3.classList.add('active');
};
storyClose4.onclick = () =>{
    story3.classList.remove('active');
};
