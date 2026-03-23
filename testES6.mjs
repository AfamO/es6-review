import logger, {sum, areaOfCircle} from "./tools.mjs"
import { courseCode, courseTopic } from "./tools.mjs";
import { Person } from "./tools.mjs";

const afam = new Person("Afam","Okonkwo",8,20);
const dami = new Person("Dami","Ade",6, 13);
afam.firstName = "Paul"
dami.firstName = "Janet"
logger(`Person 1 is ${afam.firstName}
    His weight is ${afam.weight}
    Person 2 is ${dami.firstName}
    whose height is ${dami.height}`)

logger(`Dami's uppercaseFirstName is ${dami.getFirstName()}`)

console.log (`Hi, welcome to ${courseTopic}, you enrolled for ${courseCode}`)

let languages = ["Python","JavaScript","Java","C#","C++"]
let [firstLang, secondLang, ...otherLang] = languages;
console.log(`My first lang is ${firstLang}, second Lang is ${secondLang}
    Others are : ${otherLang}`)

logger(`The result of my sum is: ${sum(2,5)}`)

logger(`My area of circle is ${areaOfCircle(3)}`)