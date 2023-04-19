// operation with Set(ECMASCRIPT 2015 SET CLASS)

const union = (set1, set2) => {
    const unionAb = new Set();
    set1.forEach(value => unionAb.add(value));
    set2.forEach(value => unionAb.add(value));
    return unionAb;
}

const intersection = (set1, set2) => {
    const intersectionSet = new Set();
    set1.forEach(value => {
        if(set2.has(value)){
            intersectionSet.add(value)
        }
    });
    return intersectionSet;
}

const difference = (set1, set2) => {
    const differenceSet = new Set();
    set1.forEach(value => {
        if(!set2.has(value)){
            differenceSet.add(value);
        }
    });
    return differenceSet;
}

const set = new Set();
set.add(1)
set.add(2)
set.add(3)
const sett = new Set()
sett.add(4)
sett.add(1)
sett.add(6)

// conveter um set em um array e faz as interseção e o difference
console.log(new Set([...set].filter(x => !sett.has(x))));