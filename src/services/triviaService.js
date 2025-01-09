/** @format */

import axios from 'axios';

const BASE_URL = 'https://opentdb.com';

export const getCategories = async () => {
	try {
		const response = await axios.get(`${BASE_URL}/api_category.php`);
		if (
			response.data.trivia_categories &&
			Array.isArray(response.data.trivia_categories)
		) {
			// Sort categories by name for better organization
			return response.data.trivia_categories.sort((a, b) =>
				a.name.localeCompare(b.name)
			);
		}
		throw new Error('Invalid categories data received');
	} catch (error) {
		console.error('Error fetching categories:', error);
		return [];
	}
};

export const getQuestions = async (
	amount = 10,
	category = '',
	difficulty = '',
	type = 'multiple'
) => {
	try {
		let url = `${BASE_URL}/api.php?amount=${amount}&type=${type}`;
		if (category) url += `&category=${category}`;
		if (difficulty) url += `&difficulty=${difficulty.toLowerCase()}`;

		const response = await axios.get(url);

		if (
			response.data.response_code === 0 &&
			Array.isArray(response.data.results)
		) {
			return response.data.results;
		} else if (response.data.response_code === 1) {
			throw new Error(
				'Not enough questions available for these criteria'
			);
		} else if (response.data.response_code === 2) {
			throw new Error('Invalid parameter in API request');
		} else {
			throw new Error('Failed to fetch questions');
		}
	} catch (error) {
		console.error('Error fetching questions:', error);
		if (error.response?.status === 429) {
			throw new Error('Too many requests. Please try again later.');
		}
		throw error;
	}
};
