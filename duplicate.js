const names = ['abul','babul', 'cabul','dabul', 'abul', 'ebul', 'babul', 'fibul','jabul'];


function removeDuplicate(names) {
    const unique = [];
    for (let i = i < names.length; i++) {
        const name = name[i];
        if (unique.includes(name) === false) {
            unique.push(name);
        }

    }  
    return unique;     
  
}
  
const uniqueNames = removeDuplicate(names);
console.log(uniqueNames);