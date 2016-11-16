"use strict";

let output = document.getElementById("container");
let inputText = document.getElementById("input");

function getPeople(){

for (let i = 0; i < famousPeople.length; i++ ) {
		
		let myPerson = famousPeople[i];
		let cards =`<div class="allCards">
								<header>${myPerson.name}</header>
								<section class="margin"><img src=${myPerson.image}><p>${myPerson.bio}</p></section>
								<footer><${myPerson.lifespan.birth} - ${myPerson.lifespan.death}></footer>
								</div>`;
		output.innerHTML += cards;
	

	}
	
	addBackground();
}

getPeople();

function addBackground() {
	let allTheCards = document.getElementsByClassName("allCards");
	for (let i = 0; i < allTheCards.length; i++ ){

	    let currentCard = allTheCards[i];

			if(i%2 === 0) {
				allTheCards[i].classList.add("blue");
			}else {
				allTheCards[i].classList.add("yellow");
			}
		
	    currentCard.addEventListener("click",selectACard);
	}
}


function selectACard(event){
	let currentCard = event.currentTarget;
	inputText.focus();
	currentCard.classList.add("dotted");
	
	inputText.addEventListener("keyup", function(){
		currentCard.querySelector("p").innerHTML = inputText.value;
	
	});
}
		
	inputText.addEventListener("keypress", function(event){
		if (event.keyCode === 13) {
		inputText.value = " ";
		}
	});



