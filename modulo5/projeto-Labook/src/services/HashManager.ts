import { hashSync, compareSync, genSaltSync } from "bcryptjs";
import * as dotenv from "dotenv";

dotenv.config();
export class HashManager{
generateHash = (plaintext: string): string => {
    const rounds: number = Number(process.env.BCRYPT_COST)
    const salt: string = genSaltSync(rounds)
    return hashSync(plaintext, salt)
};
compareHash = (plainxtext: string, cypherText: string): boolean => compareSync(plainxtext, cypherText);
}