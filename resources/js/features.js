const simple_book = document.querySelector(".simple_bookmark_container");
const speedy_search = document.querySelector(".speedy_searching_container");
const easy_share = document.querySelector(".easy_sharing_container");

const heading = document.querySelector(".feature_sub_heading");
const paragraph = document.querySelector(".feature_p");
// const btnText = document.querySelector(".feature_btn");

simple_book.addEventListener("click", () => {
  simple_book.classList.add("features_tab_hover");
  speedy_search.classList.remove("features_tab_hover");
  easy_share.classList.remove("features_tab_hover");
  heading.innerText = "Bookmark in one click";
  paragraph.innerText =
    "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.";
});

speedy_search.addEventListener("click", () => {
  speedy_search.classList.add("features_tab_hover");
  simple_book.classList.remove("features_tab_hover");
  easy_share.classList.remove("features_tab_hover");
  heading.innerText = "Intelligent search";
  paragraph.innerText =
    "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.";
});

easy_share.addEventListener("click", () => {
  easy_share.classList.add("features_tab_hover");
  simple_book.classList.remove("features_tab_hover");
  speedy_search.classList.remove("features_tab_hover");
  heading.innerText = "Share your bookmarks";
  paragraph.innerText =
    "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.";
});
