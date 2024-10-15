import React, { useEffect, useState } from "react";
import darkIcon from "../../assets/website/dark-mode-button.png"
import lightIcon from "../../assets/website/light-mode-button.png"

function DarkMode(){
    const [theme,setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme"):"light")

    const element = document.documentElement;

    useEffect(()=>{
        if(theme === "dark"){
            element.classList.add("dark");
            localStorage.setItem("theme", "dark");
        }else {
            element.classList.remove("dark");
            localStorage.setItem("theme", "light");
          }

    },[theme])

    const changeTheme = ()=>{
        if (theme === "light") {
            setTheme("dark");
        }
        else{
            setTheme("light");
        }
    }


    return(
        <>
            <div className="relative">
                <img src={darkIcon} 
                alt="" 
                className={`w-12 absolute right-0 z-10 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 ${theme === "dark" ? "opacity-0" : "opacity-100"}`}
                onClick={changeTheme}/>

                <img src={lightIcon} 
                alt="" 
                className="w-12 drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300" 
                onClick={changeTheme}/>
            </div>
        </>
    )
}

export default DarkMode