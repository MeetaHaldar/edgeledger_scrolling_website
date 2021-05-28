
      // Initialize and add the map
      function initMap() {
        // Your location
        const loc = { lat:28.702220, lng: 77.166130 };
        //centerd map on location
        const map = new google.maps.Map(document.querySelector('.map'), 
        {
          zoom: 6,
          center: loc,
        });
        // The marker, positioned at location
        const marker = new google.maps.Marker({
          position:loc,
          map: map
        });
      }


// sticky menu background
const navbar = document.querySelector('.navbar');
window.onscroll = () => {
    if (window.scrollY < 302) {
        navbar.classList.add('nav-inactive');
        navbar.classList.remove('nav-active');
    } else {
        navbar.classList.remove('nav-inactive');
        navbar.classList.add('nav-active');
    }

};






    // smooth scrolling

//     $('#navbar a, .btn').on('click',function(event){
// if(this.hash !=='')
// {
//     event.preventDefaullt();

//     const hash =this.hash;

//     $('html , body').animate(
// {
//     scrollTop:$(hash).offset().top + 100
// },
// 800

//    );
// }
//  });
    