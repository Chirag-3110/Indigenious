import React from 'react'

function InstructionBox() {
    return (
        <div className='topboxShawow' style={{
            backgroundColor:"white",
            height:200,
            padding:20,
            margin: 10,
            borderRadius:10
        }}>
            <p style={{
                color:"red",
                fontWeight:"bold",
                fontSize:15,
            }}>
                Joining Instructions:
            </p>
            <p style={{
                color:"red",
                fontSize:15,
            }}>
                – Must have working internet connection.
            </p>
            <p style={{
                color:"red",
                fontSize:15,
            }}>
                – Only join from laptop (to perform practical with master).
            </p>
        </div>
    )
}

export default InstructionBox