particlesJS ("particles-js", {
	"particles": {
		"number": {
			"value":20,
			"density": {
				"enable":true,"value_area":1000
			}
		},
		"color": {
			"value": "#ffffff"
		},
		"shape": {
			"type":"image",
			"image":{
				"src":"fish.png",
				"width":100,
				"height":100
			}
		},
		"opacity": {
			"value":0.1,
			"random":false,
			"anim": {
				"enable":true,
				"speed":1,
				"opacity_min":0.1,
				"sync":false
			}
		},
		"size":{
			"value":80,
			"random":false,
			"anim":{
				"enable":false,
				"speed":40,
				"size_min":0.1,
				"sync":false
			}
		},
		"line_linked":{
			"enable":false,
		},
		"move":{
			"enable":true,
			"speed":6,
			"direction":"left",
			"random":false,
			"straight":false,
			"out_mode":"out",
			"bounce":false,
			"attract":{
				"enable":true,
				"rotateX":1200,
				"rotateY":1200
			}
		}
	},
	"interactivity":{
		"detect_on":"window",
		"events":{
			"onhover":{
				"enable":true,
				"mode":"repulse"
			},
			"onclick":{
				"enable":false,
			},
			"resize":true
		},
		"modes":{
			"repulse":{
				"distance":200,
				"duration":0.4
			}
		}
	}
});

alert("Welcome to The Zebrafish & Cancer Site! \n\nClick on the logo to navigate the mobile version of our website.");

const toggleButton = document.getElementById('toggleButton');
const naviList = document.getElementById('naviList');

toggleButton.addEventListener('click', () => {
  naviList.classList.toggle('active');
})

function myFunction() {
  var x = document.getElementById("myDIV");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}























