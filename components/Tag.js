import React from "react"

export default function Tag(props){
    return(
        <>
            <button className="btn btn-secondary" type="button">{props.name}</button>
        </>
    )
}
