import React from 'react'
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Card from "@mui/material/Card";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";


function NewsCard({ article }) {
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
                        article.urlToImage === null
                            ? "https://media.istockphoto.com/photos/online-news-in-mobile-phone-close-up-of-smartphone-screen-man-reading-picture-id1065782416?b=1&k=20&m=1065782416&s=170667a&w=0&h=DeacwxQl_KZdhtkk6eHxxGunzYuHLfi6S6rvM3CsVeg="
                            : article.urlToImage
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