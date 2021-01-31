function Car({ brand, model, price }) {
  this.brand = brand;
  this.model = model;
  this.price = price;
}

 Car.prototype.getPrice= function(){
  return this.price;
 };

 Car.prototype.changePrice= function(newPrice){
  return this.price= newPrice;
 };
console.log(new Car({ brand: 'Audi', model: 'Q3', price: 36000 }).getPrice())
 console.log(new Car({ brand: 'Audi', model: 'Q3', price: 36000 }).changePrice(35000) )
 