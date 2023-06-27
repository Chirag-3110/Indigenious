import React from 'react'
import image from '../../assets/tt.png';
import banner from '../../assets/benner.jpg'

function TalksVideos() {
    return (
        <div 
            style={{
                display:"flex",
                flexWrap:"wrap",
                justifyContent:"space-around",
                alignItems:"center",
                padding:40,
                backgroundImage: `url(${process.env.PUBLIC_URL + banner})`,
            }}
        >
            <div style={{width:270,height:130,marginTop:10,backgroundColor:'yellow',padding:5,borderRadius:4,boxShadow: '10px 10px 10px -1px rgba(10,99,169,0.16) , -10px -10px 10px -1px rgba(255,255,255,0.70)'}}>
                <img 
                    style={{width:'100%',height:"100%"}}
                    src={image} 
                >                
            </img>
            </div>
            <div className='videoPlayerLong' style={{width:320,height:170,marginTop:10,backgroundColor:'white',padding:5,borderRadius:4,}}>
                <video style={{borderRadius:5}} width="100%" height="100%" controls >
                    <source src={{uri:"https://www.youtube.com/watch?v=NbyHNASFi6U&list=RDEMulALs7qwkePpaGzHG_ttvg"}} />
                </video>
            </div>
            <div className='videoPlayerLong' style={{width:320,height:170,marginTop:10,backgroundColor:'white',padding:5,borderRadius:4,}}>
                <video style={{borderRadius:5}} width="100%" height="100%" controls >
                    <source src={{uri:"https://www.youtube.com/watch?v=NbyHNASFi6U&list=RDEMulALs7qwkePpaGzHG_ttvg"}} />
                </video>
            </div>
            <div className='videoPlayerLong' style={{width:320,height:170,marginTop:10,backgroundColor:'white',padding:5,borderRadius:4,}}>
                <video style={{borderRadius:5}} width="100%" height="100%" controls >
                    <source src={{uri:"https://www.youtube.com/watch?v=NbyHNASFi6U&list=RDEMulALs7qwkePpaGzHG_ttvg"}} />
                </video>
            </div>
        </div>
    )
}

export default TalksVideos