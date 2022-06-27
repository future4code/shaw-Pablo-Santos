import * as jwt from 'jsonwebtoken'



export const token = jwt.sign({
    id: ""
}, "bananinha",
{expiresIn: "30m"})


export const tokenData =  jwt.verify(
    token, "bananinha"
)