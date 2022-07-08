import Sidebar from "./components/Sidebar";
import Rightbar from "./components/Rightbar";
import Feed from "./components/Feed";
import {Box, Stack} from "@mui/material";
import Navbar from "./components/Navbar";

function App() {
    return (
        //El componente box sirve de contenedor de elementos, todos los elementos dentro de esto estaran dentro de una caja
        <Box>
            <Navbar/>

            {/*El stack es ideal si tenemos varios elementos y queremos agruparlo uno al lado de otro o arriba
            Con la direction especificamos si estaran de arriba para abajo o de izq a derecha y con spacing le damos espacio
            Con justifycontent podremos mover el contenido al centro o a la izq o a la derecha
            y con space-between lo separamos completamente que si son 3 uno estara en la izq, otro en el centro
            y uno al final de la pagina a la derecha*/}
            {/*Esta es una forma ideal de estructurar nuestra pagina y tambien de esta forma la estructura es responsive*/}
            <Stack direction="row" spacing={2} justifyContent="space-between">
                {/*A cada uno de estos elementos se le daran unidades flex para que tengan su respectivo espacio en la pagina*/}
                <Sidebar/>
                <Feed/>
                <Rightbar/>
            </Stack>

        </Box>
    );
}

export default App;
