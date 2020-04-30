export const scrollToSection = (sectionNumber) => {
  const sections = [
    document.querySelector('.about-section'),
    document.querySelector('.contact-section'),
  ];
  const mainSection = sections[sectionNumber];

  if ( mainSection ){
    window.scrollTo({
      top: mainSection.offsetTop - 100,
      left: 0,
      behavior: 'smooth',
    });
  }
};
