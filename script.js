// Menu data structure
var menuLinks = [
  { text: "about", href: "/about" },
  {
    text: "catalog",
    href: "#",
    subLinks: [
      { text: "all", href: "/catalog/all" },
      { text: "top selling", href: "/catalog/top" },
      { text: "search", href: "/catalog/search" },
    ],
  },
  {
    text: "orders",
    href: "#",
    subLinks: [
      { text: "new", href: "/orders/new" },
      { text: "pending", href: "/orders/pending" },
      { text: "history", href: "/orders/history" },
    ],
  },
  {
    text: "account",
    href: "#",
    subLinks: [
      { text: "profile", href: "/account/profile" },
      { text: "sign out", href: "/account/signout" },
    ],
  },
];
const mainEl = document.querySelector("main");
const topMenuEl = document.getElementById("top-menu");
// console.log(topMenuEl);
// 316.1 *****part 1
const subMenuEl = document.getElementById("sub-menu");
console.log(subMenuEl);
subMenuEl.textContent = subMenuEl.textContent.toUpperCase();
// // 316.3 *****part 4.1.1
const subMenuLinks = subMenuEl.getElementsByTagName("a");
console.log(subMenuLinks);
// topMenuEl.querySelector('a')
// topMenuEl.querySelectorAll('a')
// document.links;
// document.querySelectorAll('#top-menu a');

// 316.1 *****part 1
mainEl.style.backgroundColor = "var(--main-bg)";
const h1 = document.createElement("h1");
h1.innerText = "DOM Manupulation";
mainEl.appendChild(h1);
mainEl.classList.add("flex-ctr");

// 316.1 *****part 2
topMenuEl.style.height = "100%";
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
topMenuEl.classList.add("flex-around");

for (link of menuLinks) {
  const a = document.createElement("a"); //Create an <a> element.
  a.setAttribute("href", link.href); //On the new element, add an href attribute with its value set to the href property of the "link" object.
  a.textContent = link.text; //Set the new element's content to the value of the text property of the "link" object.
  topMenuEl.append(a); //Append the new element to the topMenuEl element.
  if (link.subLinks) {
    a.classList.add("has-submenu"); // Mark links with submenus
  }
}

// 316.3 ***** part 3
subMenuEl.style.height = "100%";
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";
subMenuEl.classList.add("flex-around");
subMenuEl.style.position = "absolute";
subMenuEl.style.top = "0";
// subMenuEl.textContent.toUpperCase();

const topMenuLinks = topMenuEl.querySelectorAll("a");

topMenuEl.addEventListener("click", clickedOn);
function clickedOn(evt) {
  evt.preventDefault();
  const clickedLink = evt.target;
  if (clickedLink.localName !== "a") return;
  if (clickedLink.classList.contains("active")) {
    clickedLink.classList.remove("active");
    subMenuEl.style.top = "0";
  } else {
    // look more at family nodes
    for (i = 0; i < clickedLink.parentNode.childNodes.length; i++) {
      clickedLink.parentNode.childNodes[i].classList.remove("active");
    }
    clickedLink.classList.add("active");
    for (i = 0; i < menuLinks.length; i++) {
      if (menuLinks[i].text === clickedLink.innerHTML) {
        // innerHTML
        subMenuEl.innerHTML = "";
        menuLinks[i].subLinks.forEach((link) => {
          const a = document.createElement("a");
          a.setAttribute("href", link.href);
          a.textContent = link.text;
          subMenuEl.appendChild(a);
        });
        if ("subLinks" in menuLinks[i]) {
          subMenuEl.style.top = "100%";
        } else {
          subMenuEl.style.top = "0";
        }
      }
    }
  }
  subMenuEl.addEventListener("click", function (evt) {
    evt.preventDefault();
    if (!evt.target.matches("a")) {
      return;
    }
    subMenuEl.style.top = "0";
    topMenuLinks.forEach((link) => {
      link.classList.remove("active");
    });
    // evt.target.textContent = evt.target.textContent.toUpperCase
    // console.log(evt.target.textContent);
    h1.textContent = `${evt.target.textContent}`;
    h1.textContent = h1.textContent.toUpperCase();
  });
}
// allLinks.forEach(link => link.classList.remove("active"));

// everything i have read is recommending to change how the toggle of active is set up.
//   for(i=0; i<topMenuLinks.length; i++){
//     const clicked = topMenuLinks[i];
//     // menuLinks[i].classList.remove('active');
//       // console.log(topMenuLinks[i]);
//     clicked.addEventListener('click', function(){
//       menuLinks;
//       for (i=0; i<topMenuLinks.length; i++){
//         menuLinks[i].classList.remove('active');
//         subMenuEl.style.top = "0";
//       } // 361.3 *****part 4.2.2 still needs to unclick if it was active.....(second click to not active)
//       this.classList.toggle('active');
//       subMenuEl.style.top = "100%";
//   })
// }

// console.log(topMenuLinks.class);

// });
