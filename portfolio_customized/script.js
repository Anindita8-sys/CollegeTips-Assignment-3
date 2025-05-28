
document.querySelector('form').addEventListener('submit', function(e) {
  alert("Thank you for your message!");
});

document.getElementById('toggle-theme').addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

const words = ["Developer", "Software Tester", "Techie"];
let i = 0, j = 0, currentWord = "", isDeleting = false;

function type() {
  if (i < words.length) {
    if (!isDeleting && j <= words[i].length) {
      currentWord = words[i].substring(0, j++);
    } else if (isDeleting && j >= 0) {
      currentWord = words[i].substring(0, j--);
    }

    document.getElementById("typing-text").textContent = currentWord;

    if (!isDeleting && j === words[i].length) {
      isDeleting = true;
      setTimeout(type, 1000);
    } else if (isDeleting && j === 0) {
      isDeleting = false;
      i = (i + 1) % words.length;
    }

    setTimeout(type, isDeleting ? 100 : 200);
  }
}
type();

document.querySelectorAll('.filter-buttons button').forEach(button => {
  button.addEventListener('click', () => {
    const filter = button.getAttribute('data-filter');
    document.querySelectorAll('.project-card').forEach(card => {
      card.style.display = (filter === 'all' || card.getAttribute('data-category') === filter) ? 'block' : 'none';
    });
  });
});
