
// *****part 1
const mainE1 = document.querySelector("main");
mainE1.style.backgroundColor = "var(--main-bg)";
mainE1.innerHTML = "<h1>DOM Manipulation</h1>"
mainE1.classList.add("flex-ctr");

// *****part 2
const topMenuE1 = document.querySelector("#top-menu");
topMenuEl.style.height = "100%";
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';
topMenuEl.classList.add("flex-around");

// *****part 3
menuLinks.forEach(link => {
  const newEl = document.createElement("a");
  newEl.href = link.href;
  newEl.textContent = link.text;
  topMenuEl.append(newEl);
})