import React from "react";
import Header from "./components/header";
import Card from "./components/card";
import Sideblock from "./components/sideblock";

export default function App() {
    const [data, setdata] = React.useState([])
    const [displaydata, setdisplaydata] = React.useState([])
    const [startdata, setstart] = React.useState({
        startyear : "",
        startinvalid : false
    })
    const [enddata, setend] = React.useState({
        endyear : "",
        endinvalid : false
    })
    const [category, setcategory] = React.useState("all")
    const [mode, setmode] = React.useState(false)
    console.log("rendered")
    React.useEffect(() => {
        fetch("https://api.nobelprize.org/v1/prize.json")
        .then((response) => response.json())
        .then(data => setdata(data.prizes))
    }, [])

    // console.log(data)

    const list = data.map((info, index) => {
        // console.log(info)
        return (
            <Card 
                key = {index.toString()}
                {...info}
                mode = {mode}
            />
        )
    })

    function filter() {
        if(startdata.startyear == "") {
            setstart(() => {
                return {
                    startyear : "",
                    startinvalid : true
                }
            })
            return <></>;
        }
        if(enddata.endyear == "") {
            setend(() => {
                return {
                    endyear : "",
                    endinvalid : true
                }
            })
        }
        if(startdata.startinvalid || enddata.endinvalid)
        return ;
        if(startdata.startyear > enddata.endyear) {
            setstart((data) => {
                return {
                    startyear : data.startyear,
                    startinvalid : true
                }
            })
            return <></>
        }
        else {
            setdisplaydata(() => {
            return data.map((info, index) => {
                if(parseInt(info.year) >= parseInt(startdata.startyear) && parseInt(info.year) <= parseInt(enddata.endyear)) {
                    if(category == "all" || category === info.category)
                    return (
                        <Card 
                            key = {index.toString()}
                            {...info}
                            mode = {mode}
                        />
                    )
                }
            })
        })
        console.log(displaydata)
        }
    }

function changemode() {
    setmode(!mode)
}

console.log(displaydata)

    function testingfunction(value) {
        if(value.length > 4)
        return false
        if(value.length < 4)
        return true ;
        let d = parseInt(value) ;
        if(d < 1901 || d > 2022)
        return false ;
        return true ;
    }
    function changestartyear(event) {
        // alert(parseInt(event.target.value))
        if(testingfunction(event.target.value))
        setstart((data) => {
            return {
                startyear : event.target.value,
                startinvalid : false
            }
        })
        else {
        setstart((data) => {
            return {
                startyear : "",
                startinvalid : true 
            }
        })
        }
    }

    function changeendyear(event) {
        if(testingfunction(event.target.value))
        setend((data) => {
            return {
                endyear : event.target.value,
                endinvalid : false
            }
        })
        else {
        setend((data) => {
            return {
                endyear : "",
                endinvalid : true 
            }
        })
        }
    }

    function categorychange(event) {
        setcategory(event.target.value)
    }

    return (
        <div className="vh-100" id="outerblock">
            <Header 
                mode = {mode}
                changemode = {changemode}
            />
            <div  id="innerblock" style={{backgroundColor : mode ? "black" : "white", color : mode ? "white" : "black"}}>
            <div id="sideblock">
                <Sideblock 
                    handleclick = {filter}
                    changestart = {changestartyear}
                    changeend = {changeendyear}
                    changecategory = {categorychange}
                    {...startdata}
                    {...enddata}
                    mode = {mode}
                />
            </div>
            <div className="mt-2">
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-2">
            {displaydata.length ? displaydata : list}
            </div></div>
            </div>
        </div>
    )
}
