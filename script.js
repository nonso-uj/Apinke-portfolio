function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}


let options = {
  threshold: 0.25,
};

// FADE LEFT OBSERVER
const observer1 = new IntersectionObserver(entries => {
  // Loop over the entries
  entries.forEach(entry => {
    // If the element is visible
    if (entry.isIntersecting) {
      // Add the animation class
      entry.target.classList.add('animate__animated', 'animate__fadeInLeft', 'animate__slow');
    }
  });
});

// Get multiple elements instead of a single one using "querySelectorAll"
const squares1 = document.querySelectorAll('.fadeLeft');

// Loop over the elements and add each one to the observer1
squares1.forEach((element) => observer1.observe(element));
 



// FADE LEFT OBSERVER
const observer2 = new IntersectionObserver(entries => {
  // Loop over the entries
  entries.forEach(entry => {
    // If the element is visible
    if (entry.isIntersecting) {
      // Add the animation class
      entry.target.classList.add('animate__animated', 'animate__fadeInUp');
    }
  });
});

// Get multiple elements instead of a single one using "querySelectorAll"
const squares2 = document.querySelectorAll('.fadeInUp');

// Loop over the elements and add each one to the observer2
squares2.forEach((element) => observer2.observe(element));




// FADE LEFT OBSERVER
const observer3 = new IntersectionObserver(entries => {
  // Loop over the entries
  entries.forEach(entry => {
    // If the element is visible
    if (entry.isIntersecting) {
      // Add the animation class
      entry.target.classList.add('animate__animated', 'animate__fadeInRight', 'animate__slow');
    }
  });
});

// Get multiple elements instead of a single one using "querySelectorAll"
const squares3 = document.querySelectorAll('.fadeRight');

// Loop over the elements and add each one to the observer3
squares3.forEach((element) => observer3.observe(element));



// FADE LEFT OBSERVER
const observer4 = new IntersectionObserver(entries => {
  // Loop over the entries
  entries.forEach(entry => {
    // If the element is visible
    if (entry.isIntersecting) {
      // Add the animation class
      entry.target.classList.add('animate__animated', 'animate__fadeInLeft', 'animate__slow');
    }
  });
}, options);

// Get multiple elements instead of a single one using "querySelectorAll"
const squares4 = document.querySelectorAll('.fadeLeft1');

// Loop over the elements and add each one to the observer4
squares4.forEach((element) => observer4.observe(element));