import {useState,useEffect} from 'react'

const useFetch =<T> (url:string) => {
    const [data,setData]=useState<T | null>(null);
    const [loading,setLoading]=useState(true);


    useEffect(()=>{
        const fetchData = async()=>{
            setLoading(true);
                const response = await fetch (url);
                const result = await response.json();
                setData(result);
                setLoading(false);
        };

        fetchData();


    },[url])

    return {data,loading};



  
};

export default useFetch