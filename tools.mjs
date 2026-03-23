export const sum = (a, b) => a+b;
const log = (output) => console.log(output);
export const areaOfCircle = (r)=> (3.142 * (r*r));
export const courseTopic = "ES 6 Review"
export const courseCode = "PAU-ISM-210"

export class Person {
    constructor(firstName, lastName, height, weight) {
        this.firstName = firstName;
        this.lastName = lastName;
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

export default log
