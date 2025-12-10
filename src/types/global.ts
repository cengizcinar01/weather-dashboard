export interface City {
    name: string;
    country: string;
    population?: number;
}

export interface SearchInputProps {
    value: string;
    onSearchChange: (value: string) => void;
}

export interface SearchResultItemProps {
    city: City;
}

export interface SearchResultsProps {
    cities: City[];
}