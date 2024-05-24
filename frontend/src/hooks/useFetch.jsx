import axios from "axios";
import {useEffect, useState} from "react";

function useFetch(url, config, defaultValue){
    const [result, setResult] = useState(defaultValue);
    const [error, setError] = useState(null);

    useEffect(() => {
        //Uses 'ignore' variable to avoid race conditions.
        let ignore = false;

        axios.get(url, config)
            .then(res => {if (!ignore) setResult(res.data);})
            .catch(err => setError(err));

        return () => {
            ignore = true;
        };
    }, []);

    return {result, setResult, error};
}

export default useFetch;