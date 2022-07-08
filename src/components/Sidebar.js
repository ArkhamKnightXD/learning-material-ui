import {Box} from "@mui/material";

//Uso de los breakpoint de material ui xs quiere decir de 0 a 600 px y sm de 600 a 900
//Each breakpoint (a key) matches with a fixed screen width (a value):
//
//     xs, extra-small: 0px
//     sm, small: 600px
//     md, medium: 900px
//     lg, large: 1200px
//     xl, extra-large: 1536px

const Sidebar = () => {
    return (
        //Con los elementos box podemos utilizar propiedades css directamente, sin necesidad de utilizar sx o style
        //Con el elemento display de css podemos modificar el comportamiendo visual de un elemento
        //en este caso utilizaremos la propiedad none para esconderlos cuando la pantalla sea menor de 600 px
        //Esto se debe a que especificamos xs: y luego la propiedad none, osea que el elemento no se vera cuando el
        //widht de la pantalla sea menor de 600 px y luego especificamos sm: block para que el elemento se muestre normal
        //cuando el widht sea mayor a 900 px
        //En conclusion si el widht de la pantalla es menor de 600 el elemento se escondera y si es mayor de 600 saldra
        <Box bgcolor="skyblue" flex={1} padding={2} sx={{display:{xs: "none", sm: "block"}}}>
            Sidebar
        </Box>
    );
};

export default Sidebar;
