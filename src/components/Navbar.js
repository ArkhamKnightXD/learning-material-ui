import {AppBar, Avatar, Badge, Box, InputBase, Menu, MenuItem, styled, Toolbar, Typography} from "@mui/material";
import PetsIcon from '@mui/icons-material/Pets';
import {Mail, Notifications} from "@mui/icons-material";
import {useState} from "react";

//Con esta toolbar el contenido de mi navbar siempre estara separado si en el navbar hay 3 elementos, los 3 estaran separados
const StyledToolbar = styled(Toolbar)({

    display: 'flex',
    justifyContent: 'space-between',
});

//De esta forma creo mi custom component en base a un div, puedo hacer esto con cualquier elemento html
const Search = styled("div")(({theme}) => ({

    backgroundColor: "white",
    padding: "0 10px",
    //Aqui asigno una propiedad en base a mi theme
    borderRadius: theme.shape.borderRadius,
    width: "40%"
}));

const Icons = styled(Box)(({theme}) => ({

    //Con agregar display flex me aseguro que si tengo varios elementos uno quede del lado de otro y nunca uno arriba de otro
    // display: 'flex',
    //Con display: none oculto el elemento
    display: 'none',

    //Con la propiedad gap establecemos una distancia de 20 px entre cada elemento incluidos en el tag de icons
    gap: "20px",
    alignItems: "center",
    //de esta forma utilizo breakpoints mediante el theme esto quiere decir si la pantalla tiene
    // un widht de 600 para arriba dame un display de flex de este elemento
    [theme.breakpoints.up("sm")]: {
        display: 'flex',
    }
}));

const UserBox = styled(Box)(({theme}) => ({

    display: 'none',
    gap: "10px",
    alignItems: "center",
    //Este elemento se mostrara cuando la pantalla sea de 600 para abajo
    [theme.breakpoints.down("sm")]: {
        display: 'flex',
    }
}));

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);


    const handleOpenMenu = () => {

        setIsOpen(true);
    };


    const handleCloseMenu = () => {

        setIsOpen(false);
    };


    return (

        //Los elementos principales que conforman un appbar son el appbar y el toolbar, con esos 2 elementos
        //y sumandole el position tenemos una appbar simple
        //Si deseamos que el appbar este siempre arriba incluso cuando hacemos scroll y los otros elementos se mantenga
        // debajo de ella podemos utilizar position sticky
        <AppBar position="sticky">
            <StyledToolbar>
                <Typography variant="h6" sx={{display: {xs: "none", sm: "block"}}}>Nameless</Typography>
                <PetsIcon sx={{display: {xs: "block", sm: "none"}}}/>
                <Search>
                    {/*Con el elemento input o inputbase agrego la parte de digitar*/}
                    <InputBase placeholder="search" type="text"/>
                </Search>

                {/*En esta parte manejo mis iconos*/}
                <Icons>

                    {/*Badge es una forma bastante util para mostrar iconos relacionados a las notificaciones o correos
                    en badge content se indica la cantidad de elementos que tendra el icono*/}

                    <Badge sx={{display: {xs: "none", sm: "block"}}} badgeContent={4} color="error">
                        <Mail/>
                    </Badge>

                    <Badge sx={{display: {xs: "none", sm: "block"}}} badgeContent={2} color="error">
                        <Notifications/>
                    </Badge>

                    {/*Avatar es el elemento encargado de mostrar la foto del usuario o nombre */}
                    <Avatar onClick={handleOpenMenu} sx={{width: 30, height: 30}}
                            src="https://images.pexels.com/photos/12640959/pexels-photo-12640959.jpeg?cs=srgb&dl=pexels-ethan-brooke-12640959.jpg&fm=jpg"/>
                </Icons>
                <UserBox onClick={handleOpenMenu}>
                    <Avatar sx={{width: 30, height: 30}}
                            src="https://images.pexels.com/photos/12640959/pexels-photo-12640959.jpeg?cs=srgb&dl=pexels-ethan-brooke-12640959.jpg&fm=jpg"/>
                    <Typography variant="span">Knight</Typography>
                </UserBox>

            </StyledToolbar>

            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                open={isOpen}
                onClose={handleCloseMenu}
                //Todo pide un elemento anchorEl, entender porque lo pide y para que funciona
                // anchorEl={anchorEl}

                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                <MenuItem>Profile</MenuItem>
                <MenuItem>My account</MenuItem>
                <MenuItem>Logout</MenuItem>
            </Menu>
        </AppBar>
    );
};

export default Navbar;
