
//import the libery of jquery
var script = document.createElement('script');
script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

//the script of download files
$(document).ready(function() {
    $('#fileDown').click(function(e){
        e.preventDefault();
        window.location.href = "files/cybersecurtiy.pdf";
    });
});
