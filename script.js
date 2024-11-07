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
// 361.1 *****part 1
const subMenuEl = document.getElementById("sub-menu");
// // 361.3 *****part 4.1.1
const topMenuLinks = topMenuEl.getElementsByTagName("a");
// topMenuEl.querySelector('a')
// topMenuEl.querySelectorAll('a')
// document.links;
// document.querySelectorAll('#top-menu a');
console.log(topMenuLinks);

// 361.1 *****part 1
mainEl.style.backgroundColor = "var(--main-bg)";
mainEl.innerHTML = "<h1>DOM Manipulation</h1>";
mainEl.classList.add("flex-ctr");

// 316.1 *****part 2
topMenuEl.style.height = "100%";
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
topMenuEl.classList.add("flex-around");

// 361.3 *****part 4.1.2
// topMenuEl.addEventListener("click", clickedOn)

// 316.3 ***** part 3
subMenuEl.style.height = "100%";
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";
subMenuEl.classList.add("flex-around");
subMenuEl.style.position = "absolute";
subMenuEl.style.top = "0";

// 361.3 *****part 4.2.1
document.addEventListener("DOMContentLoaded", () => {
  topMenuEl.addEventListener("click", clickedOn);

  // 361.3 *****part 4.1.2
  // function clickedOn(evt){
  //   const clickedLink = evt.target
  //   console.log(clickedLink, 'pineapple');
  //   console.log(evt.target.textContent, 'banana');
  //   if (evt.target.localName !== 'a'){
  //     evt.preventDefault()
  //     return
  //   }

  //   if (clickedLink.classList.contains("has-submenu")) {
  //     const isActive = clickedLink.classList.contains('active');
  //     console.log(isActive, 'orange');
  //     clickedLink.classList.toggle('active');
  // }
  // topMenuEl.querySelector('a').forEach(link => {
  //   const activeLink = clickedOn.classList.contains('active')
  //   console.log(activeLink, 'apple');
  //   link.classList.remove('active');
  // })
  // }
  function clickedOn(evt) {
    const clickedLink = evt.target;
    console.log(clickedLink);

    if (clickedLink.localName !== "a") {
      evt.preventDefault();
      return;
    }
    const activeLink = clickedLink.classList.contains("active");
    console.log(activeLink);
    //       topMenuEl.querySelectorAll('a').forEach(link => {
    //   link.classList.remove('active');
    // });
 
      if (activeLink === true) { // this isnt doing what i want it to
       console.log(topMenuEl.classList.remove("active"), 'mango');
      } else {
      console.log(clickedLink.classList.toggle("active"), 'pear');
      }

    if (clickedLink.classList.contains("has-submenu")) {
      if (activeLink) {
        subMenuEl.style.top = "0";
      } else {
        subMenuEl.style.top = "100%";
      }
    } 
  }

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

  for (link of menuLinks) {
    const a = document.createElement("a"); //Create an <a> element.
    a.setAttribute("href", link.href); //On the new element, add an href attribute with its value set to the href property of the "link" object.
    a.textContent = link.text; //Set the new element's content to the value of the text property of the "link" object.
    topMenuEl.append(a); //Append the new element to the topMenuEl element.
    if (link.subLinks) {
      a.classList.add("has-submenu"); // Mark links with submenus
    }
  }
});
