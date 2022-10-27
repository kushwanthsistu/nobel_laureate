import React from "react";

  export default function Card(data) {
    let list = []
    if(data.laureates) {
        list = data.laureates.map((laureatesdata, index) => {
            return <li>{laureatesdata.firstname} {laureatesdata.surname}</li>
        })
    }
    else {
        list = [<li>didn't give any awards</li>]
    }
    return (
        <div className="boxes p-2 border bg-light">
            <text><b>Year : </b>{data.year}</text><br />
            <text><b>Category : </b>{data.category}</text><br />
            <text><b>Laureates : </b></text>
            <ul>
                {list}
            </ul>
            <p><b>Motivation : </b>{(data.overallMotivation) ? data.overallMotivation : data.laureates[0].motivation}</p>
        </div>
    )
  }