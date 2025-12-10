import type {City} from "../types/global"

const BASE_URL = "https://geocoding-api.open-meteo.com/v1/search"

export const fetchCities = async (name: string): Promise<City[]> => {
    const url = `${BASE_URL}?name=${encodeURIComponent(name)}&count=5`;

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP Fehler! Status: ${response.status}`);
        }

        const data = await response.json();

        if (!data.results) {
            return [];
        }

        return data.results.map((city: City) => {
            return {
                name: city.name,
                country: city.country,
                population: city.population ?? 0
            }
        });
    } catch (error) {
        console.error("Service Fehler:", error);
        throw error;
    }
}