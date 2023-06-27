import React from 'react'
import HomeAboutFotter from '../components/Home/HomeAboutFotter'
import HomeFotter from '../components/Home/HomeFotter'

function Account() {

    const styles={
        accountTitle:{
            backgroundColor:'#FECD45',
            padding:15,
            fontSize:25,
            fontWeight:"bolder",
            textAlign:"center",
            width:"80%",
        },
        inputBox:{
            padding:15,
            width:"80%",
            marginBottom:100,
            borderWidth:2,
            borderColor:"black",
            borderRadius:5,
            border: '1px solid #d3ced2', 
            marginTop:30,
            paddingBottom:70
        },
        button:{
            width:100,
            height:40,
            backgroundColor:"#FECD45",
            border:0,
            color:"black",
            fontWeight:"bold",
            marginTop:10
        },
        inputIndi:{
            width:"95%",
            height:40,
            marginTop:-10,
            border: '1px solid #d3ced2', 
            fontSize:20,
            paddingLeft: 15,
        }
    }
    return (
        <div>
            <div style={{width:"100%",display:"flex",flexDirection:"column",alignItems:"center",marginTop:70}}>
                <p style={styles.accountTitle}>
                    <i>My Dashboard</i>
                </p>
                <p style={{marginTop:10,textAlign:"left",width:'80%',fontSize:20,fontWeight:"bold",color:"#3A3A3A"}}>
                    Login
                </p>
                <div style={styles.inputBox}>
                    <div style={{marginTop:20}}>
                        <div style={{display:"flex",}}>
                            <p style={{color:"grey",fontWeight:"bold"}}>Username or email address</p>
                            <p style={{color:"red",fontWeight:"bold",marginLeft:5,marginTop:10}}>*</p>
                        </div>
                        <input style={styles.inputIndi} ></input>
                    </div>
                    <div style={{marginTop:20}}>
                        <div style={{display:"flex"}}>
                            <p style={{color:"grey",fontWeight:"bold"}}>Password</p>
                            <p style={{color:"red",fontWeight:"bold",marginLeft:5,marginTop:10}}>*</p>
                        </div>
                        <input style={styles.inputIndi}></input>
                    </div>
                    <div style={{display:"flex",marginTop:10}}>
                        <input type="checkbox"/>
                        <p style={{color:"grey",fontWeight:"bold",}}>Remember me</p>
                    </div>
                    <button style={styles.button}>
                        Log In
                    </button>
                    <p style={{color:"#2568fb",marginTop:10}}>
                        Lost your password?
                    </p>
                </div>
            </div>
            <HomeAboutFotter/>
            <HomeFotter/>
        </div>
    )
}

export default Account