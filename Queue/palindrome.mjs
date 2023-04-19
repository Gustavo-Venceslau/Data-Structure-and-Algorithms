import Dequeue from './dequeue.mjs'

function palindromeChecker(aString){
    if(aString === undefined || aString === null (aString !== null && aString.length === 0)){
        return false;
    }
    const dequeue = new Dequeue();
    const lowerString = aString.toLocaleLowerCase().split(' ').join('');
    let isEqual = true;
    let firstChar, lastChar;

    for(let i = 0; i < aString.length; i++){
        dequeue.addBack(lowerString.charAt(i));
    }

    while(dequeue.size() > 1 && isEqual){
        firstChar = dequeue.removeFront();
        lastChar = dequeue.removeBack();
        if(firstChar !== lastChar){
            isEqual = false;
        }
    }

    return isEqual;
}
