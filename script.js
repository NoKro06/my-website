document.getElementById('contact-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const email = e.target.email.value;
  alert(`Thanks! We'll contact ${email} soon.`);
});
