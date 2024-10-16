import cowsay from "cowsay";
import dotenv from "dotenv";
dotenv.config();


const prenom = process.env.NAME;
const campus = process.env.CAMPUS;

console.log(
    cowsay.say({
    text: `I am ${prenom} from ${campus}`,
   
}));
