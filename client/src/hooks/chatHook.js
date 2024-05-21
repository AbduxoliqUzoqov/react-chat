import { useEffect, useState } from "react";
const chatMsg = () =>{
   const [msg,setMsg] = useState([]);
   useEffect(()=>{
	   const fetAp = async () =>{
	      const url = await fetch(`http://localhost:8080/api/msg/get`);
	      const data = await url.json()
	      setMsg(data)
	   }
	   fetAp()
	},[]);
	return msg;
}

export default chatMsg;