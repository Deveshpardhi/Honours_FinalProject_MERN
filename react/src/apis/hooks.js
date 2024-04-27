import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:5000';

const apis = {
    useAxiosPost: (endpoint, jsonData, headers) => {
        const [response, setResponse] = useState(null);
        const [error, setError] = useState('');
        const [loading, setLoading] = useState(true);

        const fetchData = useCallback(() => {
            axios
                .post(endpoint, jsonData, headers)
                .then((res) => {
                    if (res.data.success) {
                        setResponse(res.data.data);
                    } else {
                        setError(res.data.message);
                    }
                })
                .catch((err) => {
                    setError(err);
                })
                .finally(() => {
                    setLoading(false);
                });
        }, [endpoint, jsonData, headers]);

        useEffect(() => {
            fetchData();
        }, [fetchData]);

        return { response, error, loading };
    },
    useAxiosGet: (endpoint, headers) => {
        const [response, setResponse] = useState(null);
        const [error, setError] = useState('');
        const [loading, setLoading] = useState(true);

        const fetchData = useCallback(() => {
            axios
                .get(endpoint, headers)
                .then((res) => {
                    console.log(`GOT DATA ${JSON.stringify(res)}`);
                    if (res.data.success) {
                        setResponse(res.data.data);
                    } else {
                        setError(res.data.message);
                    }
                })
                .catch((err) => {
                    setError(err);
                })
                .finally(() => {
                    setLoading(false);
                });
        }, [endpoint, headers]);

        useEffect(() => {
            fetchData();
        }, [fetchData]);

        return { response, error, loading };
    },
};

export { apis as apiHooks };
