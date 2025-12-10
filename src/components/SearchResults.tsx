import type {SearchResultsProps} from "../types/global.ts";
import {SearchResultItem} from "./SearchResultItem.tsx";

export const SearchResults = ({cities}: SearchResultsProps) => {
    if (cities.length === 0) {
        return null;
    }

    return (
        <>
            {cities.map((city, index) => (
                <div key={`${city.name}-${index}`}>
                    <SearchResultItem city={city}/>
                </div>
            ))}
        </>
    );
};