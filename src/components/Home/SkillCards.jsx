import React from 'react'
import '../../css/components/HomeAboutFotter.css';

function SkillCards({bgColor,image,title,subtitlke}) {
    const styles={
        container:{
            backgroundColor:bgColor,
            width:250,
            height:550,
            display:"flex",
            flexDirection:"column",
            alignItems:"center",
            borderWidth:3,
            margin:10,
            boxShadow: '10px 10px 10px -1px rgba(10,99,169,0.16) , -10px -10px 10px -1px rgba(255,255,255,0.70)',
        },
        subtitlke:{
            fontSize:14,
            color:"black",
            width:'75%',
            textAlign:"center",
            marginTop:-10,
            lineHeight:1.7,
            fontWeight:"500"
        }
    }
    return (
        <div style={styles.container}>
            <img 
                className='skillCardImage'
                src={image} 
                style={{marginTop:15,borderRadius:100,marginBottom:15}} 
            >                
            </img>
            <div style={{display:"flex",alignItems:"center",flexDirection:"column"}}>
                <p style={{color:"black",fontWeight:"bold"}}>{title}</p>
                <p style={styles.subtitlke}>
                    {subtitlke}
                </p>
            </div>
        </div>
    )
}

export default SkillCards