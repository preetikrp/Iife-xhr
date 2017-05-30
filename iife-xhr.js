let display = document.getElementById("output");
let display2 = document.getElementById("output2");

function showCarnivores(carnivores) {

    for (i = 0; i < carnivores.length; i++) {
        display.innerHTML += carnivores[i] + ", ";
    }
}

function showHerbivores(herbivores) {
    for (i = 0; i < herbivores.length; i++) {
        display2.innerHTML += herbivores[i] + " ,";
    }

}

Predator.loadCarnivores(showCarnivores);
Predator.loadHerbivores(showHerbivores);
