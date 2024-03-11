import React, { useState } from "react";
import MainCard from "ui-component/cards/MainCard";
import { Button, CardActions, Divider, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';


export default function Course() {
  const [CourseData, setCourseData] = useState({
    coursename: "",
    CourseID: "",
    startdate: "",
    enddate: "",
    batch: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourseData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Your submit logic here
  };

  return (
    <>
      <MainCard title='Create a New Course'>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
              <Typography variant="h5" component="h5">
                Course Name
              </Typography>
              <TextField
                fullWidth
                margin="normal"
                name="CourseName"
                value={CourseData.CourseID}
                onChange={handleChange}
                variant="outlined"
                
              />
           </Grid>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="h5" component="h5">
                Course ID
              </Typography>
              <TextField
                fullWidth
                margin="normal"
                name="CourseID"
                value={CourseData.CourseID}
                onChange={handleChange}
                variant="outlined"
                
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="h5" component="h5">
                Start date
              </Typography>
              <TextField
                fullWidth
                margin="normal"
                name="startdate"
                value={CourseData.startdate}
                onChange={handleChange}
                variant="outlined"
                
              />

	      <Grid item xs={12} sm={6}>
              <Typography variant="h5" component="h5">
                End date
              </Typography>
              <TextField
                fullWidth
                margin="normal"
                name="enddate"
                value={CourseData.enddate}
                onChange={handleChange}
                variant="outlined"
                
              />

            </Grid>
            
            
               <Grid item xs={12} sm={6}>
              <Typography variant="h5" component="h5">
                Batch
              </Typography>
              <TextField
                fullWidth
                margin="normal"
                name="branch"
                value={CourseData.branch}
                onChange={handleChange}
                variant="outlined"
                
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="h4" component="h4">
                Description
              </Typography>
              <TextField
                fullWidth
                margin="normal"
                name="description"
                value={CourseData.description}
                onChange={handleChange}
                variant="outlined"
                
              />
            </Grid>
            
            
            

          </Grid>
          <Divider sx={{ mt: 5, mb: 2 }} />
          <CardActions sx={{ justifyContent: 'flex-end' }}>
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </CardActions>
        </form>
      </MainCard>
    </>
  );
}