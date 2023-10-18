// function show_menu() {
//     var menu = document.getElementById("menu-mobile");
//     if(menu.style.display == "none") {
//         menu.style.display = "block";
//         var button = document.getElementById("show-menu-mobile");
//         button.style.fill = "rgba(255, 255, 255, 0.61)";
//         button.style.marginTop = "-4rem";
//         var cut = document.getElementById("menu-mobile-cut");
//         cut.style.display = "block";
//         var logo = document.getElementById("logo");
//         logo.style.marginTop = "-4rem";
//     }
//     else {
//         menu.style.display = "none";
//         var button = document.getElementById("show-menu-mobile");
//         button.style.fill = "white";
//         button.style.marginTop = "1rem";
//         var cut = document.getElementById("menu-mobile-cut");
//         cut.style.display = "none";
//         var logo = document.getElementById("logo");
//         logo.style.marginTop = "1rem";
//     }
// }

// function checkMenu() {
//     var menu = document.getElementById("menu-mobile");
//     var w = window.outerWidth;
//     var h = window.outerHeight;
//     var button = document.getElementById("show-menu-mobile");
//     button.style.marginTop = "1rem";
//     if (w > 768) {
//         menu.style.display = "none";
//         var logo = document.getElementById("logo");
//         logo.style.marginTop = "-0.1rem";
//     }
//     else {
//         var logo = document.getElementById("logo");
//         logo.style.marginTop = "0.8rem";
//     }
// }