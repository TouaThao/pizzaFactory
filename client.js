class pizza {
    constructor( topping ='cheese', price , size = 'medium'  ){

        this.topping = topping;
        this.price = price; 
        this.size = size;

    }
    addTopping(pizza){
        this.price += 0.99;
        return this.topping = [this.topping, pizza]
    }
    changeSize(){
        if (this.size = 'small') {
            this.size = 'medium';
            this.price += 1;
        } else if ( this.size = 'medium'){
            this.size = 'large';
            this.price += 1;
        } 
       
    }
    downSize(){
        if (this.size = 'large') {
            this.size = 'medium';
            this.price -= 1
        } else if (this.size = 'medium') {
            this.size = 'small'
            this.price -=1
        }
    }
    
}

let myPizza = new pizza('meat',12,'medium')
