import React from 'react';


import {UserListingPage} from "pages";
import {QueryClient, QueryClientProvider} from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            refetchOnReconnect: false,
            retry: false,
            staleTime: 5 * 60 * 1000,
        },
    },
})


function App() {
    return (
        <div className="App">
            <QueryClientProvider client={queryClient}>
                <UserListingPage/>
                <ReactQueryDevtools initialIsOpen={false}/>
            </QueryClientProvider>

        </div>
    );
}

export default App;
