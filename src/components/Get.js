import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';

const Get = () => {

    const fetchData = ()=>{
        return axios.get('https://gorest.co.in/public/v2/users');
    }

    const { data, isLoading, error, isError, isFetching } = useQuery('get-data', fetchData, 
    {
        cacheTime: '10000', // default time 5 min. 5min browser will cached these data.
        staleTime: 0, // default 0. if 10 sec then fetch/re-fetch will not happen in this time.
        refetchOnMount: true, // default true that means when component will mount component will refetch data. if false then only first time will fetch when mount.
        refetchOnWindowFocus: true, // default true. when window will focus it will re-fetch data.
        refetchInterval: false, // default false. that mean's frequently data will not fetch. when i will set 2000(2 sec) then every 2 sec later frequently it will refetch.
        refetchIntervalInBackground: true, // if true it will work in background.
    })


    return (
        <h1>Hello world bd</h1>
    )
}

export default Get;