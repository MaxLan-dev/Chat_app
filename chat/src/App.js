import React from 'react';
import { ThemeProvider } from 'styled-components';
import Chat from './Components/Chat';
import './Components/Chat.css';

const theme = {
dark: {
background: '#333',
color: '#fff',
},
light: {
background: '#fff',
color: '#333',
},
}

function App() {
return (
<ThemeProvider theme={theme}>
<div className="App">
<Chat />
</div>
</ThemeProvider>
);
}

export default App;


