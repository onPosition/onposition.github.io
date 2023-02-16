// Поля ввода
const length_input = document.querySelector('#length');
const width_input = document.querySelector('#width');
const height_input = document.querySelector('#height');
const weight_input = document.querySelector('#weight');
// Текст с результатом рядом с полем
const length_output = document.querySelector('#converted_length');
const width_output = document.querySelector('#converted_width');
const height_output = document.querySelector('#converted_height');
const weight_output = document.querySelector('#converted_weight');
/// Переменные для вычислений
let length_converted;
let width_converted;
let height_converted;
let weight_converted;
const foot = 30.48;
const inch = 2.54;
const kgTLbs = 0.45359;
const lbsTKg = 2.20462;
const postfix = ' см';
const postfixInch = '"';
const postfixKg = ' кг';
const postfixLbs = ' lbs';
function toFeet(n) {
	var realFeet = ((n*0.393700) / 12);
	var feet = Math.floor(realFeet);
	var inches = Math.round(10*((realFeet - feet) * 12)) / 10;
	return feet + "' " + inches + '"'
 }
 

//----------------Конвертер длины----------------


	// if ((length_input.value).length === 0) {
	// 	null;
	// }

	length_input.addEventListener('input', () => {
		//Значение оканчивается на ' (целые футы)
		if (length_input.value.endsWith("'")) {

			length_output.setAttribute('data-text', (length_input.value).length == 2 ? (length_input.value[0] * foot).toFixed(1)+ postfix : ((length_input.value).slice(0,2) * foot).toFixed(1)+ postfix) 
			length_output.classList.remove('hidden')
			length_output.innerHTML = length_output.getAttribute('data-text')
		}
		//Если футов меньше 10
		 else if (length_input.value[1] === "'") {
		length_output.setAttribute('data-text', ((length_input.value).length === 3 ? (length_input.value[0]* foot) + (length_input.value[2] * inch ) : (length_input.value[0]* foot) + ((length_input.value).slice(2,4) * inch)) + postfix);
		length_output.classList.remove('hidden')
		length_output.innerHTML = length_output.getAttribute('data-text')
		} 
		//Если футов больше 10
		else if (length_input.value[2] === "'") {
			length_output.setAttribute('data-text', ((length_input.value).length === 3 ? ((length_input.value).slice(0,2)* foot) + (length_input.value[3] * inch ) + postfix : ((length_input.value).slice(0,2)* foot) + ((length_input.value).slice(3,5) * inch)).toFixed(1) + postfix);
			length_output.classList.remove('hidden')
			length_output.innerHTML = length_output.getAttribute('data-text')
			//см в футы
			}  else if (!isNaN(length_input.value)) {
				length_output.setAttribute('data-text', toFeet(length_input.value));
				length_output.classList.remove('hidden')
				length_output.innerHTML = length_output.getAttribute('data-text')
			} else null;

	  if ((length_input.value).length === 0) {
		length_output.classList.add('hidden')
	  }}
	)
//----------------Конвертер высоты----------------
	height_input.addEventListener('input', () => {
		if (height_input.value.endsWith('"') || height_input.value.endsWith("'")) {

			height_output.setAttribute('data-text', (height_input.value.slice(0,-1) * inch).toFixed(2) + postfix) 
			height_output.classList.remove('hidden')
			height_output.innerHTML = height_output.getAttribute('data-text')
		} else if (!isNaN(height_input.value)) {
			height_output.setAttribute('data-text', (height_input.value / inch).toFixed(2) + postfixInch) 
			height_output.classList.remove('hidden')
			height_output.innerHTML = height_output.getAttribute('data-text')
		} else
		null;

	  if ((height_input.value).length === 0) {
		height_output.classList.add('hidden')
	  }
	})
	
//----------------Конвертер массы----------------
weight_input.addEventListener('input', () => {
	if (weight_input.value.endsWith('"') || weight_input.value.endsWith("'")) {
		weight_output.setAttribute('data', (weight_input.value.slice(0,-1) * kgTLbs).toFixed(2) + postfixKg)
		weight_output.classList.remove('hidden');
		weight_output.innerHTML = weight_output.getAttribute('data')

	} else if (!isNaN(weight_input.value)) {
		weight_output.setAttribute('data', (weight_input.value * lbsTKg).toFixed(2) + postfixLbs)
		weight_output.classList.remove('hidden');
		weight_output.innerHTML = weight_output.getAttribute('data')
	} else 
	null;

	if ((weight_input.value).length === 0) {
		weight_output.classList.add('hidden')
	  }
})
//----------------Конвертер ширины----------------
width_input.addEventListener('input', () => {
	//Значение является числом
if (!isNaN(width_input.value)) {
	width_output.setAttribute('data-text', width_input.value * inch + postfix) 
	width_output.classList.remove('hidden')
	width_output.innerHTML = width_output.getAttribute('data-text')
}


	//Значение оканчивается на ' (целые футы)
	else if (width_input.value.endsWith("'")) {

		width_output.setAttribute('data-text', (width_input.value).length == 2 ? (width_input.value[0] * foot).toFixed(1) + postfix: ((width_input.value).slice(0,2) * foot).toFixed(1)+ postfix) 
		width_output.classList.remove('hidden')
		width_output.innerHTML = width_output.getAttribute('data-text')
	}
	//Если футов меньше 10
	 else if (width_input.value[1] === "'") {
	width_output.setAttribute('data-text', ((width_input.value).length === 3 ? (width_input.value[0]* foot) + (width_input.value[2] * inch )  : (width_input.value[0]* foot) + ((width_input.value).slice(2,4) * inch)).toFixed(1) + postfix);
	width_output.classList.remove('hidden')
	width_output.innerHTML = width_output.getAttribute('data-text')
	} 
	//Если футов больше 10
	else if (width_input.value[2] === "'") {
		width_output.setAttribute('data-text', ((width_input.value).length === 3 ? ((width_input.value).slice(0,2)* foot) + (width_input.value[3] * inch )  : ((width_input.value).slice(0,2)* foot) + ((width_input.value).slice(3,5) * inch)).toFixed(1) + postfix) ;
		width_output.classList.remove('hidden')
		width_output.innerHTML = width_output.getAttribute('data-text')
		} 

  if ((width_input.value).length === 0) {
	width_output.classList.add('hidden')
  }
}
)