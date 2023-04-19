
export default class ValuePair{
    constructor(key, value){
        this.key = key;
        this.value = value;
    }
    toString(){
        return `[#${key}: ${value}]`;
    }
}