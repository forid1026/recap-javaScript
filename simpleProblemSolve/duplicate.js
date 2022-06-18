const names = ['farid', 'nilima', 'onika', 'fima', 'onika', 'udhas', 'mahbub', 'nilima', 'farid'];

function removeElement() {
    let unique = [];
    for (let i = 0; i < names.length; i++) {
        const element = names[i];
        if (unique.indexOf(element) == -1) {
            unique.push(element);
        }
    }
    return unique;;
}

const removeElements = removeElement(names);
console.log(removeElements);