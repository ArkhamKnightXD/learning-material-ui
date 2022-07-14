import Sidebar from "./components/Sidebar";
import Rightbar from "./components/Rightbar";
import Feed from "./components/Feed";
import {Box, createTheme, Stack, ThemeProvider} from "@mui/material";
import Navbar from "./components/Navbar";
import AddPostButton from "./components/AddPostButton";
import {useState} from "react";

function App() {

    //Logica encargada de activar el darkmode de la pagina
    const [mode, setMode] = useState("light");


    //creamos un theme en el que alteraremos la palette entre light y dark

    const darkTheme = createTheme({

       palette:{
           mode
       }
    });

    return (

        <ThemeProvider theme={darkTheme}>
            {/*//El componente box sirve de contenedor de elementos, todos los elementos dentro de esto estaran dentro de una caja*/}

            {/*El bgcolor y el color son necesarios para que la aplicacion se adapte bien al darkmode*/}
            <Box bgcolor={"background.default"} color={"text.primary"}>
                <Navbar/>

                {/*El stack es ideal si tenemos varios elementos y queremos agruparlo uno al lado de otro o arriba
            Con la direction especificamos si estaran de arriba para abajo o de izq a derecha y con spacing le damos espacio
            Con justifycontent podremos mover el contenido al centro o a la izq o a la derecha
            y con space-between lo separamos completamente que si son 3 uno estara en la izq, otro en el centro
            y uno al final de la pagina a la derecha*/}
                {/*Esta es una forma ideal de estructurar nuestra pagina y tambien de esta forma la estructura es responsive*/}
                <Stack direction="row" spacing={2} justifyContent="space-between">
                    {/*A cada uno de estos elementos se le daran unidades flex para que tengan su respectivo espacio en la pagina*/}
                    <Sidebar setMode={setMode} mode={mode}/>
                    <Feed/>
                    <Rightbar/>
                </Stack>

                <AddPostButton/>

            </Box>
        </ThemeProvider>
    );
}

export default App;
