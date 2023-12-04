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



let mainTab = function () {
  let mainTabNav = document.querySelectorAll('.nav-tabs-base__item'),
    mainTabContent = document.querySelectorAll('.item-tabs-base__img'),
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