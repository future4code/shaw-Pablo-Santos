import knex from "knex";
import * as dotenv from 'dotenv'
dotenv.config()

export class BaseDataBase {
    protected connection = knex({
        client: "mysql",
        connection: {
            host: process.env.DB_HOST,
            port: 3306,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
            multipleStatements: true
        }
    });
}