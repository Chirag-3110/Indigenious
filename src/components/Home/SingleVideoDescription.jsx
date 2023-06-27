import React from 'react'
import '../../css/components/HomeAboutFotter.css';
function SingleVideoDescription() {
    return (
        <div style={{width:"100%",display:"flex",alignItems:"center",justifyContent:"space-evenly",flexWrap:"wrap",margin: 15,marginTop:40,marginBottom:40}}>
            <div style={{width:430,padding:15,display:"flex",flexDirection:"column"}}>
                <p style={{fontWeight:"bold",fontSize:30,color:"#B31A75",textAlign:"center"}}>
                    <i>
                        Why indigenius is <u>india's most trustable learning platform</u>
                    </i>
                </p>
                <p style={{fontSize:15,lineHeight:1.5,fontWeight:"500"}}>
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
                    The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content 
                    here, content here’, making it look like readable English.
                </p>
            </div>
            <div className='videoPlayerLong' style={{backgroundColor:'#FECD45',padding:5,borderRadius:20,boxShadow: '10px 10px 10px -1px rgba(10,99,169,0.16) , -10px -10px 10px -1px rgba(255,255,255,0.70)'}}>
                <video style={{borderRadius:20}} width="100%" height="100%" controls >
                    <source src={{uri:"https://www.youtube.com/watch?v=NbyHNASFi6U&list=RDEMulALs7qwkePpaGzHG_ttvg"}} />
                </video>
            </div>
        </div>
    )
}

export default SingleVideoDescription