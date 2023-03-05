import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Moment from "moment";

function PresentationCard(props) {
    const {image, title, event, url, members, date} = props.publication;
    return (
        <Card sx={{ display: 'flex', margin:'10px 0px' }}>
            {
                url?
                    <a className="link" href={url} target='_blank'>
                        <CardMedia
                            component="img"
                            sx={{ width: 150, objectFit: "contain", marginTop: "10px"}}
                            image={image ?`images/presentations/${image}` : `images/presentations/presentation-blurry.png`}
                            alt= {image ?"an image of first slide":"a placeholder image for unavailable" }
                        />
                    </a>:
                    <CardMedia
                        component="img"
                        sx={{ width: 150, objectFit: "contain", marginTop: "10px"}}
                        image={image ?`images/presentations/${image}` : `images/presentations/presentation-blurry.png`}
                        alt= {image ?"an image of first slide":"a placeholder image for unavailable" }
                    />
            }
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="subtitle1">
                        {
                            url?
                                <a className="link" href={url} target='_blank'>
                                    {title? title : `Event: ${event || ""}`}
                                </a> :
                                <>{title? title : `Event: ${event || ""}`}</>
                        }
                    </Typography>
                    {   date &&
                            <Typography variant="h7" color="text.secondary" component="div">
                                {Moment(date).format("MMM Do, YYYY")}
                            </Typography>
                    }
                    {
                        members &&
                            <Typography variant="h7" color="text.secondary" component="div">
                                {members.map(item=> item.name).join(', ')}
                            </Typography>
                    }
                </CardContent>
            </Box>
        </Card>
    );
}


function PaperCard(props) {
    const {image, title, event, url, authors, members, releaseDate} = props.publication;
    return (
        <Card sx={{ display: 'flex', marginBottom: '10px'  }}>
            <div style={{width: '110px'}}>
                {
                    url ?
                        <a className="link" href={url} target='_blank'>
                            <CardMedia
                                component="img"
                                sx={{ width: 110, objectFit: "cover"}}
                                image={image ? `images/publication/${image}` : `images/publication/publication-blurry.png`}
                                alt={image  ?"an image of publisher's cover" : "a placeholder image for unavailable publisher cover"}
                            />
                        </a>:
                        <CardMedia
                            component="img"
                            sx={{ width: 110, objectFit: "cover"}}
                            image={image ? `images/publication/${image}` : `images/publication/publication-blurry.png`}
                            alt= {image  ?"an image of publisher's cover" : "a placeholder image for unavailable publisher cover"}
                        />
                }
            </div>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="subtitle1">
                        {
                            url?
                                <a className="link" href={url} target='_blank'>
                                    {title}
                                </a> : <>{title}</>
                        }

                    </Typography>
                    {   releaseDate &&
                    <Typography variant="h7" color="text.secondary" component="div">
                        {Moment(releaseDate).format("MMM Do, YYYY")}
                    </Typography>
                    }
                    {
                        authors &&
                        <Typography color="text.secondary" component="div">
                            {members.map(item=> item.name).join(', ')}
                        </Typography>
                    }
                    {
                        members &&
                        <Typography variant="h7" color="text.secondary" component="div">
                            {authors}
                        </Typography>
                    }
                </CardContent>
            </Box>
        </Card>
    );
}

export {
    PresentationCard,
    PaperCard
}
