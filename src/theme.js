//De esta forma creamos nuestro propio theme para nuestra aplicacion
//The theme specifies the color of the components, darkness of the surfaces, level of shadow, appropriate opacity of ink
// elements, etc. Themes let you apply a consistent tone to your app. It allows you to customize all design aspects
// of your project in order to meet the specific needs of your business or brand.

import {createTheme} from "@mui/material";

export const theme = createTheme({

    //Con palette indicamos las distintas paletas de colores que tendra nuestra app
    palette:{
        //Entonces cuando en un boton indiquemos que su color es primary o secondary, tomara estos colores
        primary:{
            main: "#1760a5",
            light: "skyblue"
        },

        secondary:{
            main: "#15c630"
        },

        //Ademas del color primario y secundario podemos crear otros colores extras
        otherColor: {
            main: "#999"
        }
    }
})
