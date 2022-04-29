import React from "react";
import { useState } from "react";

const useForm=(initialState)=>{
const [form, setForm] = useState(initialState)

const onChange =(e)=>{
const{name,value}=e.target;

setForm({...form, [name]:value})
};

const clearInput=()=>{
setForm(initialState)
};

return {form, onChange ,clearInput}

}
export default useForm


