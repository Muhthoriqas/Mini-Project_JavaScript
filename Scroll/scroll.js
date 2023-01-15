const fullBar = document.getElementById("fullBar");
const fullScroll = () => {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  fullBar.style.width = scrolled + "%";
};

const sections = [...document.querySelectorAll("section")];
const getLinkById = (id) => document.querySelector(`a[href='#${id}']`);

const inView = (section) => {
  let top = section.offsetTop;
  let height = section.offsetHeight;

  while (section.offsetParent) {
    section = section.offsetParent;
    top += section.offsetTop;
  }

  return (
    top < window.pageYOffset + window.innerHeight &&
    top + height > window.pageYOffset
  );
};

window.onscroll = () => {
  fullScroll();

  let next = false;

  sections.forEach((section) => {
    const a = getLinkById(section.id);

    if (inView(section) && !next) {
      a.classList.add("nav--current");
      next = true;
    } else {
      a.classList.remove("nav--current");
    }
  });
};
