/* Display Menu */

var visible = false;

var displayMenu = function(action, target) {

    action.onclick = function() {

        if(visible) {
            target.style.display = "none";
            action.style.backgroundColor = "initial";
            visible = false;
        } else {
            target.style.display = "block";
            action.style.backgroundColor = "#fff";
            visible = true;
        }
    }

};



/* Click on Menu to Hide Menu */

var hideMenu = function(action, target, link) {

    action.onclick = function() {
        target.style.display = "none";
        link.style.backgroundColor = "initial";
        visible = false;
    }
};


/* Display / Hide ToolBar File Menu */

var fileLink = document.getElementById("file");
var fileMenu = document.getElementById("file-menu");

displayMenu(fileLink, fileMenu);
hideMenu(fileMenu, fileMenu, fileLink);


/* Display / Hide ToolBar Share Menu */

var shareLink = document.getElementById("share");
var shareMenu = document.getElementById("share-img");

displayMenu(shareLink, shareMenu);
hideMenu(shareMenu, shareMenu, shareLink);


/* Display / Hide Login Menu */

var loginLink = document.getElementById("login");
var loginMenu = document.getElementById("login-img");

displayMenu(loginLink, loginMenu);
hideMenu(loginMenu, loginMenu, loginLink);


/* Display / Hide HTML Menu */

var htmlLink = document.getElementById("html-link");
var htmlMenu = document.getElementById("html-img");

displayMenu(htmlLink, htmlMenu);
hideMenu(htmlMenu, htmlMenu, htmlLink);


/* Display / Hide CSS Menu */

var cssLink = document.getElementById("css-link");
var cssMenu = document.getElementById("css-img");

displayMenu(cssLink, cssMenu);
hideMenu(cssMenu, cssMenu, cssLink);


/* Display / Hide JavaScript Menu */

var jsLink = document.getElementById("js-link");
var jsMenu = document.getElementById("js-img");

displayMenu(jsLink, jsMenu);
hideMenu(jsMenu, jsMenu, jsLink);


/* Display / Hide Help Menu */

var helpLink = document.getElementById("help");
var helpMenu = document.getElementById("help-img");

displayMenu(helpLink, helpMenu);
hideMenu(helpMenu, helpMenu, helpLink);


/* Toggle CodeBlocks */


