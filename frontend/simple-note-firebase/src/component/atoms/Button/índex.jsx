import React from "react"

export const Button = ({title, onClick, loading}) => {

    if(loading){ 
        return <button className="btn-register disable">Loading..</button> 
    }

    return (
        <button className="btn-register" onClick={onClick}>
            {title}
        </button> 
    )
}
