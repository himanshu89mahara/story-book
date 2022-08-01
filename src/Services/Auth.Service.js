import { VERIFY_EMAIL_API_URL } from "../Constants/apiRequestUri";

export const makeLogin = async(body)=>{
    try{
        const res = await fetch(VERIFY_EMAIL_API_URL,{
            method:'post',
            headers:{
                "Content-Type":"application/json"
            },
            body:body
        });
    
        const data = await res.json();
        return data;

    }catch(err){
        throw new Error(err);
    }
    


    
}