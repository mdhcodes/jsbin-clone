/* Display ToolBar File Menu */

var fileLink = document.getElementById("file");
var fileMenu = document.getElementById("file-menu");
var visible = false;

fileLink.onclick = function() {
    
    if(visible) {
        fileMenu.style.display="none";
        visible = false;
    } else {
        fileMenu.style.display="block";
        visible = true;
    }    

    fileMenu.onclick = function() {
       
        fileMenu.style.display = "none";
        visible = false;               
    };
    
};



/* Display ToolBar Share Menu */

var shareLink = document.getElementById("share");
var shareImage = document.getElementById("share-img");
var visible = false;

shareLink.onclick = function() {
    
    if(visible) {
        shareImage.style.display="none";
        visible = false;
    } else {
        shareImage.style.display="block";
        visible = true;
    }    

    shareImage.onclick = function() {
       
        shareImage.style.display = "none";
        visible = false;               
    };
    
};



/* Display Login Menu */

var loginLink = document.getElementById("login");
var loginImage = document.getElementById("login-img");
var visible = false;

loginLink.onclick = function() {
    
    if(visible) {
        loginImage.style.display="none";
        visible = false;
    } else {
        loginImage.style.display="block";
        visible = true;
    }    

    loginImage.onclick = function() {
       
        loginImage.style.display = "none";
        visible = false;               
    };
    
};



/* Display HTML Menu */

var htmlLink = document.getElementById("html-link");
var htmlImage = document.getElementById("html-img");
var visible = false;

htmlLink.onclick = function() {
    
    if(visible) {
        htmlImage.style.display="none";
        visible = false;
    } else {
        htmlImage.style.display="block";
        visible = true;
    }    

    htmlImage.onclick = function() {
       
        loginImage.style.display = "none";
        visible = false;               
    };
    
};




/* Display CSS Menu */

var cssLink = document.getElementById("css-link");
var cssImage = document.getElementById("css-img");
var visible = false;

cssLink.onclick = function() {
    
    if(visible) {
        cssImage.style.display="none";
        visible = false;
    } else {
        cssImage.style.display="block";
        visible = true;
    }    

    cssImage.onclick = function() {
       
        cssImage.style.display = "none";
        visible = false;               
    };
    
};



/* Display JavaScript Menu */

var javaScriptLink = document.getElementById("js-link");
var javaScriptImage = document.getElementById("js-img");
var visible = false;

javaScriptLink.onclick = function() {
    
    if(visible) {
        javaScriptImage.style.display="none";
        visible = false;
    } else {
        javaScriptImage.style.display="block";
        visible = true;
    }    

    javaScriptImage.onclick = function() {
       
        javaScriptImage.style.display = "none";
        visible = false;               
    };
    
};



