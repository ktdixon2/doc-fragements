// A new "virtual" document fragment to contain components
const fragment = document.createDocumentFragment()

// Create an emperor component element
const julius = document.createElement('div')
julius.textContent = "Julius Caesar"
fragment.appendChild(julius)

// Create an emperor component element
const augustus = document.createElement('div')
augustus.textContent = "Augustus Caesar"
fragment.appendChild(augustus)

// Create an emperor component element
const aurelius = document.createElement('div')
aurelius.textContent = "Marcus Aurelius"
fragment.appendChild(aurelius)

/*
    Now I can update my HTML document all at once, with all
    three emperor components rendered. Otherwise, I would
    have needed to add each one, individually - a much more
    "expensive" operation.
*/
document.querySelector("#emperorList").appendChild(fragment);

// const potus = function (){

// }

const bush = document.createElement('article')
bush.textContent = "George Bush"
fragment.appendChild(bush)

const clinton = document.createElement('article')
clinton.textContent = "Bill Clinton"
fragment.appendChild(clinton)
console.log(presList)


document.querySelector("#presList").appendChild(fragment);

//I understand the working process is repetative and that code should be dry, but I am working on cleaing it up with the commented out code.//

// const element  = document.getElementById('chatMessage');
// const fragment = document.createDocumentFragment('section');
// const messageHistoy = (messages);

// messageHistory.forEach(function(messageHistoy) {
//     var li = document.createElement('li');
//     li.textContent = browser;
//     fragment.appendChild(li);
// });

// document.querySelector(chatMessages).appendChild(fragment);
// element.appendChild(fragment);

const message1 = document.createElement ('section')
message1.textContent = "Are we doing fireworks this year?"
fragment.appendChild(message1)

const message2 = document.createElement ('section')
message2.textContent = "After last year's tree incident, should we?"
fragment.appendChild(message2)

const message3 = document.createElement ('section')
message3.textContent = "The fire fighters put it out in like a minute. Wasn't even a real fire."
fragment.appendChild(message3)

const message4 = document.createElement ('section')
message4.textContent = "We can set them off in the street."
fragment.appendChild(message4)

const message5 = document.createElement ('section')
message5.textContent = "Our neighbors' houses are flammable, too"
fragment.appendChild(message5)



document.querySelector("#chatMessage").appendChild(fragment);

