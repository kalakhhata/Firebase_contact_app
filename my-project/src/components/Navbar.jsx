import react from "react";
import firebaseLogo from "../assets/firebase.png"

export default function Navbar(){
    return(
        <>
            <div className="my-4 h-[60px] m-4 rounded-lg flex justify-center items-center bg-red-500 gap-2 text-xl font-medium">
                
                    <img src={firebaseLogo} />
                    <h1>Firebase Contact App</h1>
                
            </div>
        </>
    )
}