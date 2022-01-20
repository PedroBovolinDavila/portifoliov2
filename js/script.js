// Imports
const mobileIcon = document.querySelector('.header-mobile-icon');
const navbar = document.querySelector('.header-navbar');
const header = document.querySelector('.header');
const loader = document.querySelector('.loader');
const body = document.querySelector('body');
const main = document.querySelector('.main');

gsap.registerPlugin(TextPlugin);

// Loader 
gsap.to('.loader-text', {
  duration: 1.9,
  text: 'Olá, seja bem vindo!',
  ease: 'none',
  onComplete: () => {
    setTimeout(() => {

      gsap.to('.loader-text', {
        duration: 0.5,
        text: '',
      })

      gsap.to('.loader', {
        delay: 0.6,
        duration: 0.3,
        scale: 0,
        onComplete: () => {
          loader.style.display = 'none'
          header.style.display = 'block'
          main.style.display = 'block'

          gsap.fromTo('.header', {
            y: -80
          }, {
            y: 0,
            duration: 1,
            delay: 2.6,
            clearProps: 'y,duration'
          })

          gsap.fromTo(['.hero-title', '.hero-img', '.triangle'], {
            opacity: 0,
          }, {
            y: 0,
            opacity: 1,
            delay: 0.2,
            duration: 1.5,

          })

          gsap.to('.hero-desc', {
            duration: 1.5,
            delay: 1,
            text: 'Sou desenvolvedor web Fullstack',
            ease: 'none'
          })

          gsap.to('.social-icon', {
            duration: 1.7,
            opacity: 1,
            x: 0,
            delay: 2.6,
            stagger: 0.4,
            ease: "back.out(0.7)"
          })
        }
      })
      
    }, 1500);
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