const mock = true;

let API_END_POINT = "http://localhost:4000";

if(mock){
    API_END_POINT = "http://localhost:4000";
}

export const VERIFY_EMAIL_API_URL= API_END_POINT + "/login";


