import React, {useState,useEffect,useRef} from "react";
import icon from "../images/chat (1).svg";



const ChatBot = () => {

    const [open,setOpen] = useState(false);
    const drop = useRef(null);

    function handleClick(e){
        if(drop.current) {
            if(!e.target.closest(".chatbot") && open) {
                setOpen(false);
            }
        }
    }

    //`.${drop.current.className}`

    useEffect(()=>{
        document.addEventListener("click", handleClick);
        return()=>{
            document.removeEventListener("click", handleClick);
        }
    })


    return ( 
        <>
        <div className="chatbot"
            ref={drop}>   
            <img style={{position:"fixed",zIndex:"1", bottom:"30px",right:"50px", height:"50px", width:"50px"}} onClick={()=>{setOpen(open => !open)}} src={icon} alt="icon" />
            { open && 
            <iframe 
                title="chatbot"
                style={{width:"350px", height:"430px", zIndex:"1",position:"fixed", bottom:"65px", right:"50px"}}
                allow="microphone;"
                src="https://console.dialogflow.com/api-client/demo/embedded/51d77aff-48ae-49a9-91ff-d9625a2a9336"
            ></iframe> }
            
        </div>
       

    </>
     );
}
 
export default ChatBot;