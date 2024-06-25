import axios from "axios";
import {useEffect, useState} from "react";

/**
 * Custom hook for fetching data from a specified URL using Axios.
 * Manages loading state, error handling, and optional data processing.
 * 
 * @param {string} url The URL endpoint to fetch data from.
 * @param {object} options.config Additional Axios configuration options.
 * @param {*} options.defaultValue Default value to set before data is fetched.
 * @param {Function} options.postProcessFunc Optional function to process fetched data.
 * @param {Array} options.dependencies List of dependencies to trigger a re-fetch when changed.
 * @returns {object} Object containing result data, error state, loading state, and re-fetch function.
 */
function useFetch(url, {config = {}, defaultValue = undefined, postProcessFunc = undefined, dependencies = []}) {
    const [result, setResult] = useState(defaultValue);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    function setAndProcess(data){
        if (postProcessFunc) data = postProcessFunc(data);
        setResult(data);
    }

    useEffect(() => {
        // Uses 'ignore' variable to avoid race conditions.
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