// import React from 'react';
// import ReactDOM from 'react-dom';
// import { HeroesApp } from './HeroesApp';

// ReactDOM.render(
//     <React.StrictMode>
//         <HeroesApp />
//     </React.StrictMode>,
//     document.getElementById('root')
// );

import React from 'react';
import ReactDOM from 'react-dom/client';
import { HeroesApp } from './HeroesApp';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <HeroesApp />
)

