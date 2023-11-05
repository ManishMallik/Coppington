import { useEffect, useState } from 'react';
import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';



export default function Listing() {
    const [list, setList] = useState([]);

    const getListings = async () => {
        const response = await fetch("http://localhost:8000/api/getListings")
        setList(await response.json())
    }

    useEffect(() => {
        getListings()
    }, [])

    return (
        <>
        <CssBaseline />
        <main>
        <Container sx={{ py: 8 }}>
        <Grid container spacing={4}>
        {list.map((listings) => (
            <Grid item key={listings.id} xs={12} sm={6} md={4}>
            <Card
                sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
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
                    {listings.address}
                </Typography>
                <Typography>
                    {listings.description}
                </Typography>
                </CardContent>
                <CardActions>
                <Button size="small">View</Button>
                <Button size="small">Edit</Button>
                </CardActions>
            </Card>
            </Grid>
        ))}
        </Grid>
        </Container>
        </main>
    </>
  );
}