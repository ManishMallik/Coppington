import { useEffect, useState } from 'react';
import * as React from 'react';
import Popup from '../components/Popup'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

function calculateColorHex(value) {
    // Ensure the value is within the 0-100 range
    value = Math.min(100, Math.max(0, value));
  
    // Calculate the red and green components
    const redValue = 255 - (value * 200) / 100;
    const greenValue = (value * 200) / 100;
  
    // Convert the red and green values to hexadecimal
    const redHex = Math.round(redValue).toString(16).padStart(2, "0");
    const greenHex = Math.round(greenValue).toString(16).padStart(2, "0");
  
    // The blue component is always 0
    const blueHex = "00";
  
    // Combine the components to create the hex color
    const hexColor = `#${redHex}${greenHex}${blueHex}`;
  
    return hexColor;
  }

export default function Listing() {
    const [list, setList] = useState([]);
    const [selectedListing, setSelectedListing] = useState(null);

    const getListings = async () => {
        const response = await fetch("http://localhost:8000/api/getListings")
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error('Something went wrong');
            }).then((responseJSON) => {
                setList(responseJSON)
            }).catch((error) => {
                console.log(error)
            });
        // setList(await response.json())
    }

    useEffect(() => {
        getListings()
    }, [])

    const handleCardClick = (listing, e) => {
        e.stopPropagation();
        setSelectedListing(listing);
      };
    
      const closePopup = () => {
        setSelectedListing(null);
      };

    return (
        <>
        <CssBaseline />
        <main>
        <Container sx={{ py: 8 }}>
        <Grid container spacing={4}>
        {list.map((listings) => (
            <Grid item key={listings.id} xs={12} sm={6} md={4}>
            <Card onClick={(e) => handleCardClick(listings, e)}
                sx={{ height: '100%', display: 'flex', flexDirection: 'column', backgroundColor: 'white', boxShadow: 10 }}
            >
                <CardMedia
                component="div"
                sx={{
                    // 16:9
                    pt: '56.25%',
                }}
                image="https://source.unsplash.com/random?wallpapers"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                    ${listings.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                </Typography>
                <Typography >
                    {listings.address}
                </Typography>
                <Typography>
                    {listings.bedrooms} Beds | {listings.bathrooms} Baths | {listings.sqft.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} Square Feet
                </Typography>
                <Typography variant="h4" color={calculateColorHex((listings.score).toFixed(1))}>
                    {listings.score}
                </Typography>
                </CardContent>
                {/* <CardActions>
                <Button size="small">View</Button>
                <Button size="small">Edit</Button>
                </CardActions> */}
            </Card>
            </Grid>
        ))}
        </Grid>
        </Container>
        </main>
        {selectedListing && (
        <div className="popup-container">
            <Popup listing={selectedListing} onClose={closePopup} />
        </div>
      )}
    </>
  );
}