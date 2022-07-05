export class User {
    constructor(
        private id: string,
        private name: string,
        private email: string,
        private password: string
    ) { }
    getUserName = () => this.name
    getUserEmail = () => this.email
}