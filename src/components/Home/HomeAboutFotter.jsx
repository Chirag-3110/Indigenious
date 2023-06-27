import React from 'react'
import '../../css/components/HomeAboutFotter.css';

function HomeAboutFotter() {
    const styles={
        title:{color:"white",fontWeight:"600"},
        text:{color:"white",width:350,lineHeight:1.7},
        mainContainer:{
            display:"flex",
            width:"100%",
            flexWrap:"wrap",
            padding:40,
            
        }
    }
    return (
        <div style={styles.mainContainer} id='bottomDivColor'>
            <div>
                <p style={styles.title}>
                    Mission:
                </p>
                <p style={styles.text}>
                    To promote technology enabled education and enlighten the generation 
                    of today of the challenges of tomorrow, through leading industry professionals
                    empowered by trending technologies around the world driven by visionary 
                    leadership.
                </p>
            </div>
            <div>
                <p style={styles.title}>
                    Vision:
                </p>
                <p style={styles.text}>
                    To create wise innovative leaders through learning by doing and 
                    train students to combine tech diligence with curiosity, playful 
                    imagination, and an appetite for solving the hardest problems in 
                    service to society.
                </p>
            </div>
        </div>
    )
}

export default HomeAboutFotter