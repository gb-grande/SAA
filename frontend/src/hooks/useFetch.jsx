import axios from "axios";
import {useEffect, useState} from "react";

function useFetch(url, config = {}, defaultValue = undefined, dependencies = []){
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
    }, dependencies);

    function reFetch(){
        axios.get(url, config)
            .then(res => setResult(res.data))
            .catch(err => setError(err));
    }

    return {result, setResult, error, reFetch};
}

export default useFetch;