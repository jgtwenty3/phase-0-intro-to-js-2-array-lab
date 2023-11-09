var cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name){
    cats.push("Ralph"); 
    return cats;
}

function destructivelyPrependCat(name){
    cats.unshift("Bob"); 
    return cats;
}

function destructivelyRemoveLastCat(name){
    cats.pop();
    return cats;
}
function destructivelyRemoveFirstCat(name){
    cats.shift();
    return cats;
}
function appendCat(name){
const allCats = [...cats, "Broom"];
return allCats;
}
function prependCat(name){
    const preCats = ["Arnold",...cats];
    return preCats;
}
function removeLastCat(name){
    const remCats =[...cats];
    remCats.pop();
    return remCats;
}
function removeFirstCat(name){
    const firstCat = [...cats];
    firstCat.shift();
    return firstCat;
}
