const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name) {
    return cats.push("Ralph")
}

function destructivelyPrependCat(name) {
    return cats.unshift("Bob")
}

function destructivelyRemoveLastCat(name) {
    return cats.pop("Garfield")
}

function destructivelyRemoveFirstCat(name) {
    return cats.shift("Milo")
}