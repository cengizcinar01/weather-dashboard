import type {SearchInputProps} from "../types/global.ts";

export const SearchInput = ({value, onSearchChange}: SearchInputProps) => {
    return (
        <input
            type="text"
            placeholder="Stadt suchen..."
            value={value}
            onChange={(e) => onSearchChange(e.target.value)}
        />
    );
}