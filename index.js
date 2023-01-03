window.onload=()=>{
    const shapes=document.getElementsByClassName('shapes_children');
    const firstLineOfOx=document.getElementById('first_line_of_x');
    const secondLineOfOx=document.getElementById('second_line_of_x');
    const secondLineOfHamburguer=document.getElementById('second_line_of_hamburguer');
    console.log(firstLineOfOx);
    const layerOfMenu=document.querySelector('.layer_of_menu');
const menuContainer=document.querySelector('.menu_container ');
const contentOne = document.getElementById("content1");
const contentTwo = document.getElementById("content2");
const blockContentOne = document.getElementsByClassName("one");
const blockContentTwo = document.getElementsByClassName("two");
equisAnimation=()=>{
   
}
menuContainer.addEventListener('click',()=>{
  // Code for Safari 3.1 to 
  layerOfMenu.style.WebkitTransition = "reverse 1s";
//   Standard transition
  layerOfMenu.style.transition = "all 1s";
  


  




    console.log(layerOfMenu.style.display != 'block');

    if (layerOfMenu.style.display != 'block') { 
        // SHOW TOP LAYER
        layerOfMenu.style.display = "block"
        shapes[0].style.filter='blur(0.4rem)';
        shapes[1].style.filter='blur(0.4rem)';
//   START X ANIMATION
menuContainer.style.position='relative'
firstLineOfOx.style.position='absolute'
secondLineOfOx.style.position='absolute'
secondLineOfHamburguer.style.display="none"
    firstLineOfOx.style.transform='rotate(45deg)';
    secondLineOfOx.style.transform='rotate(-45deg)';  
}
else{

//   HIDE TOP LAYER
layerOfMenu.style.display = "none"
shapes[0].style.filter='blur(0)';
shapes[1].style.filter='blur(0)';
//   START X ANIMATION
secondLineOfHamburguer.style.display="block"
firstLineOfOx.style.display="block"
secondLineOfOx.style.display="block"
firstLineOfOx.style.transform='rotate(0deg)';


secondLineOfOx.style.transform='rotate(0deg)';
firstLineOfOx.style.display='relative'
secondLineOfOx.style.display="relative"
secondLineOfHamburguer.style.position='relative'

}
  
})

showEffect = () => {
blockContentTwo[0].style.marginLeft = "25%";
blockContentTwo[0].style.rotate = "20deg";
blockContentTwo[0].style.transition = "1s";
contentOne.style.display = "block";
console.log(blockContentTwo[0].style.marginLeft);
};
hideEffect = () => {
blockContentTwo[0].style.marginLeft = "20%";
blockContentTwo[0].style.rotate = "0deg";
blockContentTwo[0].style.transition = "1s";
contentOne.style.display = "none";
};
showContent = () => {
contentTwo.style.display = "block";
blockContentTwo[0].style.backgroundColor = "rgb(56, 0, 108)";

blockContentTwo[0].style.border = " solid 3px white";
};
hideContent = () => {
contentTwo.style.display = "none";
blockContentTwo[0].style.backgroundColor = "rgb(56, 0, 108)";
blockContentTwo[0].style.border = "none";
};
}
