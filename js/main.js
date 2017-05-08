                                                                var init = (function(){
//caching the dom
var newsletter = document.getElementsByClassName('newsletter');
var newsPop = document.getElementById('newsletter-pop');
var gallery = document.getElementsByClassName('gallery')[0];
var imager = gallery.querySelectorAll('img');
var closer = document.getElementsByClassName('closer')[0];
var closing = document.getElementsByClassName('closing')[0];
var lightboxer = document.getElementById('lightbox');
for(i=0; i < newsletter.length; i++) {
newsletter[i].onclick = callMe;	
}
closer.onclick = callMe;
closing.onclick = callCe;
$(document).on('click','.gallery img',lightbox);


function callMe() {
 newsPop.className = newsPop.className ? '' : 'fade';             
}

function callCe() {
 lightboxer.className = lightboxer.className ? '' : 'fade';

}


function lightbox () {
 lightboxer.className = lightboxer.className ? '' : 'fade';
 var src = this.src;
 var imag = lightboxer.children[2];
imag.src = src; 
}

$.get('login/json.php',function(rata) {
var datar = JSON.parse(rata);
$.each(datar,function(i,mata) {
$('.gallery ul').append('<li>'+'<div class="descer">'+'<p>'+mata.descer+'</p>'+'</div>'+'<img src="login/'+mata.image+'">'+'</li>')
});
});



})();
                            
                            