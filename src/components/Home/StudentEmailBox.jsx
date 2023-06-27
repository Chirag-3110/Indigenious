import React from 'react'

function StudentEmailNameBox() {
    const styles={
        inputIndi:{
            width:"95%",
            height:30,
            marginTop:-10,
            border: '1px solid #d3ced2', 
            fontSize:15,
            paddingLeft: 10,
            color:"grey",   
            marginTop:10,
            borderRadius:3
        },
        button:{
            width:"97.5%",
            height:40,
            backgroundColor:"#FECD45",
            border:0,
            color:"black",
            fontWeight:"bold",
            marginTop:10,
            borderRadius:50
        },
    }
    return (
        <div className='topboxShawow' style={{
            backgroundColor:"white",
            padding:20,
            margin: 10,
            borderRadius:20,
        }}>
            <p style={{
                color:"red",
                fontWeight:"bold",
                fontSize:30,
            }}>
               Curious about robotics? Join us in the event.
            </p>
            <div style={{marginTop:20,marginBottom:10}}>
                <input  placeholder='Student Name *' style={styles.inputIndi}></input>
                <input  placeholder='Email Address *' style={styles.inputIndi}></input>
                <input  placeholder='Mobile *' style={styles.inputIndi}></input>
            </div>
            <button style={styles.button}>
                JOIN FREE MASTERCLASS
            </button>
            <p style={{
                color:"red",
                fontSize:15,
                marginTop:20
            }}>
                For courses reach us out at +91 9910149260.
            </p>
        </div>
    )
}

export default StudentEmailNameBox