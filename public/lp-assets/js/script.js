document.addEventListener('DOMContentLoaded', () => {
  const contactLink = document.querySelector('#contact-link');
  if (contactLink) {
    contactLink.addEventListener('click', (event) => {
      event.preventDefault();
      console.log('お問い合わせリンクがクリックされました！');
    });
  }
});