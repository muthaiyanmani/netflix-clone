import React,{useEffect,useState} from 'react'
import './NavBar.css'

function NavBar() {

    const [show,handleShow]=useState(false)

    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            if(window.scrollY>100){
                handleShow(true);
            }else handleShow(false);
        });
        return()=>{
            window.removeEventListener('scroll')
        };
    },[])

    return (
        <div className={`navbar ${show && "navbar_black"}`}>
            <img className="navbar_logo" 
            src="https://upload.wikimedia.org/wikipedia/commons/archive/0/08/20190205011501%21Netflix_2015_logo.svg"
            alt="netflix_logo"/>
             
            <img className="navbar_avatar" 
            src="https://www.freeiconspng.com/uploads/am-a-19-year-old-multimedia-artist-student-from-manila--21.png" 
            alt="avatar"/>
        </div>
    )
}

export default NavBar
