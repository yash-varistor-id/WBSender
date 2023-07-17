// navigation bar
const toggleMenu = () => {
    const burgerMenu = document.querySelector(".menu-icon");
    const src= burgerMenu.getAttribute('src');
    const iconName = src === 'menu.svg'?
    'close.svg'
    :
    'menu.svg';

    burgerMenu.setAttribute('src',iconName );
    const navigation = document.querySelector('.navigation');
    navigation.classList.toggle (
        'navigation--mobile'
    );
};

//Progress bar
const body = document.body;
const progressBar = document.querySelector('.progress__bar');
console.log(progressBar)
const updateProgress = () => {
    let scrollPos =
        (window.scrollY / (body.scrollHeight - window.innerHeight)) * 100;
    console.log(scrollPos)
    progressBar.style.width = `${scrollPos}%`;
    requestAnimationFrame(updateProgress);
};

updateProgress()

// faqs
class Accordion {
    constructor(el) {
      this.el = el;
      this.summary = el.querySelector('summary');
      this.content = el.querySelector('.faq-content');
      this.expandIcon = this.summary.querySelector('.expand-icon')
      this.animation = null;
      this.isClosing = false;
      this.isExpanding = false;
      this.summary.addEventListener('click', (e) => this.onClick(e));
    }
  
    onClick(e) {
      e.preventDefault();
      this.el.style.overflow = 'hidden';

      if (this.isClosing || !this.el.open) {
        this.open();
      } else if (this.isExpanding || this.el.open) {
        this.shrink();
      }
    }
  
    shrink() {
      this.isClosing = true;

      const startHeight = `${this.el.offsetHeight}px`;
      const endHeight = `${this.summary.offsetHeight}px`;

      if (this.animation) {
        this.animation.cancel();
      }
      
      this.animation = this.el.animate({
        height: [startHeight, endHeight]
      }, {
        duration: 400,
        easing: 'ease-out'
      });

      this.animation.onfinish = () => {
        this.expandIcon.setAttribute('src', 'plus.svg');
        return this.onAnimationFinish(false);
      }
      this.animation.oncancel = () => {
        this.expandIcon.setAttribute('src', 'plus.svg');
        return this.isClosing = false;
      }
    }
  
    open() {
      this.el.style.height = `${this.el.offsetHeight}px`;
      this.el.open = true;
      window.requestAnimationFrame(() => this.expand());
    }
  
    expand() {
      this.isExpanding = true;

      const startHeight = `${this.el.offsetHeight}px`;
      const endHeight = `${this.summary.offsetHeight + 
                           this.content.offsetHeight}px`;

      if (this.animation) {
        this.animation.cancel();
      }
      
      this.animation = this.el.animate({
        height: [startHeight, endHeight]
      }, {
        duration: 350,
        easing: 'ease-out'
      });

      this.animation.onfinish = () => {
        this.expandIcon.setAttribute(
            'src',
            'minus.svg'
        );
        return this.onAnimationFinish(true);
      }
      this.animation.oncancel = () => {
        this.expandIcon.setAttribute(
            'src',
            'minus.svg'
        );
        return this.isExpanding = false;
      }
    }
  
    onAnimationFinish(open) {
      this.el.open = open;
      this.animation = null;
      this.isClosing = false;
      this.isExpanding = false;
      this.el.style.height = this.el.style.overflow = '';
    }
  }
  
  document.querySelectorAll('details').forEach((el) => {
    new Accordion(el);
  });

// footer
document.getElementById("year").innerHTML = new Date().getFullYear();