let strings = ["Anna", "James", "Javier", "Natalia", "Nike"];

function groupStrings(value){
    let keys = [];
    let appearce = [0,0,0];
    let i = 0;
    let finalValues = [];
    let finalKeys = [];
    value.map(function (elem){
        keys[i] = elem.charAt(0).toLowerCase();
        i++;
    });

    const noDuplicateKey = new Set(keys);
    noDuplicateKey.forEach((elem) => {
        finalKeys.push(elem)
    });

    finalKeys.forEach((elem, index) => {
        let aux = [];
        let indexAux = 0;
        for (let j = 0; j < keys.length; j++){
            if(elem == keys[j]){
                aux = aux.concat(strings[j]);
            }
        }
        finalValues.push(aux);
    });
    
    function convertToObj(a, b){
        if(a.length != b.length || a.length == 0 || b.length == 0){
            return null;
        }
        return Object.assign(...a.map((k,i) => ({[k]: b[i]}) ))
    }
    return convertToObj(finalKeys, finalValues);
}
console.log(groupStrings(strings));