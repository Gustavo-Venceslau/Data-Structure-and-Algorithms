import { defaultToString } from '../util.mjs';
import ValuePair from './valuePair.mjs';

export default class Dictionary {
    constructor(toStrFn = defaultToString) {
        this.toStrFn = toStrFn;
        this.table = {};
    }
    hasKey(key){
        return this.table[this.toStrFn(key)] != null;
    }
    set(key, value){
        if(key != null && value != null){
            const tableKey = this.toStrFn(key);
            this.table[tableKey] = new ValuePair(key, value);
            return true;
        }
        return false;
    }
    remove(key){
        if(this.hasKey(key)){
            delete this.table[this.toStrFn(key)];
            return true;
        }
        return false;
    }
    get(key){
        const valuePair = this.table[this.toStrFn(key)];
        return valuePair == null ? undefined : valuePair.value;
    }
    keyValues(){
        return Object.values(this.table);
    }
    keys(){
        return this.keyValues().map(valuePair => valuePair.key);
    }
    values(){
        return this.keyValues().map(valuePair => valuePair.value);
    }
    forEach(callbackFn){
        const valuesPair = this.keyValues();
        for(let i = 0; i < valuesPair.length; i++){
            const result = callbackFn(valuesPair[i].key, valuesPair[i].value);
            if(result === false){
                break;
            }
        }
    }
    size(){
        return Object.keys(this.table).length;
    }
    isEmpty(){
        return this.size() === 0;
    }
    clean(){
        this.table = {};
    }
    toString(){
        if(this.isEmpty()){
            return '';
        }
        const valuePairs = this.keyValues();
        let objectString = `${valuePairs[0].toString()}`;
        for(let i = 1; i < valuePairs.length; i++){
            objectString = `${objectString}, ${valuePairs[i].toSting()}`;
        }
        return objectString;
    }
}

const dictionary = new Dictionary(); 
dictionary.set('Gandalf', 'gandalf@email.com'); 
dictionary.set('John', 'johnsnow@email.com'); 
dictionary.set('Tyrion', 'tyrion@email.com'); 

console.log(dictionary.keyValues());