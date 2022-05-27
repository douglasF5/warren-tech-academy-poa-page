function onScroll() {
  if (scrollY > 0) {
    navigation.classList.add("scroll");
  } else {
    navigation.classList.remove("scroll");
  }
}

function openMenu() {
  document.body.classList.add("menu-expanded");
}
function closeMenu() {
  document.body.classList.remove("menu-expanded");
}

function toggleSeeMoreParticipants() {
  document.body.classList.toggle("menu-expanded");
}

function toggleShowMoreParticipants() {
  var x = document.getElementById("show-more-participants");
  if (x.style.display === "none") {
    x.style.display = "flex";
  } else {
    x.style.display = "none";
  }
} 

const btn = document.getElementById('btn');

btn.addEventListener('click', function handleClick() {
  const initialText = 'Ver mais...';

  if (btn.textContent.toLowerCase().includes(initialText.toLowerCase())) {
    btn.innerHTML =
      'Ver menos...';
  } else {
    btn.textContent = initialText;
  }
});
