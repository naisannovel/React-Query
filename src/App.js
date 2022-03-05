import React from 'react';
import Get from './components/Get';

// React Query DevTools
import { ReactQueryDevtools } from 'react-query/devtools';

const App = () =>{
    return (
        <>
            <Get />
            <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
        </>
    )
}

export default App;