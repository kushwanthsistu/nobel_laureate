import React from "react";

export default function Header() {
    return (
        <div className="d-flex flex-row bg-light align-items-center p-2 border-bottom border-3 sticky-top" id="headeritem">
            <img src="https://upload.wikimedia.org/wikipedia/en/6/6a/Nobel_medal.png" id="headerimage"/>
            <h4 className="ms-2">Nobel Laureate</h4>
        </div>
    )
}