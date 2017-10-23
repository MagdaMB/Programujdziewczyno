

'use strict';
	/*zadanie 1*/
    document.addEventListener('DOMContentLoaded', function() {
      var forDropdown = document.querySelector(".for-dropdown");
      var dropdownMenu = document.querySelector(".dropdown");

      console.log(forDropdown, dropdownMenu);
      console.log(dropdownMenu.style);

      forDropdown.addEventListener('mouseover', function() {
      	dropdownMenu.style.display = 'block'; /* 6*/

      });

      forDropdown.addEventListener('mouseout', function() {
      	dropdownMenu.style.display = 'none';
      });

/*zadanie 2*/
      var buttons = document.querySelectorAll(".read-more");
      console.log(buttons);
      console.log(buttons[0].previousElementSibling);

      
      	function showHide() {
      		var textArea = this.previousElementSibling;

      	if (textArea.style.display === 'none' || textArea.style.display === '') {

      		textArea.style.display = 'block';
      		this.innerHTML = 'MNIEJ <span class="glyphicon glyphicon-chevron-down"></span>';

      	} else {

      		textArea.style.display = 'none';
      		this.innerHTML = 'WIĘCEJ <span class="glyphicon glyphicon-chevron-down"></span>';
      	}
      	}

      	for (var i = 0; i <= buttons.length -1; i++) {
      		buttons[i].addEventListener('click', showHide);
		}

/*zadanie 3*/

		var navbar = document.querySelector(".navbar");
		console.log(navbar);

		window.addEventListener('scroll', function() {
			navbar.style.borderBottom = '1px solid #7f7f7f';
		}) 	 


/*zadanie 4*/

		var buttonComeBack = document.querySelector(".come-back");
		console.log(buttonComeBack);

		buttonComeBack.addEventListener('click', function() {
			window.scroll(0,0);
		})


/*zadanie 5*/

		var items = document.querySelectorAll(".org");
		var dots = document.querySelectorAll(".dot");

		console.log(items);
		console.log(dots);

		dots[0].addEventListener('click', function() {
			for(var i=0; i<=dots.length-1; i++) {
				dots[i].classList.remove('active');
				items[i].classList.remove('visible');
			}

			this.classList.add('active');
			items[0].classList.add('visible');

			this.classList.add('active');
			items[1].classList.add('visible');

			this.classList.add('active');
			items[2].classList.add('visible');
		})
    });












      // tutaj będziemy umieszczać kod ze wszystkich zadań
    
