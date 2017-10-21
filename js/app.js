

'use strict';

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

      	 

      	
    });












      // tutaj będziemy umieszczać kod ze wszystkich zadań
    
