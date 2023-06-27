import '../css/components/HomeAboutFotter.css';
import HomeAboutFotter from "../components/Home/HomeAboutFotter";
import HomeFotter from "../components/Home/HomeFotter";
import InstructionBox from "../components/Home/InstructionBox";
import SingleVideoDescription from "../components/Home/SingleVideoDescription";
import SkillCards from "../components/Home/SkillCards";
import StudentEmailNameBox from "../components/Home/StudentEmailBox";
import { skills } from "../data/HomeSkills";

import image1 from '../assets/stars.png';
import coding from '../assets/coding.png';
import TalksVideos from "../components/Home/TalksVideos";


function Home() {

  const styles={
    skillsTitle:{
      color:"#B31A75",
      fontFamily: ["Satisfy", 'Sans-serif'],
      fontWeight:"bold",
      fontSize:30,
      textAlign:"center"
    },
    subTileStyle:{
      color:"black",
      fontFamily: ["Satisfy", 'Sans-serif'],
      fontWeight:"bold",
      fontSize:30,
      textAlign:"center"
    }
  }
  return (
    <div>
      <div  
        style={{
          marginBottom:50,
          backgroundColor:"#007FC2",
          display:"flex",
          alignItems:"center",
          justifyContent:"center",
          flexWrap:"wrap"
        }}
      >
        <div style={{display:"flex",justifyContent:"center",justifyContent:"center",flexDirection:"column"}}>
          <img 
              src={coding} 
              >                
          </img>
          <h2>Highest satisfactory rate !!</h2>
          <img 
              src={image1}
          >                
          </img>
        </div>
        <div>
          <StudentEmailNameBox/>
          <InstructionBox/>
        </div>
      </div>     
      <div>
        <p style={styles.skillsTitle}>
          <i>{`< Coding is secondary, what matters is skill & creativity />`}</i>
        </p>
        <p style={styles.subTileStyle}>
        <i>{`--> Get the skills for future <--`}</i>
        </p>
        <div style={{display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"center"}}>
          {
            skills.map((item,index)=>(
              <SkillCards 
                key={item.id}
                bgColor={item.bgcolor} 
                title={item.title} 
                subtitlke={item.subTitle} 
                image={item.image} 
              />
            ))
          }
        </div>
      </div>
      <SingleVideoDescription/>
      <TalksVideos/>
      <HomeAboutFotter/>
      <HomeFotter/>
    </div>
  );
}

export default Home;
