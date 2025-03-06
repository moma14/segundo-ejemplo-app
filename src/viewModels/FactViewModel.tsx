import { useState, useEffect } from "react";
import { FetchCatAPI } from "../services/QuizFetch";

export const useCatFact = () => {
    const [fact, setFact] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const showFetch = async() => {
        setLoading(true);
        setError(null);

        try {
            const fetch = await FetchCatAPI();
            setFact(fetch); 
        } catch (error) {
            setError('Este es el error!');
        } finally {
            setLoading(false);
        }
    }
    useEffect(() => {
        showFetch();
    }, []);

    return { fact, loading, error, showFetch }
}

