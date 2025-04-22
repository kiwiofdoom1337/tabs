let firstTabSelect = document.getElementById("first-tab-select");
let secondTabSelect = document.getElementById("second-tab-select");
let thirdTabSelect = document.getElementById("third-tab-select");
let fourthTabSelect = document.getElementById("fourth-tab-select");

let firstTab = document.getElementById("first-tab");
let secondTab = document.getElementById("second-tab");
let thirdTab = document.getElementById("third-tab");
let fourthTab = document.getElementById("fourth-tab");

let tabSelects = [firstTabSelect, secondTabSelect, thirdTabSelect, fourthTabSelect];
let tabs = [firstTab, secondTab, thirdTab, fourthTab]

firstTabSelect.onclick = function() {
  tabSelects.forEach((el, index) => {
    el.classList.toggle('nav-active', el === firstTabSelect);
    el.classList.toggle('nav-inactive', el !== firstTabSelect);
  })

  tabs.forEach((el, index) => {
    el.classList.toggle('tab-active', el === firstTab);
    el.classList.toggle('tab-inactive', el !== firstTab);
  })
}

secondTabSelect.onclick = function() {
  tabSelects.forEach((el, index) => {
    el.classList.toggle('nav-active', el === secondTabSelect);
    el.classList.toggle('nav-inactive', el !== secondTabSelect);
  })

  tabs.forEach((el, index) => {
    el.classList.toggle('tab-active', el === secondTab);
    el.classList.toggle('tab-inactive', el !== secondTab);
  })
}

thirdTabSelect.onclick = function() {
  tabSelects.forEach((el, index) => {
    el.classList.toggle('nav-active', el === thirdTabSelect);
    el.classList.toggle('nav-inactive', el !== thirdTabSelect);
  })

  tabs.forEach((el, index) => {
    el.classList.toggle('tab-active', el === thirdTab);
    el.classList.toggle('tab-inactive', el !== thirdTab);
  })
}

fourthTabSelect.onclick = function() {
  tabSelects.forEach((el, index) => {
    el.classList.toggle('nav-active', el === fourthTabSelect);
    el.classList.toggle('nav-inactive', el !== fourthTabSelect);
  })

  tabs.forEach((el, index) => {
    el.classList.toggle('tab-active', el === fourthTab);
    el.classList.toggle('tab-inactive', el !== fourthTab);
  })
}
