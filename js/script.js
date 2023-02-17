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
			lengthOutput.setAttribute('data-text', (lengthInput.value).length == 2 ? (lengthInput.value[0] * foot).toFixed(1)+ postfix : ((lengthInput.value).slice(0,2) * foot).toFixed(1)+ postfix) 
		}
		//Если футов меньше 10
		 else if (lengthInput.value[1] === "'") {
		lengthOutput.setAttribute('data-text', ((lengthInput.value).length === 3 ? (lengthInput.value[0]* foot) + (lengthInput.value[2] * inch ) : (lengthInput.value[0]* foot) + ((lengthInput.value).slice(2,4) * inch)) + postfix);
		} 
		//Если футов больше 10
		else if (lengthInput.value[2] === "'") {
			lengthOutput.setAttribute('data-text', ((lengthInput.value).length === 3 ? ((lengthInput.value).slice(0,2)* foot) + (lengthInput.value[3] * inch ) + postfix : ((lengthInput.value).slice(0,2)* foot) + ((lengthInput.value).slice(3,5) * inch)).toFixed(1) + postfix);
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
		if ((heightInput.value).length === 0) {
			heightOutput.classList.add('hidden'); 
		} else if (heightInput.value.endsWith('"') && !heightInput.value.endsWith('""')) {
			heightOutput.setAttribute('data-text', (heightInput.value.slice(0,-1) * inch).toFixed(2) + postfix) 
		} else if (!isNaN(heightInput.value)) {
			heightOutput.setAttribute('data-text', toFeet(heightInput.value)) 
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
		weightOutput.setAttribute('data', (weightInput.value.slice(0,-1) * kgTLbs).toFixed(2) + postfixKg)
	} else if (!isNaN(weightInput.value)) {
		weightOutput.setAttribute('data', (weightInput.value * lbsTKg).toFixed(2) + postfixLbs)
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

	if (widthInput.value.endsWith("'")) {
		widthOutput.setAttribute('data-text', (widthInput.value).length == 2 ? (widthInput.value[0] * foot).toFixed(1)+ postfix : ((widthInput.value).slice(0,2) * foot).toFixed(1)+ postfix) 
	}
	//Если футов меньше 10
	 else if (widthInput.value[1] === "'") {
	widthOutput.setAttribute('data-text', ((widthInput.value).length === 3 ? (widthInput.value[0]* foot) + (widthInput.value[2] * inch ) : (widthInput.value[0]* foot) + ((widthInput.value).slice(2,4) * inch)) + postfix);
	} 
	//Если значение в дюймах
	if (widthInput.value.endsWith('"')) {
		widthOutput.setAttribute('data-text', widthInput.value.slice(0,-1) * inch + postfix) ;
		} 
	//Значение является числом
	else if (!isNaN(widthInput.value)) {
		widthOutput.setAttribute('data-text', toFeet(widthInput.value)) 
	}
	widthOutput.classList.remove('hidden')
	widthOutput.innerHTML = widthOutput.getAttribute('data-text')

  if ((widthInput.value).length === 0) {
	widthOutput.classList.add('hidden')
  }
}
)