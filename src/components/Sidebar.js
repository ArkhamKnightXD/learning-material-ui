import {Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch} from "@mui/material";
import {AccountBox, Groups, Home, ModeNight, Person, Settings, Storefront, Subject} from "@mui/icons-material";
import PropTypes from "prop-types";

//Uso de los breakpoint de material ui xs quiere decir de 0 a 600 px y sm de 600 a 900
//Each breakpoint (a key) matches with a fixed screen width (a value):
//
//     xs, extra-small: 0px
//     sm, small: 600px
//     md, medium: 900px
//     lg, large: 1200px
//     xl, extra-large: 1536px

const Sidebar = ({setMode, mode}) => {
    return (
        //Con los elementos box podemos utilizar propiedades css directamente, sin necesidad de utilizar sx o style
        //Con el elemento display de css podemos modificar el comportamiendo visual de un elemento
        //en este caso utilizaremos la propiedad none para esconderlos cuando la pantalla sea menor de 600 px
        //Esto se debe a que especificamos xs: y luego la propiedad none, osea que el elemento no se vera cuando el
        //widht de la pantalla sea menor de 600 px y luego especificamos sm: block para que el elemento se muestre normal
        //cuando el widht sea mayor a 900 px
        //En conclusion si el widht de la pantalla es menor de 600 el elemento se escondera y si es mayor de 600 saldra
        <Box flex={1} padding={2} sx={{display: {xs: "none", sm: "block"}}}>
            {/*El sidebar en general lo que tiene es una lista de elementos, utilizando un basic list de mui resolvemos*/}
            {/*Por asunto de mal funcionamiento del position fixed, agregue otro box dentro del box original
            y ya agregando esto el position fixed funciona de maravilla y por lo tanto siempre veremos el sidebar,
            aunque sigamos dando scrolldown*/}
            <Box position="fixed">
                <List>
                    {/*Como habiamos visto anteriorment a cualquier elemento de mui le puedo asignar a que sea
                    renderizado como cualquiera de los tag html que desee, en este caso deseo que el boton sea renderizado
                    como un elemento <a> esto es opcional como habia mencionado */}
                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#home">
                            <ListItemIcon>
                                <Home/>
                            </ListItemIcon>
                            <ListItemText primary="Homepage"/>
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#pages">
                            <ListItemIcon>
                                <Subject/>
                            </ListItemIcon>
                            <ListItemText primary="Pages"/>
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#groups">
                            <ListItemIcon>
                                <Groups/>
                            </ListItemIcon>
                            <ListItemText primary="Groups"/>
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#marketplace">
                            <ListItemIcon>
                                <Storefront/>
                            </ListItemIcon>
                            <ListItemText primary="Marketplace"/>
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#friends">
                            <ListItemIcon>
                                <Person/>
                            </ListItemIcon>
                            <ListItemText primary="Friends"/>
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#settings">
                            <ListItemIcon>
                                <Settings/>
                            </ListItemIcon>
                            <ListItemText primary="Settings"/>
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#profile">
                            <ListItemIcon>
                                <AccountBox/>
                            </ListItemIcon>
                            <ListItemText primary="Profile"/>
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton onChange={mode === "light" ?  () => setMode("dark")
                            : () => setMode("light")} component="a" href="#profile">
                            <ListItemIcon>
                                <ModeNight/>
                            </ListItemIcon>
                            <Switch/>
                        </ListItemButton>
                    </ListItem>
                </List>

            </Box>
        </Box>
    );
};

Sidebar.propTypes = {

    setMode: PropTypes.func.isRequired,
    mode: PropTypes.string.isRequired
};


export default Sidebar;
