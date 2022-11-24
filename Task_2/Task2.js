class Item{
    #name;
    #price;

    constructor(name,price){
        this.#name = name;
        this.#price = price;
    }
    setName(_name){
        this.#name = _name;
    }
    setPrice(_Price){
        this.#price = _Price;
    }
    getName(){
        return this.#name;
    }
    getPrice(){
        return this.#price;
    }
}

class ShoppingCart{
    Item = [];
    addItem(_Item){
        this.Item.push(_Item);
    }
}



function TotalPrice(ShoppingCart){
    let Sum = 0;
    for(let i = 0;i < ShoppingCart.Item.length ; i++)
    {
        Sum += ShoppingCart.Item[i].getPrice();
    }
    return Sum;
}

function main(){
    const item1 = new Item("apple", 5);// apple is the name, 5 is the price
    const item2 = new Item("carrot", .45);
    const item3 = new Item("shirt", 55);
    
    const cart = new ShoppingCart();
    cart.addItem(item1);
    cart.addItem(item2);
    cart.addItem(item3);

    console.log("\n********************************\nItems In Cart : \n");
    for(let i = 0;i < cart.Item.length ; i++)
    {
        console.log("-> ",cart.Item[i].getName());
    }

    console.log("\nTotal Price Of Cart : ",TotalPrice(cart),"\n********************************\n");
}

main();