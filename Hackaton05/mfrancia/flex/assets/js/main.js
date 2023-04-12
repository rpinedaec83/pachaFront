window.addEventListener('scroll', function() {
  var scrollPosition = window.scrollY;
  var htmlTag = document.getElementsByTagName('html')[0];
  
  if (scrollPosition < 90) {
    htmlTag.classList.remove('header-is-scrolled');
  } else {
    htmlTag.classList.add('header-is-scrolled');
  }
});
