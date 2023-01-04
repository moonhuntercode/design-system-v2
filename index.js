window.onload = () => {
const menuContainer=document.querySelector('.menu_container');
const layerOfMenu=document.querySelector('.layer_of_menu');
const contentOfShapeTwo=document.getElementById('content_of_shape_two');
const contentOfShapeOne=document.getElementById('content_of_shape_one');
const shapeOne=document.getElementById('content1');
const shapeTwo=document.getElementById('content2');
const shapes=document.querySelector('.shapes')

menuContainer.addEventListener("click",()=>{
  
  console.log(layerOfMenu.style.visibility != "visible");

  if (layerOfMenu.style.visibility != "visible") {
    // SHOW TOP LAYER
    layerOfMenu.style.visibility = "visible";
    
    shapeOne.style.filter = "blur(0.4rem)";
    shapeTwo.style.filter = "blur(0.4rem)";
    
    
  //   START X ANIMATION
    secondLineOfHamburguer.style.visibility = "hidden";
    menuContainer.style.position = "fixed";
    

    firstLineOfOx.style.position = "absolute";
    secondLineOfOx.style.position = "absolute";
    firstLineOfOx.style.transform = "rotate(45deg)";
    secondLineOfOx.style.transform = "rotate(-45deg)";
  } 
  // else {
  //   //   HIDE TOP LAYER AL OCULTAR
  //   //  A CAPA SUPERIOR

  //   layerOfMenu.style.visibility = "hidden";
  //   shapes[0].style.filter = "blur(0)";
  //   shapes[1].style.filter = "blur(0)";
  //   //   START X ANIMATION
  //   secondLineOfHamburguer.style.visibility = "visible";
  //   firstLineOfOx.style.visibility = "visible";
  //   secondLineOfOx.style.visibility = "visible";
  //   firstLineOfOx.style.transform = "rotate(0deg)";

  //   secondLineOfOx.style.transform = "rotate(0deg)";
  //   firstLineOfOx.style.visibility = "relative";
  //   secondLineOfOx.style.visibility = "relative";
  //   firstLineOfOx.style.position = "relative";
  //   secondLineOfOx.style.position = "relative";
  //   secondLineOfHamburguer.style.position = "relative";
  // }
});
  


  
   showContentFirstShape=()=>{
    contentOfShapeOne.style.visibility='visible';
    shapeTwo.style.rotate='20deg'
    shapeTwo.style.transition = "1s";
    shapeTwo.style.marginLeft='5%'
  }
   hideContentFirstShape=()=>{
    contentOfShapeOne.style.visibility='hidden';
    shapeTwo.style.rotate='0deg'
    shapeTwo.style.transition = "1s";
    shapeTwo.style.marginLeft='0'

  }
   showContentSecondShape = () => {
    contentOfShapeTwo.style.visibility='visible'
    console.log(contentOfShapeTwo.style.visibility )
    // blockContentTwo[0].style.backgroundColor = "rgb(56, 0, 108)";

    // blockContentTwo[0].style.border = " solid 3px white";
  };
   hideContentSecondShape = () => {
    contentOfShapeTwo.style.visibility='hidden'

    // // blockContentTwo[0].style.backgroundColor = "rgb(56, 0, 108)";
    // blockContentTwo[0].style.border = "hidden";

  };
};
