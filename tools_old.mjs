export const sum = (a, b) => a + b;
const log = (output) => console.log(output);
export const appName ="ES Review"

export const dummyFunction = ()=>"I am dummy function"

export const anotherFunction = () => "I am another function";

export default log;

class Human {
    constructor(gender){
        log(`I am a human  whose gender is ${gender}`)
    }
    breath() {
        log("I am breathing")
    }
}
export class Person extends Human {
    constructor(firstName, lasttName, height, weight, gender) {
        super(gender);
        this.firstName = firstName;
        this.lasttName = lasttName;
        this.height = height;
        this.weight = weight;
    }
    toUpperCase(str) {
        return str.toUpperCase();
    }
    getFirstName() {
        return this.toUpperCase(this.firstName);
    }
}

export const makeCoffee =  (coffeeType, callBack) =>{
    console.log(`Making ${coffeeType} coffee...`);
    setTimeout(()=>{
        callBack(`My ${coffeeType} coffee is ready!`)
    },1000)
};