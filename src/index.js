import React from 'react';
import ReactDom from 'react-dom';
import App from './App';
import { QueryClientProvider, QueryClient } from 'react-query';

const queryClient = new QueryClient();

ReactDom.render(
    <QueryClientProvider client={queryClient}>
        <App />
    </QueryClientProvider>
, document.getElementById('root'));