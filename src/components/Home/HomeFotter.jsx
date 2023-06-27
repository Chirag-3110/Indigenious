import React from 'react'

function HomeFotter() {
    const styles={
        title:{backgroundColor:"#EEEEEE",padding:10},
        text:{color:"grey",fontWeight:"600",textAlign:"center"}
    }
    return (
        <div style={styles.title}>
            <p style={styles.text}>
                Copyright © 2023 Indigenius | designed by Intella Education Pvt. Ltd.
            </p>
        </div>
    )
}

export default HomeFotter