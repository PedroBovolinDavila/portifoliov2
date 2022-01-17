// Imports
const mobileIcon = document.querySelector('.header-mobile-icon');
const navbar = document.querySelector('.header-navbar');
const header = document.querySelector('.header');
const loader = document.querySelector('.loader');
const body = document.querySelector('body');

gsap.registerPlugin(TextPlugin);

// Loader 
gsap.to('.loader-text', {
  duration: 1.9,
  text: 'Tire seus projetos do papel.',
  ease: 'none',
  onComplete: () => {
    setTimeout(() => {

      gsap.to('.loader-text', {
        duration: 0.5,
        text: '',
      })

      gsap.to('.loader', {
        delay: 0.6,
        duration: 0.2,
        scale: 0,
        onComplete: () => {
          loader.style.display = 'none'
          header.style.display = 'block'

          gsap.fromTo('.header', {
            y: -80
          }, {
            y: 0,
            duration: 1,
            clearProps: 'y,duration'
          })
        }
      })
      
    }, 1200);
  }
})

// Show Menu
mobileIcon.addEventListener('click', () => {
  navbar.classList.toggle('active')

  if (document.querySelector('.active')) {

    gsap.to('.active', {
      duration: 0.7,
      opacity: 1,
      y: 0,
      ease: "power2.inOut",
    })

    gsap.to('.active > li', {
      duration: 0.7,
      opacity: 1,
      x: 0,
      ease: "back.out(1)",
      delay: 0.3,
      stagger: 0.3
    })

  } else {
    gsap.to('.header-navbar > li', {
      duration: 0.7,
      opacity: 1,
      x: '-100vw',
      stagger: 0.12
    })

    gsap.to('.header-navbar', {
      duration: 0.5,
      opacity: 0,
      y: '-100%',
      ease: "power2.inOut",
      delay: 0.9
    })
  }
});