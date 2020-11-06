// check for saved 'darkMode' in localStorage
darkMode = localStorage.getItem('darkMode'); 
let html = document.getElementsByTagName( 'html' )[0];
let link = document.querySelector('.custom-css');

// const darkModeToggle = document.querySelectorAll('.custom-css');

function enableDarkMode() {
  // 1. Add the class to the body
  html.classList.add('darkmode');
  localStorage.setItem('darkMode', 'enabled');
  if (typeof darkModeToggle !== 'undefined') {
    darkModeToggle.checked = true;
  }
  document.querySelector("meta[name=theme-color]").setAttribute("content", "#222222");
}

function disableDarkMode() {
  // 1. Remove the class from the body
  html.classList.remove('darkmode');
  localStorage.setItem('darkMode', 'disabled');
  if (typeof darkModeToggle !== 'undefined') {
    darkModeToggle.checked = false;
  }
  document.querySelector("meta[name=theme-color]").setAttribute("content", "#6671c6");
}
 
// If the user already visited and enabled darkMode
// start things off with it on
if (darkMode === 'enabled') {
    enableDarkMode();
}
if (darkMode === 'disabled') {
    disableDarkMode();
}

function setDarkMode(bool) {
  if (bool) {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
}


// // When someone clicks the button
// darkModeToggle.addEventListener('click', () => {
//   // get their darkMode setting
//   darkMode = localStorage.getItem('darkMode'); 
  
//   // if it not current enabled, enable it
//   if (darkMode !== 'enabled') {
//     enableDarkMode();
//   // if it has been enabled, turn it off  
//   } else {  
//     disableDarkMode(); 
//   }
// });
