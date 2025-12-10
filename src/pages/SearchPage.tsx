import {useState} from "react";
import {useCitySearch} from "../hooks/useCitySearch.ts";
import {SearchInput} from "../components/SearchInput.tsx";
import {SearchResults} from "../components/SearchResults.tsx";

export const SearchPage = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const {cities, isLoading, error} = useCitySearch(searchTerm);

    const showValidationHint = searchTerm.length > 0 && searchTerm.length < 3;

    return (
        <>
            <SearchInput
                value={searchTerm}
                onSearchChange={setSearchTerm}
            />

            {showValidationHint && (
                <div>Bitte mindestens 3 Zeichen eingeben</div>
            )}

            {isLoading && (
                <div>Lade Daten...</div>
            )}

            {error && (
                <div>{error}</div>
            )}

            {!isLoading && !error && !showValidationHint && searchTerm.length >= 3 && cities.length === 0 && (
                <p>Keine Städte gefunden.</p>
            )}

            <SearchResults cities={cities}/>

        </>
    );
};