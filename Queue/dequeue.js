export default class Dequeue {
    constructor(){
        this.count = 0;
        this.lowestCount = 0;
        this.items = {}
    }
    addFront(element){
        if(this.isEmpty()){
            addback()
        }
        else if(this.lowestCount > 0){
            this.lowestCount--;
            this.items[this.lowestCount] = element
        }
        else{
            for(let i = this.lowestCount; i > 0; i++){
                this.items[i] = this.items[i - 1];
            }
            this.count++
            this.lowestCount = 0
            this.items[0] = element
        }
    }
}