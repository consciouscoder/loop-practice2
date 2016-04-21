
// #1 ========================================

var animals = ['rat', 'cat', 'butterfly', 'marmot', 'ocelot']

for(var i=0; i <= animals.length - 1; i++) {
 console.log(animals[i]);
}

// #2 ========================================
console.log ('==============================')

var animals = ['rat', 'cat', 'butterfly', 'marmot', 'ocelot']

for(var i=0; i <= animals.length; i++) {
 console.log(animals[i]);
 i++;
}

// #3 ========================================
console.log ('==============================')

var animals = ['rat', 'cat', 'butterfly', 'marmot', 'ocelot']

for(var i=animals.length-1; i >= 0; i--) {
 console.log(animals[i]);
}

// #4 ========================================
console.log ('==============================')

var animals = ['rat', 'cat', 'butterfly', 'marmot', 'ocelot']

for(var i=0; i <= animals.length - 1; i++) {
 console.log(animals[i])
 if (i !== 0 && i !== animals.length - 1) {
   console.log(animals[i])
 }
}
