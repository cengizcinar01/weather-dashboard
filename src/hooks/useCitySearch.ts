import type {City} from "../types/global.ts";
import {useEffect, useState} from "react";
import {useDebounce} from "./useDebounce.ts";
import {fetchCities} from "../services/geocodingService.ts";

export function useCitySearch(searchTerm: string) {
    const [cities, setCities] = useState<City[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const debouncedSearchTerm = useDebounce(searchTerm, 500);

    useEffect(() => {
        if (debouncedSearchTerm.length < 3) {
            setCities([]);
            setError(null);
            return;
        }

        const loadData = async () => {
            setIsLoading(true);
            setError(null);

            try {
                const result = await fetchCities(debouncedSearchTerm);
                setCities(result);
            } catch (err) {
                console.error(err);
                setError("Es gab ein Problem beim Laden der Städte.");
                setCities([]);
            } finally {
                setIsLoading(false);
            }
        };

        void loadData();
    }, [debouncedSearchTerm]);

    return {
        cities,
        isLoading,
        error
    }
}