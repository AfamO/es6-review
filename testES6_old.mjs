import logger, {appName, dummyFunction} from "./tools.mjs"
import  {sum, anotherFunction} from "./tools.mjs"
import { Person, makeCoffee } from "./tools.mjs";

const courseTopic = "ES 6 Review"
const courseCode = "PAU-ISM-210";

console.log(`Hi Welcome to ${courseTopic}, you enrolled for ${courseCode}`)

let languages = ["Python","JavaScript", "Java", "C#", "C++"]
let [firstLang, secondLang,...others] = languages;

console.log(`First language is ${firstLang}, second language ${secondLang}, 
    other languages are: ${others}`)
  
    
    const log = (output) => console.log(output);
    logger("The result of the sum is:"+sum(3, 5))
    logger("Hi, welcome to "+appName+" and there is a dummy function that returns "+dummyFunction())

    let person1 = new Person("Afam","Okonkwo",1.7, 23,"male");
    let person2 = new Person("Agnes","Ikpati",1.2, 13,"female");

    person1.firstName = "Chima";
    person2.firstName = "Paula";
    person1.middleName = "Chidiogo"
    logger(`     Person1 is ${person1.getFirstName()}
        whose height is ${person1.height}, 
        middleName is ${person1.middleName}
        Person 2 is ${person2.getFirstName()}
        and his height is ${person2.height}
        his weight is ${person2.weight} `)
   
        person1.breath()
    makeCoffee("Cappucion", (message)=>{
        logger(message) // called when coffe is ready
    });
    logger("I can do other things while waiting for the coffe to be ready...")