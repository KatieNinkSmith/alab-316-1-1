// Menu data structure
var menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '#', subLinks: [
    {text: 'all', href: '/catalog/all'},
    {text: 'top selling', href: '/catalog/top'},
    {text: 'search', href: '/catalog/search'},
  ]},
  {text: 'orders', href: '#' , subLinks: [
    {text: 'new', href: '/orders/new'},
    {text: 'pending', href: '/orders/pending'},
    {text: 'history', href: '/orders/history'},
  ]},
  {text: 'account', href: '#', subLinks: [
    {text: 'profile', href: '/account/profile'},
    {text: 'sign out', href: '/account/signout'},
  ]},
];
const mainEl = document.querySelector("main");
const topMenuEl = document.getElementById("top-menu");
console.log(topMenuEl);
// 361.1 *****part 1
const subMenuEl = document.getElementById("sub-menu")
// // 361.3 *****part 4
const topMenuLinks = topMenuEl.getElementsByTagName('a');
// topMenuEl.querySelector('a')
// topMenuEl.querySelectorAll('a')
// document.links;
// document.querySelectorAll('#top-menu a');
console.log(topMenuLinks);

// 361.1 *****part 1
mainEl.style.backgroundColor = "var(--main-bg)";
mainEl.innerHTML = "<h1>DOM Manipulation</h1>"
mainEl.classList.add("flex-ctr");


// 316.1 *****part 2
topMenuEl.style.height = "100%";
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
topMenuEl.classList.add("flex-around");
// 361.3 *****part 4
topMenuEl.addEventListener("click", clickedOn)
// if (topMenuLinks.classList.contains(avtive)){
//   menuLinks.classList.remove('active');
//   };
// for (const link of document.links){
//   console.log(link);
// }
document.addEventListener('DOMContentLoaded', () => {
  for(i=0; i<topMenuLinks.length; i++){
    const clicked = topMenuLinks[i];
      // console.log(topMenuLinks[i]);
    clicked.addEventListener('click', function(){
      menuLinks = topMenuLinks;
      for (i=0; i<topMenuLinks.length; i++){
        menuLinks[i].classList.remove('active');
      }
      this.classList.toggle('active');
  })
}
});

// console.log(topMenuLinks.class);
function clickedOn(evt){

  // console.log(evt.target.textContent);
  if (evt.target.localName !== 'a'){
    evt.preventDefault()
    return
  }
  if (evt.target.localName === evt.target.localName){
  // console.log(evt.target.textContent);
  }
}
// function myFunction(e) {
//   var elems = document.querySelector(".active");
//   if(elems !==null){
//    elems.classList.remove("active");
//   }
//  e.target.className = "active";
// }
// console.log(topMenuLinks.target);
for (link of menuLinks) {
  const a = document.createElement("a") //Create an <a> element.
  a.setAttribute("href", link.href) //On the new element, add an href attribute with its value set to the href property of the "link" object.
  a.textContent = link.text //Set the new element's content to the value of the text property of the "link" object.
  topMenuEl.append(a) //Append the new element to the topMenuEl element.
}

// 316.3 ***** part 3
subMenuEl.style.height = "100%";
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";
subMenuEl.classList.add("flex-around");
subMenuEl.style.position = "absolute";
subMenuEl.style.top = "0";
