import axios from 'axios'


const backendUrl = process.env.REACT_APP_BACKEND_URL;
        const loginUrl = `${backendUrl}/login`;
        const registerUrl = `${backendUrl}/register`;

const Login = async(loginDetails)=>{

    try{
    
    const userDetails = {
        ...loginDetails,
    }
    // console.log(userDetails);

    const response = await axios.post(loginUrl,userDetails);
    return response;
}
catch(err){
    console.log(err,'Network not found');
}
}

const RegisterUser = async(newUser)=>{
    try{
        const newUserDetails ={
            ...newUser,
        }
        const response = await axios.post(registerUrl, newUserDetails);
        return response;
    }
    catch(err){
        console.log(err,'Couldnt Register the user');
    }
}

export {Login, RegisterUser};