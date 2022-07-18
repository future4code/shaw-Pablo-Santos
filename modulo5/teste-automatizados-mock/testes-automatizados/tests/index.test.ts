/* describe("Esse é o meu primeiro teste", ()=>{
    test("Esse teste vai verificar uma string", ()=>{
        const nome: string = "rodrigo"

        expect(nome).toBe("rodrigo")
    })
})
 */

import { validateCharacter } from "../src/validateCharacter"


describe("This test check to see if the name is empty", () => {
    test("Should return false for empty name", () => {
        const result = validateCharacter({
            name: "",
            life: 1500,
            strength: 300,
            defense: 500,
        });
        expect(result).toBe(false)

    });

    test("Should return false for life 0", () => {

        const result = validateCharacter({
            name: "",
            life: 0,
            strength: 300,
            defense: 500,
        });
        expect(result).toBe(false)

    });

    test("Should return false for strenght 0", () => {

        const result = validateCharacter({
            name: "Scorpion",
            life: 1500,
            strength: 0,
            defense: 500,
        })

        expect(result).toBe(false)
    });

    test("Should return false for defense 0", () => {
        const result = validateCharacter({
            name: "Scorpion",
            life: 1500,
            strength: 300,
            defense: 0
        })
        expect(result).toBe(false)
    });

    test("Should return false for life or stength or defense with negative value", () => {
        const result = validateCharacter({
            name: "Scorpion",
            life: -10,
            strength: -20,
            defense: -1
        })
        expect(result).toBe(false)

    });

    test("Should return true for all valid inputs", () => {
        const result = validateCharacter({
          name: "Scorpion",
          life: 1500,
          strength: 300,
          defense: 500,
        });
    
        expect(result).toBe(true);
      });

});
