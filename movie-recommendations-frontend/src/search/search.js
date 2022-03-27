import React from "react";

import { FiSearch } from 'react-icons/fi';

import "./search.css";

export default function Search (props) {

    function handleSubmit (event) {
        event.preventDefault()
        if (event.target[0].value) {
            props.handleSearchClick(event.target[0].value)
        }
    }

    return (
        <form onSubmit={handleSubmit}className="search-container">
            <div className="search-container-2">
                <div className="search-left">
                    <FiSearch color="black" size={30}/>
                </div>
                <div className="search-middle">
                    <input id="search-bar" type="text" />
                </div>
                <div className="search-right">
                </div>
            </div>
        </form>
    )
}