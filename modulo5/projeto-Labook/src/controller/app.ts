import * as dotenv from "dotenv";
import * as express from "express";
import * as cors from "cors";
import {AddressInfo} from "net";

dotenv.config();

export const app = express();
app.use(express.json());
app.use(cors());

const server = app.listen(3003, () => {
  if (server) {
    const adress = server.address() as AddressInfo;
    console.log("Servidor rodando na porta 3003");
  } else {
    console.log("Server is not available");
  }
}); 