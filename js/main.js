// Smooth Scrolling
$('#navbar a, .btn').click(function(event){
    if(this.hash != ''){
        event.preventDefault();
        const hash = this.hash;
        $('html, body').animate(
            {
                scrollTop: $(hash).offset().top -100
            },
            800
        );
    }
});

// Sticky Menu Background

window.addEventListener('scroll', function(){
    if(window.scrollY > 150){
        this.document.querySelector('#nav-bar').style.opacity = 0.8;
    }else {
        this.document.querySelector('#nav-bar').style.opacity = 1;
    }
});

// Google Maps 
var map;
function initMap() {
    const loc = { lat: 17.432050, lng: 78.372660 };
    map = new google.maps.Map(document.querySelector('.map'), {
        center: loc,
        zoom: 8
    });
    const marker = new google.maps.Marker({position: loc, map: map});
}

