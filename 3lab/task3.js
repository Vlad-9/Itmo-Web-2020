const object1 = {
	name: 'Boris',
	weight: 15

};

const object2 = {
	name: 'Boris',
	weight: 15
};

const object3 = {
	name: 'Rex',
	weight: 20,
};

// Реализуйте функцию isEquivalent
function isEquivalent(obj1, obj2){
    var obj1Props = Object.getOwnPropertyNames(obj1);
    var obj2Props = Object.getOwnPropertyNames(obj2);
    
    if (obj1Props.length != obj2Props.length) {
        return false;
    }
    
    for(let objProp in obj1){
        if(obj1[objProp] !== obj2[objProp]){
			
            return false;
        };
    }
    return true;
}

console.log(isEquivalent(object1, object2)); // true
console.log(isEquivalent(object1, object3)); // false