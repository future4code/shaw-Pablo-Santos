import { app } from "./app";
//A constructor serve para que a classe possa ser inicializada com alguns dados , chamamos ele de constructor{...}
//B 1vez apenas 
//C usamos os metodos getters e setters


class Transaction {
    private description: string
    private value: number
    private date: string

    constructor(
    description: string,
    value: number,
    date: string

    ){
        this.description = description
        this.value = value
        this.date = date
    }

    public getDescription(): string {
        return this.description
    }
    public getValue(): number {
        return this.value
    }
    public getdate(): string {
        return this.date
    }

}




class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transaction[] = [];

    constructor(
        cpf: string,
        name: string,
        age: number,
    ) {
        console.log("Chamando o construtor da classe UserAccount")
        this.cpf = cpf;
        this.name = name;
        this.age = age;
    }
  public getCpf():string{
    return this.cpf
  }
  public getName():string{
    return this.name
  }
  public getAge():number{
    return this.age
  }
  public getBalance (): number{
    return this.balance
  }
  public getTransactions():Transaction[]{
    return this.transactions
  }
  public setTransactions(newTransaction:Transaction){
    return this.transactions = [...this.transactions, newTransaction]
  }


}
const newUser = new UserAccount("111.333.222-55", "Tiao", 15)
const transaction = new Transaction("Comer", 1200, "15/12/2022")
console.log(newUser.getName())
newUser.setTransactions(transaction)
console.log(newUser.getTransactions())




class Bank {
    private accounts: UserAccount[];
  
    
    constructor(accounts: UserAccount[]) {
      this.accounts = accounts;
    }
    public getAccount():UserAccount[]{
        return this.accounts
    }

  
  }


  const contas:UserAccount[]= [newUser]
  const newBank = new Bank(contas)
  console.log(newBank.getAccount())



