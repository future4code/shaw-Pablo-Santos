import { User } from "./User";
import {Customer} from "./Customer"
import { json } from "express";
import { join } from "path";
//1
//A Nãom é possivel pois nao foi criado um get para o password
// apenas uma vez

//2
//A  1 vez
//b  2 vezes

//3 a. nao  pois é um atributo privado

 const  newUser: User = new User("01","user@oi.com","Pablo","123456")
console.log(newUser.getId())
console.log(newUser.getEmail())
console.log(newUser.getName())
//---
const newCutomer = new Customer("10","oi@oi.com","Tiao","1234567498","132154654")
console.log(newCutomer.getCreditCard())
console.log(newCutomer.getIntroduceYourself())
 