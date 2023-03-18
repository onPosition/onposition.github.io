// Поля ввода
const lengthInput = document.querySelector('#length');
const widthInput = document.querySelector('#width');
const heightInput = document.querySelector('#height');
const weightInput = document.querySelector('#weight');
// Текст с результатом рядом с полем
const lengthOutput = document.querySelector('#converted_length');
const widthOutput = document.querySelector('#converted_width');
const heightOutput = document.querySelector('#converted_height');
const weightOutput = document.querySelector('#converted_weight');
const foot = 30.48;
const inch = 2.54;
const kgTLbs = 0.45359;
const lbsTKg = 2.20462;
const postfix = ' см';
const postfixInch = '"';
const postfixKg = ' кг';
const postfixLbs = ' lbs';
const toFeet = (n) => {
	var realFeet = ((n*0.393700) / 12);
	var feet = Math.floor(realFeet);
	var inches = Math.round(10*((realFeet - feet) * 12)) / 10;
	if (inches < 0.45) {
		return feet + "' ";
	} else if (inches >= 11.5) {
		return (feet + 1) + "' ";
	}
	
	else 
	return feet > 0 ? feet + "' " + inches.toFixed() + '"' : inches.toFixed() + '"';
 }
 

//----------------Конвертер длины----------------

	lengthInput.addEventListener('input', () => {
		//Значение оканчивается на ' (целые футы)
		if (lengthInput.value.endsWith("'")) {
			lengthOutput.setAttribute('data-text', (lengthInput.value).length == 2 ? (lengthInput.value[0] * foot).toFixed()+ postfix : ((lengthInput.value).slice(0,2) * foot).toFixed()+ postfix) 
		}
		//Если футов меньше 10
		 else if (lengthInput.value[1] === "'") {
		lengthOutput.setAttribute('data-text', ((lengthInput.value).length === 3 ? (lengthInput.value[0]* foot) + (lengthInput.value[2] * inch ) : (lengthInput.value[0]* foot) + ((lengthInput.value).slice(2,4) * inch)) + postfix);
		} 
		//Если футов больше 10
		else if (lengthInput.value[2] === "'") {
			lengthOutput.setAttribute('data-text', ((lengthInput.value).length === 3 ? ((lengthInput.value).slice(0,2)* foot) + (lengthInput.value[3] * inch ) + postfix : ((lengthInput.value).slice(0,2)* foot) + ((lengthInput.value).slice(3,5) * inch)).toFixed() + postfix);
			//см в футы
			}  else if (!isNaN(lengthInput.value)) {
				lengthOutput.setAttribute('data-text', toFeet(lengthInput.value));
			} else null;
			lengthOutput.classList.remove('hidden')
			lengthOutput.innerHTML = lengthOutput.getAttribute('data-text')

	  if ((lengthInput.value).length === 0) {
		lengthOutput.classList.add('hidden')
	  }}
	)
//----------------Конвертер толщины----------------
	heightInput.addEventListener('input', () => {
		 if (heightInput.value.endsWith('"')) {
			heightOutput.setAttribute('data-text', (heightInput.value.slice(0,-1) * inch).toFixed() + postfix) 
		} else if (!isNaN(heightInput.value)) {
			heightOutput.setAttribute('data-text', (heightInput.value / inch).toFixed() + postfixInch) 
		} else null;
		heightOutput.classList.remove('hidden');
		heightOutput.innerHTML = heightOutput.getAttribute('data-text');
		if ((heightInput.value).length === 0) {
			heightOutput.classList.add('hidden');
		  }
	})


	
//----------------Конвертер массы----------------
weightInput.addEventListener('input', () => {
	if (weightInput.value.endsWith('"') || weightInput.value.endsWith("'")) {
		weightOutput.setAttribute('data', (weightInput.value.slice(0,-1) * kgTLbs).toFixed(1) + postfixKg)
	} else if (!isNaN(weightInput.value)) {
		weightOutput.setAttribute('data', (weightInput.value * lbsTKg).toFixed(1) + postfixLbs)
	} else 
	null;
	weightOutput.classList.remove('hidden');
	weightOutput.innerHTML = weightOutput.getAttribute('data')
	if ((weightInput.value).length === 0) {
		weightOutput.classList.add('hidden')
	  }
})
//----------------Конвертер ширины----------------
widthInput.addEventListener('input', () => {

	//Если значение в дюймах
	if (widthInput.value.endsWith('"')) {
		widthOutput.setAttribute('data-text', (widthInput.value.slice(0,-1) * inch).toFixed() + postfix) ;
		} 
	//Значение в см
	else if (!isNaN(widthInput.value)) {
		widthOutput.setAttribute('data-text', (widthInput.value / inch).toFixed() + postfixInch) 
	} else null;

	widthOutput.classList.remove('hidden')
	widthOutput.innerHTML = widthOutput.getAttribute('data-text')

  if ((widthInput.value).length === 0) {
	widthOutput.classList.add('hidden')
  }
}
)


// Get the modal
var help = document.querySelector(".help");

// Get the button that opens the modal
var btn = document.querySelector(".menu__help");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  help.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  help.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == help) {
    help.style.display = "none";
  }
}