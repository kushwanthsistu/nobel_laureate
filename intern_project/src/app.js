import React from "react";
import Header from "./components/header";
import Card from "./components/card";
import Sideblock from "./components/sideblock";

export default function App() {
    const [data, setdata] = React.useState([])
    console.log("rendered")
    React.useEffect(() => {
        fetch("https://api.nobelprize.org/v1/prize.json")
        .then((response) => response.json())
        .then(data => setdata(data.prizes))
    }, [])

    // console.log(data)

    const list = data.map((info, index) => {
        console.log(info)
        return (
            <Card 
                key = {index.toString()}
                {...info}
            />
        )
    })

    return (
        <div className="vh-100" id="outerblock">
            <Header />
            <div  id="innerblock">
            <div id="sideblock">
                <Sideblock />
            </div>
            <div className="">
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-2">
            {list}
            </div></div>
            </div>
        </div>
    )
}
