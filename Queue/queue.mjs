export default class Queue {
    constructor(){
        this.count = 0;
        this.lowestCount = 0;
        this.items = {}
    }
    enqueue(element){
        this.items[this.count] = element
        this.count++
    }
    dequeue(){
        if(this.isEmpty()){
            return undefined;
        }
        const result = this.items[this.lowestCount];
        delete this.items[this.lowestCount]
        this.lowestCount++
        return result
    }
    peek(){
        if(this.isEmpty()){
            return undefined;
        }
        return this.items[this.lowestCount];
    }
    size(){
        return this.count - this.lowestCount
    }
    isEmpty(){
        return this.size() === 0
    }
    clear(){
        this.count = 0;
        this.lowesCount = 0;
        this.items = {}
    }
    // faz com que toda a queue se torne uma string
    toString(){
        if(this.isEmpty()){
            return '';
        }
        let objString = `${this.items[this.lowesCount]}`;
        for(let i = this.lowesCount + 1; i < this.count; i++){
            objString = `${objString}, ${this.items[i]}`;
        }
        return objString;
    }
}