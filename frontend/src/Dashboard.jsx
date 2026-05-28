import { useEffect, useState } from "react"; 

import { useNavigate } from "react-router-dom";

function Dashboard() {
    const [userInfo,setUserInfo] = useState(null); 
    const navigate = useNavigate();

    useEffect(() => {
        const userInfo = localStorage.getItem('user-info');
        if(userInfo) {
            setUserInfo(JSON.parse(userInfo));
        }
    }, []); 
    
    const handleLogout = () => {
        localStorage.removeItem('user-info');
        setUserInfo(null);
        navigate('/login');
    }

    return (
        <div>
            <h1>Dashboard</h1>
            <p>{userInfo?.name}</p>
            <p>{userInfo?.email}</p>
            <p>{userInfo?.image}</p> 
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default Dashboard