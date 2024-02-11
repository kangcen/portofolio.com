// Add custom JavaScript here
function runTypingEffect() {
    const text = 'Saya Al Abiyyu Mahdy';
    const typingElement = document.getElementById('typing');
    const typingDelay = 80;
  
    typeText(text, typingElement, typingDelay);
  }
  
  function typeText(text, typingElement, delay) {
    for (let i = 0; i < text.length; i++) {
      setTimeout(() => {
        typingElement.textContent += text.charAt(i);
      }, delay * i);
    }
  }
  
  document.addEventListener('DOMContentLoaded', runTypingEffect);
  