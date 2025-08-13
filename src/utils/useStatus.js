import { useEffect, useState } from "react"

 //we made this custom hook for checking the online   and offline status of user
 const useStatus=()=>{
    const [onlineStatus,setOnlineStatus]= useState(true)

  //checks user is offline or online

  useEffect(()=>{
    window.addEventListener("offline",()=>{
        setOnlineStatus(false)
    })
    window.addEventListener("online",()=>{
        setOnlineStatus(true)
    })

  },[])
      
    return onlineStatus
 }
 export default useStatus