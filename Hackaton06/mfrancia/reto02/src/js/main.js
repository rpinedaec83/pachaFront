window.addEventListener('scroll', function() {
        
    var scrollPosition = window.scrollY;
    var htmlTag = document.getElementsByTagName('html')[0];
    
    if (scrollPosition < 90) {
      htmlTag.classList.remove('header-is-scrolled');
    } else {
      htmlTag.classList.add('header-is-scrolled');
    }
});


const burgerToggles = document.querySelectorAll(".hamburger-toggle, .hamburger-content a");
	[...burgerToggles].forEach((el) => {
		el.addEventListener("click", () => {
			document.documentElement.classList.toggle("burger-is-active");
		});
});

window.addEventListener('load', function() {
  const elements = document.querySelectorAll('.has-animation');
  const windowHeight = window.innerHeight;

  function checkPosition() {
    for (let i = 0; i < elements.length; i++) {
      const element = elements[i];
      const position = element.getBoundingClientRect().top;
      if (position < windowHeight) {
        element.classList.add('animation-active');
      }
    }
  }

  checkPosition();

  window.addEventListener('scroll', function() {
    checkPosition();
  });
});
