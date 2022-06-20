export enum Usertype {
    ADMIN ="ADMIN",
    NORMAL ="NORMAL"
} 

export type Users ={
id:number,
name:string,
email:string,
type: Usertype,
age:number
} 

export let users:Users[] = [
    {
        id: 1,
        name: "Alice",
        email: "alice@email.com",
        type: Usertype.ADMIN,
        age: 12
    },
    {
        id: 2,
        name: "Bob",
        email: "bob@email.com",
        type: Usertype.NORMAL,
        age: 36
    },
    {
        id: 3,
        name: "Coragem",
        email: "coragem@email.com",
        type: Usertype.NORMAL,
        age: 21
    },
    {
        id: 4,
        name: "Dory",
        email: "dory@email.com",
        type: Usertype.NORMAL,
        age: 17
    },
    {
        id: 5,
        name: "Elsa",
        email: "elsa@email.com",
        type: Usertype.ADMIN,
        age: 17
    },
    {
        id: 6,
        name: "Fred",
        email: "fred@email.com",
        type:Usertype.ADMIN,
        age: 60
    }
]