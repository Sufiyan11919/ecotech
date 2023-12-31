import React, { useEffect } from 'react'
const Logout = () => {
    useEffect(() => {
        fetch('/logout', {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            credentials: 'include' 
        }).then((res) => {
            console.log(res.status)
            window.alert('Logout Successful');
            window.location.href = "/";
            if(res.status !== 200){
                const error = new Error(res.error);
                throw error;
            }
        }).catch((err) => {
            console.log(err);
        });
        }, []);
  return (
    <div>
    Logout
    </div>
  )
}

export default Logout