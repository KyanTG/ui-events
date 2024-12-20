/*
   De eerste interactie is al voor jullie uitgewerkt
   Als je op het 12e linkje klikt (“Interaction”), springt deze omhoog
*/

// Stap 1: selecteer het 12e linkje, en sla deze op in een variabele
let interaction = document.querySelector('a:nth-of-type(12)')

// Stap 2: voeg de (click) event listener toe aan de link, met een callback functie
// In dit geval wordt de jumpHandler functie aangeroepen, zodra je op het linkje klikt
interaction.addEventListener('click', jumpHandler)

// Deze jumpHandler functie staat klaar voor als we 'm aanroepen; deze wordt dus
// _niet_ meteen bij het laden van de pagina aangeroepen
function jumpHandler() {

  // Stap 3: toggle een class op het element (zodra er dus op een link wordt geklikt)
  interaction.classList.toggle('jump')
}

// Extraatje, waardoor de class weer weggehaald wordt zodra de animatie afgelopen is
interaction.addEventListener('animationend', jumpHandler)


// Ga zelf verder met de overige elementen, aan de hand van de instructies
// Maak bijvoorbeeld een bibber animatie als je op iets klikt

// spinner 

let interactionspin = document.querySelector('a:nth-of-type(1)')

interactionspin.addEventListener('click', spinY)

function spinY() {

  console.log(interactionspin)

  interactionspin.classList.toggle('spin-effect') }

  interactionspin.addEventListener('animationend', spinY)


// size

let interactionsize = document.querySelector('a:nth-of-type(2)')

interactionsize.addEventListener('mouseover' , Size)

interactionsize.addEventListener('mouseleave' , Size)

function Size() {

  interactionsize.classList.toggle('size-effect') }

// bibber

let interactionbibber = document.querySelector('a:nth-of-type(3)')

interactionbibber.addEventListener('click' , Bibber)

function Bibber() {

  interactionbibber.classList.toggle('bibber-effect') }


// updown

let interactionupdown = document.querySelector('a:nth-of-type(4)')

interactionupdown.addEventListener('click' , UpDown)

function UpDown() {

  interactionupdown.classList.toggle('up-down') } 

  interactionupdown.addEventListener('animationend', UpDown)


// disco 

let interactiondisco = document.querySelector('a:nth-of-type(5)')

interactiondisco.addEventListener('mouseleave' , Disco) 

function Disco() {

  interactiondisco.classList.toggle('disco-effect')

  interactiondisco.addEventListener('animationend', Disco) }

// border-size

let interactionborder = document.querySelector('a:nth-of-type(6)')

interactionborder.addEventListener('click' , BorderSize) 

function BorderSize() {

  interactionborder.classList.toggle('border-size')

  interactionborder.addEventListener('animationend', BorderSize) }

// spinner and size

let interactionspinner = document.querySelector('a:nth-of-type(7)')

interactionspinner.addEventListener('click' , SizeSpinner) 

function SizeSpinner() {

  interactionspinner.classList.toggle('spinner-effect')

  interactionspinner.addEventListener('animationend', SizeSpinner) }

// crazy

let interactioncrazy = document.querySelector('a:nth-of-type(8)')

interactioncrazy.addEventListener('click' , CrazyCrazy) 

function CrazyCrazy() {

  interactioncrazy.classList.toggle('crazy-effect')

  interactioncrazy.addEventListener('animationend', CrazyCrazy) }

// blur

let interactionblur = document.querySelector('a:nth-of-type(9)')

interactionblur.addEventListener('keyup' , BlurBlur) 

function BlurBlur() {

  interactionblur.classList.toggle('blur-effect')

  interactionblur.addEventListener('animationend', BlurBlur) }

// background

let interactionbackground = document.querySelector('a:nth-of-type(10)')

interactionbackground.addEventListener('dblclick' , Background) 

function Background() {

  interactionbackground.classList.toggle('blur-effect')

  interactionbackground.addEventListener('animationend', Background) }

// colors

let interactioncolors = document.querySelector('a:nth-of-type(11)')

interactioncolors.addEventListener('click' , TwoColors) 

function TwoColors() {

  interactioncolors.classList.toggle('colors-effect')

  interactioncolors.addEventListener('animationend', TwoColors) }
