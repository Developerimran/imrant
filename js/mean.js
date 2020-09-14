$(document).ready(function(){

  $(window).scroll(function(){
    if($(window).scrollTop()>200){
      $(".menu ul li a").css("color","#000");
        $('.fixed-menu').addClass("sticky");
    }
   else{
    $('.fixed-menu').removeClass("sticky");  
    $(".menu ul li a").css("color","#fff");
   }
});
    $('.container').animatedHeadline({
        animationType: "clip",
        animationDelay: 2500,
        barAnimationDelay: 500,
        barWaiting: 800,
        lettersDelay: 50,
        typeLettersDelay: 150,
        selectionDuration: 500,
        typeAnimationDelay: 1300,
        revealDuration: 1000,
        revealAnimationDelay: 1500
      });
      
   $('.menu-icon span').click(function(){
     $('.menu').toggle(500);
   });
    // +++++++++++++owl- carousel
    $('#testimonails-slider').owlCarousel({
       
      loop: true,
      autoplay: true,
      smartSpeed: 3000,
      slideBy:2,
      autoplayTimeout:5000,
      nav:false,
      items:1,
      dots:true,
      autoplayHoverPause:true,

  });
    $('#blog-slider').owlCarousel({
       
      loop: true,
      autoplay: true,
      smartSpeed: 2000,
      slideBy:2,
      autoplayTimeout:10000,
      nav:false,
      items:3,
      dots:true,
      autoplayHoverPause:true,
      responsive:{
        1920: {
            items:3
        },
        1200: {
            items:3
        },
        1024: {
            items:2
        },
        768: {
            items:2
        },
       520: {
            items:1
        },
       320: {
            items:1
        },
    0: {
            items:1
        },
    
    },
     

  });



// Progress bars
$('#jq-s').LineProgressbar({
  percentage:95,
  duration: 1000,

  fillBackgroundColor: '#fff',
  backgroundColor: 'rgba(238,238,238,.2)',
  radius: '0px',
  height: '.6rem',
  width: '100%'
});
$('#css').LineProgressbar({
  percentage:80,
  duration: 1200,

  fillBackgroundColor: '#fff',
  backgroundColor: 'rgba(238,238,238,.2)',
  radius: '0px',
  height: '.6rem',
  width: '100%'
});
$('#Photography').LineProgressbar({
  percentage:90,
  duration: 1200,

  fillBackgroundColor: '#fff',
  backgroundColor: 'rgba(238,238,238,.2)',
  radius: '0px',
  height: '.6rem',
  width: '100%'
});
$('#Video').LineProgressbar({
  percentage:80,
  duration: 1200,

  fillBackgroundColor: '#fff',
  backgroundColor: 'rgba(238,238,238,.2)',
  radius: '0px',
  height: '.6rem',
  width: '100%'
});
$('#Marketing').LineProgressbar({
  percentage:85,
  duration: 1200,

  fillBackgroundColor: '#fff',
  backgroundColor: 'rgba(238,238,238,.2)',
  radius: '0px',
  height: '.6rem',
  width: '100%'
});

// Isotop
$('.filter-button-group').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});

var $grid = $('.grid').isotope({
  itemSelector: '.grid-item',
  percentPosition: true,
  masonry: {
    // use outer width of grid-sizer for columnWidth
    columnWidth: '.grid-item'
  }
})


// Canvas
window.onload = function(){
	//canvas init
	var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext("2d");
	
	//canvas dimensions
	var W = window.innerWidth;
	var H = window.innerHeight;
	canvas.width = W;
	canvas.height = H;
	
	//snowflake particles
	var mp = 25; //max particles
	var particles = [];
	for(var i = 0; i < mp; i++)
	{
		particles.push({
			x: Math.random()*W, //x-coordinate
			y: Math.random()*H, //y-coordinate
			r: Math.random()*4+1, //radius
			d: Math.random()*mp, //density
            color: "rgba(" + Math.floor((Math.random() * 255)) +", " + Math.floor((Math.random() * 255)) +", " + Math.floor((Math.random() * 255)) + ", 1)"
		})
	}
	
	//Lets draw the flakes
	function draw()
	{
		ctx.clearRect(0, 0, W, H);
		
		
		
		for(var i = 0; i < mp; i++)
		{ 
			var p = particles[i];
            ctx.beginPath();
            ctx.fillStyle = p.color;
			ctx.moveTo(p.x, p.y);
			ctx.arc(p.x, p.y, p.r, 0, Math.PI*2, true);
            ctx.fill();
		}
		
		update();
	}
	
	//Function to move the snowflakes
	//angle will be an ongoing incremental flag. Sin and Cos functions will be applied to it to create vertical and horizontal movements of the flakes
	var angle = 0;
	function update()
	{
		angle += 0.01;
		for(var i = 0; i < mp; i++)
		{
			var p = particles[i];
			//Updating X and Y coordinates
			//We will add 1 to the cos function to prevent negative values which will lead flakes to move upwards
			//Every particle has its own density which can be used to make the downward movement different for each flake
			//Lets make it more random by adding in the radius
			p.y += Math.cos(angle+p.d) + 1 + p.r/2;
			p.x += Math.sin(angle) * 2;
			
			//Sending flakes back from the top when it exits
			//Lets make it a bit more organic and let flakes enter from the left and right also.
			if(p.x > W+5 || p.x < -5 || p.y > H)
			{
				if(i%3 > 0) //66.67% of the flakes
				{
                    particles[i] = {x: Math.random()*W, y: -10, r: p.r, d: p.d, color : p.color};
				}
				else
				{
					//If the flake is exitting from the right
					if(Math.sin(angle) > 0)
					{
						//Enter from the left
                        particles[i] = {x: -5, y: Math.random()*H, r: p.r, d: p.d, color: p.color};
					}
					else
					{
						//Enter from the right
                        particles[i] = {x: W+5, y: Math.random()*H, r: p.r, d: p.d, color : p.color};
					}
				}
			}
		}
	}
	
	//animation loop
	setInterval(draw, 10);
  
}
function shake(){
  	setInterval(draw, 100);

};




/* ---- particles.js config ---- */

particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 250,
      "density": {
        "enable": true,
        "value_area": 1800
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 6,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 1600,
        "rotateY": 1800
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 140,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});


/* ---- stats.js config ---- */

var count_particles, stats, update;
stats = new Stats;
stats.setMode(0);
stats.domElement.style.position = 'absolute';
stats.domElement.style.left = '0px';
stats.domElement.style.top = '0px';
document.body.appendChild(stats.domElement);
count_particles = document.querySelector('.js-count-particles');
update = function() {
  stats.begin();
  stats.end();
  if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
    count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
  }
  requestAnimationFrame(update);
};
requestAnimationFrame(update);


smartScroll.init({
  speed: 700, 
  addActive: true,
  activeClass: "active", 
  offset: 150
}, function () {
  console.log("callback");
});
});


  
