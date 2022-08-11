import { v4 } from "uuid"
export class IdGenerator {
    generateID = (): string => v4()
}