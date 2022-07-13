import React from 'react'
import { Headline1 } from '../../typography/Headlines/Headlines'
import './visual-header.less'

export default function VisualHeader(props) {
    return (
        <div className="visual-header">
            <div className="visual-header-mask" />
            <div className="visual-header-eagle" />
            <Headline1>{props.title}</Headline1>
        </div>
    )
}
