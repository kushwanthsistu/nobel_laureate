import React from "react";

export default function Sideblock(props) {
    let display = "" ;
    if(props.startinvalid || props.endinvalid)
    display = "invalid input"
    else
    display = ""
    return (
        <div>
            <div>
                <h5>Filters</h5>
                <h6 className="mt-1">Years : </h6>
                <div className="d-flex flex-row align-items-center">
                    <input  className="yearinputs m-1" placeholder="1901" onChange={props.changestart} type="number"  /><b>-</b>
                    <input  className="yearinputs m-1" placeholder="2022" onChange={props.changeend} type="number"/>
                </div>
                <text>* only from 1901-2022</text>
                <h6 className="mt-1">Category : </h6>
                <select name="category" onChange={props.changecategory}>
                    <option value={"all"}>All</option>
                    <option value={"chemistry"}>Chemistry</option>
                    <option value={"economics"}>Economics</option>
                    <option value={"literature"}>Literature</option>
                    <option value={"peace"}>Peace</option>
                    <option value={"physics"}>Physics</option>
                    <option value={"medicine"}>Medicine</option>
                </select>
                <div className="mt-4 d-flex flex-column align-items-center justify-content-center">
                    <button className="btn btn-secondary" onClick={props.handleclick}>apply filters</button>
                </div>
                <div className="d-flex flex-column align-items-center" style={{color : "red"}}>{display}</div>
            </div>
        </div>
    )
}
