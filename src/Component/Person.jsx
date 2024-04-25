import { Button, Grid, Stack } from "@mui/material";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import hero from "../Assets/images/chithiraivel.jpeg";
const Person = () => {
  return (
    <div >
      <Grid container spacing={2} style={{padding:'80px'}}>
        <Grid item xs={12} sm={12} md={12} lg={4}>
        <img src={hero} style={{height:'90%', width:'90%',borderRadius:'60%'}}/>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={6}>
        <div >
                <h1 >
                <span className='primary-color'> I'm a</span><br />
        <TypeAnimation
        sequence={[
            "Frontend Dev",
            1000,
            "Webdesigner",
            1000,
            "Consultant",
            1000
        ]}
        wrapper='span'
        speed={50}
        repeat={Infinity}
        />
                </h1>

                <p>
                    My name is chithiraivel im from thoothukudi
                    Six months experienced as a Full Stack Developer in MERN with hands-on experience 
in identifying web base user interactions along with designing & implementing highly 
responsive user interface components by deploying all the concepts. 
• Expert in developing databases and Websites with dedication and dependability.
                </p>
                <div >
               
                </div>
                <Stack direction="row" spacing={2}>
                <Button variant="contained" sx={{width:'150px',height:'45px',gap:'4'}}>Download CV</Button>
                    <Button variant="contained" sx={{width:'150px',height:'45px',gap:'4'}}>Contact Me</Button>
</Stack>
            </div>

        
        </Grid>
      </Grid>
      {/* <div className='grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[1200px] mx-auto py-8 bg-black'>

            <div className='col-span-1 my-auto mx-auto w-[300px] h-auto lg-w-[400px]'>
                
               
              
            </div>

            <div className='col-span-2 px-5 my-auto'>
                <h1 className='text-white text-4xl sm:text-5xl lg:text-8xl font-extrabold'>
                <span className='primary-color'> I'm a</span><br />
        <TypeAnimation
        sequence={[
            "Frontend Dev",
            1000,
            "Webdesigner",
            1000,
            "Consultant",
            1000
        ]}
        wrapper='span'
        speed={50}
        repeat={Infinity}
        />
                </h1>

                <p className='text-white sm-text-lg my-6 lg-text-xl '>
                    My name is chithiraivel im from thoothukudi
                </p>
                <div>
                    <a href="">Download CV</a>
                </div>
            </div>

        </div> */}
    </div>
  );
};

export default Person;
