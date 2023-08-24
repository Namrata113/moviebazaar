
// function Homepage (){
//      return(
//         <div>
//              <header>
//              <main className="home page">
//              </main>
//              </header>
//         </div>
    
        import React from 'react';
        import Card from '@mui/material/Card';
        import CardContent from '@mui/material/CardContent';
        import CardMedia from '@mui/material/CardMedia';
        import Typography from '@mui/material/Typography';
        import { CardActionArea } from '@mui/material';
        import Header from './common/header';
        
          function Homepage() {
          return (
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image=""
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    movie
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          );
        }
     

export default Homepage;