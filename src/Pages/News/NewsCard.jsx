import React from 'react'
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Card from "@mui/material/Card";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";


function NewsCard({ article }) {
    console.log(article.img)
    return (
        <>
            <Card
                sx={{
                    maxWidth: 345,
                    margin: "10px",
                    bgcolor: "#08081b",
                    color: "gray",
                    mt: "50px",
                    ml: "20px",
                }}
                variant="temporary"
            >
                <CardMedia
                    component="img"
                    height="140"
                    image={
                        article?.img === null
                            ? "https://images.pexels.com/photos/177557/pexels-photo-177557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            : article?.img?.o
                    }
                    alt="news"
                />
                <CardContent>
                    <Tooltip title={article.title}>
                        <Typography gutterBottom variant="h7" component="div">
                            {article.title.slice(0, 75) + "..."}
                        </Typography>
                    </Tooltip>
                </CardContent>
                <CardActions>
                    <Button size="small" href={article.url}>
                        Learn More
                    </Button>
                </CardActions>
            </Card>

        </>
    )
}

export default NewsCard