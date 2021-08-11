import React from 'react';
// import Search from './components/search';
import './css/main.css'

import {ThemeProvider} from '@material-ui/core/styles'
import theme from './css/temaConfig'
import Contenedor from './components/Contenedor';

function App() {
  return (
    <ThemeProvider theme={theme}>
    <Contenedor/>
    {/* <Search/> */}
    </ThemeProvider>
  );
}

export default App;
