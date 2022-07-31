import { useState } from "react";

export const useFetchTasks = () => {
	const [countries, seCountries] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);

	const fetchData = async () => {
		setIsLoading(true);
		try {
			const data = await fetch("https://restcountries.com/v3.1/all");
			const response = await data.json();
			seCountries(response);
			setIsLoading(false);
			setIsError(false);
		} catch (error) {
			setIsLoading(false);
			setIsError("Something went wrong");
		}
	};
	return { fetchData, isLoading, isError, countries };
};
