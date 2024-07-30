export const Select = ({ options, selectRef, placeholder }) => {
    return (
        <select ref={selectRef} className="block w-full mt-4 p-2 border border-gray-300 rounded" defaultValue={'Select any'}>
            <option value="" disabled>{placeholder}</option>
            {options.map((option, index) => (
                <option key={index} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
};
