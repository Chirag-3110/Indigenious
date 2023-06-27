import React from 'react'
import HomeAboutFotter from '../components/Home/HomeAboutFotter'
import HomeFotter from '../components/Home/HomeFotter'
import { InlineWidget } from "react-calendly";

function LiveClass() {
    return (
        <div>
            <InlineWidget url="https://calendly.com/takchirag828" />
            <HomeAboutFotter/>
            <HomeFotter/>
        </div>
    )
}

export default LiveClass