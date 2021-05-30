import React, { useState } from 'react';

const App: React.FunctionComponent = () => {
    const [state, setState] = useState('Hello world1');
    return <h1>{state}</h1>;
};

export default App;
