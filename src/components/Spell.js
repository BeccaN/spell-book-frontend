import React, { Component } from 'react'

export default function spell(props) {
    return (
        <div className="spell" >
            {props.stats.name}
        </div>
    )
}