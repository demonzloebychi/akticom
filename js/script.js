const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
  window.addEventListener('scroll', animOnScroll)
  function animOnScroll(){
    for (let index = 0; index < animItems.length; index++){
      const animItem = animItems[index];
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = offset(animItem).top;
      const animStart = 4;

      let animItemPoint = window.innerHeight - animItemHeight / animStart;

      if(animItemHeight > window.innerHeight){
        animItemPoint = window.innerHeight -  window.innerHeight / animStart;
      }
      
      if((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)){
        animItem.classList.add('_active');
      }else{
        if(!animItem.classList.contains(        "_anim-no-hide")){
          animItem.classList.remove('_active');
        }
      }
    }
    function offset(el) {
      const rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return { top: rect.top + scrollTop, left: rect.left + scrollLeft}

    }
  }
  animOnScroll();
}




// document.addEventListener("DOMContentLoaded", function() {
  
//   const mediaFiles = document.querySelectorAll('img, video');
//   let i = 0

//   Array.from(mediaFiles).forEach((file, index) => {
//     file.onload = () => {
//       i++

//       perc.innerHTML == ((i * 100) / mediaFiles.length).toFixied()

//       if(i === mediaFiles.length){
//         preloader.classList.add('preloader-hide');
//         perc.innerHTML == 100
//       }


//     }
//   });
  
// });


// let perc = document.querySelector('.perc');
// let loader = document.querySelector('.loader');

// loader.addEventListener('animationstart', function() {
//   let count = +perc.textContent;
//   let inter = setInterval(()=>{
//     count++;
//     perc.textContent = '${count}%'

//   },50)
// })




const burger = document.querySelector('.header__burger');
const menu = document.querySelector('.menu');
const main = document.querySelector('.main');
const footer = document.querySelector('.footer');
const header = document.querySelector('.header');


if (burger){
    burger.addEventListener("click", function(e){
        document.body.classList.toggle('lock');
        burger.classList.toggle('active');
        menu.classList.toggle('active');
        main.classList.toggle('active');
        footer.classList.toggle('active');
        header.classList.toggle('active');
    });


    
}



const accordionItems = document.querySelectorAll(".accordion-item");

for (let i = 0; i < accordionItems.length; i++) {
  accordionItems[i].addEventListener("click", function() {
    this.classList.toggle("active");

    for (let j = 0; j < accordionItems.length; j++) {
      if (accordionItems[j] !== this) {
        accordionItems[j].classList.remove("active");
      }
    }
  });
};





  let link = document.querySelectorAll('.menu__link');
for(i=0; i<link.length; i++){
    let subMenu = link[i].nextElementSibling;
    let thisLink = link[i];
  link[i].addEventListener('click', function(){
    subMenu.classList.toggle('open');
    thisLink.classList.toggle('active');
  })
}

  let subLink = document.querySelectorAll('.sub-menu__link');
for(i=0; i<subLink.length; i++){
  let subSubMenu = subLink[i].nextElementSibling;
  let thisSubLink = subLink[i];
subLink[i].addEventListener('click', function(){
  subSubMenu.classList.toggle('open');
  thisSubLink.classList.toggle('active');

      for (let j = 0; j < subLink.length; j++) {
        if (subLink[j] !== this) {
          subLink[j].classList.remove("active");
          subLink[j].nextElementSibling.classList.remove('open');
        }
      }

});
};



function openTab(event, id){
  var i, content, btn;

content = document.getElementsByClassName('item-tabs-base__img');
for (i=0; i<content.length; i++){
  content[i].style.display = 'none';
}
btn = document.getElementsByClassName('nav-tabs-base__item')
for(i=0; i<btn.length; i++){
  btn[i].className = btn[i].className.replace(' is-active','');
}

document.getElementById(id).style.display = 'block';
event.curentTarget.className += 'is-active'
}

// function closeTab(event, id){
//   var i, content, btn;

// content = document.getElementsByClassName('item-tabs-base__img');
// for (i=0; i<content.length; i++){
//   content[i].style.display = 'none';
// }
// btn = document.getElementsByClassName('nav-tabs-base__item')
// for(i=0; i<btn.length; i++){
//   btn[i].className = btn[i].className.replace(' is-active','');
// }

// document.getElementById(id).style.display = 'block';
// event.curentTarget.className += 'is-active'
// }
function closeTab (){

}








let mainTab = function () {
  let mainTabNav = document.querySelectorAll('.discuss-nav__btn'),
    mainTabContent = document.querySelectorAll('.tab-discuss'),
    mainTabName;

  mainTabNav.forEach(item => {
    item.addEventListener('click',selectMainTabNav)
  });
  
  function selectMainTabNav(){
      mainTabNav.forEach(item => {
        item.classList.remove('is-active');

      });
    this.classList.add('is-active');
    mainTabName = this.getAttribute('data-tab-name');
    selectMainTabContent(mainTabName);
  };

  function selectMainTabContent(mainTabName) {
    mainTabContent.forEach(item => {
      item.classList.contains(mainTabName)? item.classList.add('is-active'): item.classList.remove('is-active');
    })
  }

};
mainTab();



let projectTab = function () {
  let projectTabNav = document.querySelectorAll('.nav-project__item'),
    projectTabContent = document.querySelectorAll('.project__body'),
    projectTabName;

    projectTabNav.forEach(item => {
    item.addEventListener('click',selectProjectTabNav)
  });
  
  function selectProjectTabNav(){
    projectTabNav.forEach(item => {
        item.classList.remove('is-active');

      });
    this.classList.add('is-active');
    projectTabName = this.getAttribute('data-tab-name');
    selectProjectTabContent(projectTabName);
  };

  function selectProjectTabContent(projectTabName) {
    projectTabContent.forEach(item => {
      item.classList.contains(projectTabName)? item.classList.add('is-active'): item.classList.remove('is-active');
    })
  }

};
projectTab();








// var currentTab = 0; // Current tab is set to be the first tab (0)
// showTab(currentTab); // Display the current tab

// function showTab(n) {
//   // This function will display the specified tab of the form ...
//   var x = document.getElementsByClassName("tab");
//   x[n].style.display = "block";
//   // ... and fix the Previous/Next buttons:
//   if (n == 0) {
//     document.getElementById("prevBtn").style.display = "none";
//   } else {
//     document.getElementById("prevBtn").style.display = "inline";
//   }
//   if (n == (x.length - 1)) {
//     document.getElementById("nextBtn").innerHTML = "Submit";
//   } else {
//     document.getElementById("nextBtn").innerHTML = "Next";
//   }
//   // ... and run a function that displays the correct step indicator:
//   fixStepIndicator(n)
// }

// function nextPrev(n) {
//   // This function will figure out which tab to display
//   var x = document.getElementsByClassName("tab");
//   // Exit the function if any field in the current tab is invalid:
//   if (n == 1 && !validateForm()) return false;
//   // Hide the current tab:
//   x[currentTab].style.display = "none";
//   // Increase or decrease the current tab by 1:
//   currentTab = currentTab + n;
//   // if you have reached the end of the form... :
//   if (currentTab >= x.length) {
//     //...the form gets submitted:
//     document.getElementById("regForm").submit();
//     return false;
//   }
//   // Otherwise, display the correct tab:
//   showTab(currentTab);
// }

// function validateForm() {
//   // This function deals with validation of the form fields
//   var x, y, i, valid = true;
//   x = document.getElementsByClassName("tab");
//   y = x[currentTab].getElementsByTagName("input");
//   // A loop that checks every input field in the current tab:
//   for (i = 0; i < y.length; i++) {
//     // If a field is empty...
//     if (y[i].value == "") {
//       // add an "invalid" class to the field:
//       y[i].className += " invalid";
//       // and set the current valid status to false:
//       valid = false;
//     }
//   }
//   // If the valid status is true, mark the step as finished and valid:
//   if (valid) {
//     document.getElementsByClassName("step")[currentTab].className += " finish";
//   }
//   return valid; // return the valid status
// }

// function fixStepIndicator(n) {
//   // This function removes the "active" class of all steps...
//   var i, x = document.getElementsByClassName("step");
//   for (i = 0; i < x.length; i++) {
//     x[i].className = x[i].className.replace(" active", "");
//   }
//   //... and adds the "active" class to the current step:
//   x[n].className += " active";
// }