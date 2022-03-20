class Movie {
    constructor(title, studio, rating = "PG") {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }

    getPG(arr) {
        let result = []
        arr.filter(mov => {
            if (mov.rating == "PG") {
                result.push(mov)
            }
        })
        return result
    }
}
let mov = new Movie('Casino Royale', 'Eon Productions', 'PG')
let mov2 = new Movie("rekka", "as", "PG")
let movArr = [mov, mov2]
console.log(mov.getPG(movArr));

//Write a “person” class to hold all the details.

class Person {
    constructor(name, age, address, phone) {
        this.address = address;
        this.name = name;
        this.age = age;
        this.phone = phone;
    }
    getDetails() {
        console.log("Name " + this.name + " age " + this.age + " address " + this.address + " phone " + this.phone);
    }

}
let Arun = new Person("Arun kumar", "25", "3-chennai", "9845xxxxxxx");
console.log(Arun);
Arun.getDetails();
//write a class to calculate uber price.
class Uber {
    constructor(distance, price) {
        this.price = price;
        this.distance = distance;
    }
    calculate() {
        console.log("distance " + this.distance + " price " + this.price);
        return this.price * this.distance;
    }
}

const g = new Uber(120, 25);

console.log(g.calculate() + " rupees");