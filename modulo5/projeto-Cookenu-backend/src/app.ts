import * as express from 'express'
import * as cors from 'cors'

const app = express();

app.use(express.json());
app.use(cors());

const server = app.listen(3003, () => {
    console.log(`Server is running in http://localhost:3003`);
});
export default app