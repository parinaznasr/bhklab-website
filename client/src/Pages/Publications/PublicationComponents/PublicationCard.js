import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import Typography from '@mui/material/Typography';
import Moment from "moment";

function PresentationCard(props) {
    const {image, title, event, url, members, date} = props.publication;
    return (
        <Card sx={{ display: 'flex' }}>
            {
                image ?
                <CardMedia
                    component="img"
                    sx={{ width: 150, objectFit: "contain"}}
                    image={`images/presentations/${image}`}
                    alt="an image of first slide"
                />:
                    <CardMedia
                        component="img"
                        sx={{ width: 150, objectFit: "contain"}}
                        image={`images/presentations/presentation-blurry.png`}
                        alt="a placeholder image for unavailable"
                    />
            }

            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="subtitle1">
                        {title? title : `Event: ${event || ""}`}
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
                    { url &&
                    <a className="link" href={url} target='_blank'>
                        <IconButton color="primary" aria-label="add an alarm">
                            <OpenInNewIcon />
                        </IconButton>
                    </a>
                    }
                </CardContent>
            </Box>
        </Card>
    );
}


function PaperCard(props) {
    const {image, title, event, url, authors, members, releaseDate} = props.publication;
    return (
        <Card sx={{ display: 'flex' }}>
            {
                image ?
                    <CardMedia
                        component="img"
                        sx={{ width: 110, height:110, objectFit: "cover"}}
                        image={`images/publication/${image}`}
                        alt="an image of publisher's cover"
                    />:
                    <CardMedia
                        component="img"
                        sx={{ width: 150, objectFit: "contain"}}
                        image={`images/publication/publication-blurry.png`}
                        alt="a placeholder image for unavailable publisher cover"
                    />
            }

            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="subtitle1">
                        {title? title : `Event: ${event || ""}`}
                    </Typography>
                    {   releaseDate &&
                    <Typography variant="h7" color="text.secondary" component="div">
                        {Moment(releaseDate).format("MMM Do, YYYY")}
                    </Typography>
                    }
                    {
                        authors &&
                        <Typography variant="h7" color="text.secondary" component="div">
                            {members.map(item=> item.name).join(', ')}
                        </Typography>
                    }
                    {
                        members &&
                        <Typography variant="h7" color="text.secondary" component="div">
                            {authors}
                        </Typography>
                    }
                    { url &&
                    <a className="link" href={url} target='_blank'>
                        <IconButton color="primary" aria-label="add an alarm">
                            <OpenInNewIcon/>
                        </IconButton>
                    </a>
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
