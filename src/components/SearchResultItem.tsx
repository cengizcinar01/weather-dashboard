import type {SearchResultItemProps} from "../types/global.ts";

export const SearchResultItem = ({city}: SearchResultItemProps) => {
    
    const formattedPopulation = new Intl.NumberFormat('de-DE').format(city.population ?? 0);

    return (
        <>
            <h3>{city.name}</h3>
            <div>
                <span>{city.country}</span>
                <span>{formattedPopulation}</span>
            </div>
        </>
    )
}