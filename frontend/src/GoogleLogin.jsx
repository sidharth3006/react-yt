import React from "react"  
import {useGoogleLogin} from "@react-oauth/google"
import { googleAuth } from "./assets/api"
import { useNavigate } from "react-router-dom"

function GoogleLogin() {
    const navigate = useNavigate();
    
    const responseGoogle = async (authResult)=>{

        try {
            if(authResult['code']){
                const result = await googleAuth(authResult['code']); 
                const {email,name,image} = result.data.user; 
                const token = result.data.token; 
                console.log('result.data.user ---',result.data.user);
                console.log('result.data.token ---',token);
                const obj = {email,name,image,token}; 
                localStorage.setItem('user-info',JSON.stringify(obj));  
                navigate('/dashboard');

            }
        } catch (error) {
            console.log(error)
        }
    }

    const googleLogin = useGoogleLogin({
        onSuccess: responseGoogle,
        onError: responseGoogle, 
        flow: "auth-code"
    })

    return (
        <div className="App">
            <button onClick={() => googleLogin()}>Login with Google</button>
        </div>
    )
}

export default GoogleLogin