import React from "react";

export default function Sideblock() {
    return (
        <div>
            <div>
                <h5>Filters</h5>
                <h6>Years : </h6>
                <div className="d-flex flex-row align-items-center">
                    <input  className="yearinputs m-1"/><b>-</b>
                    <input  className="yearinputs m-1"/>
                </div>
            </div>
        </div>
    )
}
