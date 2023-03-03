import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import Typography from '@mui/material/Typography';
import GroupAvatar from "../../Components/Utils/GroupAvatar";
import Moment from "moment";
import CustomButton from "../../Components/Utils/CustomButton";

export default function PublicationCard(props) {
    const {image, title, event, url, members, date} = props.publication;
    return (
        <Card sx={{ display: 'flex' }}>
            {
                image ?
                <CardMedia
                    component="img"
                    sx={{ width: 150, objectFit: "contain"}}
                    image={`images/presentations/${image}`}
                    alt="Live from space album cover"
                />:
                    <CardMedia
                        component="img"
                        sx={{ width: 150, objectFit: "contain"}}
                        image={`images/presentations/presentation-blury.png`}
                        alt="Live from space album cover"
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
