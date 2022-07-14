import {Avatar, Box, Button, ButtonGroup, Fab, Modal, Stack, styled,
    TextField, Tooltip, Typography} from "@mui/material";
import {Add, DateRange, EmojiEmotions, Image, PersonAdd, VideoCameraBack} from "@mui/icons-material";
import {useState} from "react";

const StyledModal = styled(Modal)({

    display: "flex",
    alignItems: "center",
    justifyContent: "center"
});

const UserBox = styled(Box)({

    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "20px"
});

//La funcionalidad de este boton sera la de cuando se presione salga un modal para agregar un nuevo post
const AddPostButton = () => {

    const [isOpen, setIsOpen] = useState(false);


    const handleOpenModal = () => {

        setIsOpen(true);
    };


    const handleCloseModal = () => {

        setIsOpen(false);
    };

    return (
        <>
            {/*Los Tooltip son basicamente botones los cuales tienen un icono y le sale texto cuando hacemos hover
            Funciona muy bien en conjunto con un  fab*/}
            {/*Con position fixed y bottom:20 nos aseguramos de que nuestro boton siempre se quede en la misma posicion
            y siempre este abajo*/}
            <Tooltip onClick={handleOpenModal} title="Delete" sx={{position: "fixed", bottom:20, left:{xs: "50%", md: "2%"}}}>
                <Fab color="primary" aria-label="add">
                    <Add />
                </Fab>
            </Tooltip>

            <StyledModal
                open={isOpen}
                onClose={handleCloseModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                {/*Con borderRadius le quitamos las puntas a los bordes por */}
                <Box width={400} height={280} bgcolor={"background.default"} color={"text.primary"} padding={3} borderRadius={5}>
                    <Typography variant="h6" color="gray" textAlign="center">Create Post</Typography>

                    <UserBox>
                        <Avatar sx={{width:30, height: 30 }} alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                        <Typography fontWeight={500} variant="span" >John Doe</Typography>
                    </UserBox>

                    <TextField
                        sx={{width: "100%"}}
                        id="outlined-multiline-static"
                        multiline
                        rows={3}
                        placeholder="What's on your mind?"
                        variant="standard"
                    />

                    <Stack direction="row" gap={1} marginTop={2}>
                        <EmojiEmotions color="primary"/>
                        <Image color="secondary"/>
                        <VideoCameraBack color="success"/>
                        <PersonAdd color="error"/>
                    </Stack>

                    {/*Componente ideal si necesitas tener una lista de botones*/}
                    <ButtonGroup fullWidth variant="contained" aria-label="outlined primary button group">
                        <Button>Post</Button>
                        <Button sx={{width:"100px"}}><DateRange/></Button>
                    </ButtonGroup>

                </Box>
            </StyledModal>
        </>
    );
};

export default AddPostButton;
