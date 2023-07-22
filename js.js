
function applyResponsiveStyles() {
  var screenWidth = window.innerWidth;

  if (screenWidth >= 768) {
    document.querySelector('.features').style.right = '130px';
  } else if (screenWidth >= 481 && screenWidth <= 767) {
    document.querySelector('.features').style.right = '100px';
  }
  else if (screenWidth <= 450 && screenWidth >= 400 ){
    document.querySelector('.features').style.position = "relative";
    document.querySelector('.features').style.right = '30px';
  }
  else if (screenWidth <= 450 && screenWidth >= 400 ){
    document.querySelector('.features').style.position = "relative";
    document.querySelector('.features').style.right = '30px';
  }
  else if(screenWidth < 400 && screenWidth >=   375){
      document.querySelector('.features').style.position = "relative";
      document.querySelector('.features').style.right = '40px';
      console.log(screenWidth);
   
  }
  else{
    document.querySelector('.features').style.right = "65px";
  }

}

// Event listener for the resize event
window.addEventListener('resize', applyResponsiveStyles);

// Initial call to apply responsive styles on page load
applyResponsiveStyles();
