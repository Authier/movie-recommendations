import React from "react";
import { BiCameraMovie } from 'react-icons/bi';

import './header.css'

export default function Header () {
    return (
        <div className="header-container">
            <div className="header-left">
                <BiCameraMovie size={40}/>
            </div>
            <div className="header-middle">
                <h1 id="header-movie-title">
                    Movie Recommendations
                </h1>
            </div>
            <div className="header-right">
                <BiCameraMovie size={40}/>
            </div>
        </div>
    )
}