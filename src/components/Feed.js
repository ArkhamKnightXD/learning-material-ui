import {Box} from "@mui/material";
import Post from "./Post";

//Utilizaremos cartas para mostrar feed que normalmente es cartas que se utilizan para mostrar los feed de
// basicamente todas las redes sociales
const Feed = () => {
    return (
        <Box flex={4} padding={2}>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
        </Box>
    );
};

export default Feed;

