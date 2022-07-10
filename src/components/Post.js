import React from 'react';
import PropTypes from 'prop-types';
import {
    Avatar,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    Checkbox,
    IconButton,
    Typography
} from "@mui/material";
import {Favorite, FavoriteBorder, MoreVert, Share} from "@mui/icons-material";

const Post = props => {
    return (
        <Card sx={{marginTop: 5}}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
                        R
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVert />
                    </IconButton>
                }
                title="John Doe"
                subheader="September 14, 2022"
            />
            <CardMedia
                component="img"
                height="20%"
                image="https://images.pexels.com/photos/62627/niagara-cases-water-waterfall-62627.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Paella dish"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    This impressive paella is a perfect party dish and a fun meal to cook
                    together with your guests. Add 1 cup of frozen peas along with the mussels,
                    if you like.
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    {/*Para tener un checkbox con un icono lo hacemos de la siguiente forma*/}
                    <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color: "red"}} />} />
                </IconButton>
                <IconButton aria-label="share">
                    <Share />
                </IconButton>
            </CardActions>
        </Card>

    );
};

Post.propTypes = {

};

export default Post;