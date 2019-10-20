import React from 'react'

export default function Todo(props) {
    return (
        <div>
            <p>{props.state.item}</p>
        </div>
    )
}
