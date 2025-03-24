// CONVERSION UNITS
// 1 meter = 3.281 feet
// 1 liter = 0.264 gallon
// 1 kilogram = 2.204 pound
const btnConvert = document.getElementById("btn-convert")
const inputEl = document.getElementById("input-el")
const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")

const meterToFeet = 3.281
const literToGallon = 0.264
const kiloToPound = 2.204

btnConvert.addEventListener("click", function(){
    let myUnits = Number(inputEl.value)
    lengthEl.textContent = `${myUnits} meters = ${(myUnits * meterToFeet).toFixed(3)} feet | 
    ${myUnits} feet = ${(myUnits / meterToFeet).toFixed(3)} meters`

    volumeEl.textContent = `${myUnits} liters = ${(myUnits * literToGallon).toFixed(3)} gallons | 
    ${myUnits} gallons = ${(myUnits / literToGallon).toFixed(3)} liters`

    massEl.textContent = `${myUnits} kilos = ${(myUnits * kiloToPound).toFixed(3)} pounds | 
    ${myUnits} pounds = ${(myUnits / kiloToPound).toFixed(3)} kilos`
})