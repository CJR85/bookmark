const tabs = document.querySelectorAll('.tab'),
  panels = document.querySelectorAll('.panel'),
  btn = document.getElementById('menu-btn'),
  menu = document.getElementById('menu'),
  logo = document.getElementById('logo');

// Tabs menu event listener
tabs.forEach((tab) => tab.eventListener('click', onTabClick));

// Hamburger button listener
btn.addEventListener('click', navToggle);

function onTabClick(e) {
  // Deactivate all tabs
  tabs.forEach((tab) => {
    tab.children[0].classList.remove(
      'border-softRed',
      'border-b-4',
      'md:border-b-0'
    );
  });

  // Hide all panels
  panels.forEach((panel) => panel.classList.add('hidden'));

  // Activate new tab & panel based on the target
  e.target.classList.add('border-softRed', 'border-b-4');
  const classString = e.target.getAttribute('data-target');
  document
    .getElementById('panels')
    .getElementsByClassName(classString)[0]
    .classList.remove('hidden');
}

function navToggle() {
  btn.classList.toggle('open');
  menu.classList.toggle('flex');
  menu.classList.toggle('hidden');

  if (menu.classList.contains('flex')) {
    logo.setAttribute('src', './images/logo-bookmark-footer.svg');
  } else {
    logo.setAttribute('src', './images/logo-bookmark.svg');
  }
}
