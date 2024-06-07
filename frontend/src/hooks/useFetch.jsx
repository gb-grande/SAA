import axios from "axios";
import {useEffect, useState} from "react";

function useFetch(url, {config = {}, defaultValue = undefined, postProcessFunc = undefined, dependencies = []}){
    const [result, setResult] = useState(defaultValue);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    function setAndProcess(data){
        if (postProcessFunc) data = postProcessFunc(data);
        setResult(data);
    }

    useEffect(() => {
        //Uses 'ignore' variable to avoid race conditions.
        let ignore = false;

        setLoading(true);
        axios.get(url, config)
            .then(res => {if (!ignore) setAndProcess(res.data);})
            .catch(err => setError(err))
            .finally(() => setLoading(false));

        return () => {
            ignore = true;
        };
    }, dependencies);

    function reFetch(){
        setLoading(true);
        axios.get(url, config)
            .then(res => setAndProcess(res.data))
            .catch(err => setError(err))
            .finally(() => setLoading(false));
    }

    return {result, setResult, error, reFetch, loading, setLoading};
}

export default useFetch;