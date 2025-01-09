/** @format */

import React, { useState, useEffect } from 'react';
import {
	Card,
	CardContent,
	Typography,
	Button,
	Box,
	IconButton,
	FormControl,
	Select,
	MenuItem,
	ToggleButton,
	ToggleButtonGroup,
	CircularProgress,
} from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import LanguageIcon from '@mui/icons-material/Language';
import CategoryIcon from '@mui/icons-material/Category';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import FilterListIcon from '@mui/icons-material/FilterList';
import { useLanguage } from '../contexts/LanguageContext';
import { getCategories, getQuestions } from '../services/triviaService';
import '../styles/Settings.css';

function Settings({ onStart, onThemeToggle, theme }) {
	const [categories, setCategories] = useState([]);
	const [selectedCategory, setSelectedCategory] = useState('');
	const [questionCount, setQuestionCount] = useState(10);
	const [difficulty, setDifficulty] = useState('');
	const [questionType, setQuestionType] = useState('');
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const { toggleLanguage, getText } = useLanguage();

	useEffect(() => {
		const fetchCategories = async () => {
			setLoading(true);
			try {
				const data = await getCategories();
				setCategories(data);
				setSelectedCategory('');
			} catch (error) {
				console.error('Error fetching categories:', error);
				setError(getText('settings', 'errors').failedToLoadCategories);
			}
			setLoading(false);
		};

		fetchCategories();
	}, [getText]);

	const handleStart = async () => {
		setLoading(true);
		setError(null);

		try {
			const questions = await getQuestions(
				questionCount,
				selectedCategory,
				difficulty,
				questionType
			);
			onStart(questions);
		} catch (error) {
			console.error('Error fetching questions:', error);
			if (error.message.includes('No results')) {
				setError(getText('settings', 'errors').notEnoughQuestions);
			} else if (error.message.includes('Network Error')) {
				setError(getText('settings', 'errors').networkError);
			} else {
				setError(getText('settings', 'errors').failedToLoadQuestions);
			}
			setLoading(false);
		}
	};

	const renderFormSection = (title, icon, content) => (
		<Box className='form-section'>
			<Typography
				variant='h6'
				className='section-title'
				gutterBottom
			>
				{icon} {getText('settings', title)}
			</Typography>
			{content}
		</Box>
	);

	return (
		<Card className='settings-card'>
			<CardContent className='settings-content'>
				<Box className='settings-header'>
					<Typography
						variant='h4'
						className='settings-title'
					>
						{getText('settings', 'title')}
					</Typography>
					<Box className='settings-controls'>
						<IconButton
							onClick={toggleLanguage}
							className='control-button'
						>
							<LanguageIcon />
						</IconButton>
						<IconButton
							onClick={onThemeToggle}
							className='control-button'
						>
							{theme === 'dark' ? (
								<Brightness7Icon />
							) : (
								<Brightness4Icon />
							)}
						</IconButton>
					</Box>
				</Box>

				<Box className='settings-form'>
					{renderFormSection(
						'category',
						<CategoryIcon />,
						<FormControl fullWidth>
							<Select
								value={selectedCategory}
								onChange={(e) =>
									setSelectedCategory(e.target.value)
								}
								className='category-select'
								disabled={loading}
								displayEmpty
							>
								<MenuItem value=''>
									{getText('settings', 'anyCategory')}
								</MenuItem>
								{categories.map((category) => (
									<MenuItem
										key={category.id}
										value={category.id}
									>
										{getText('categories', category.name) ||
											category.name}
									</MenuItem>
								))}
							</Select>
						</FormControl>
					)}

					{renderFormSection(
						'questionCount',
						<QuestionAnswerIcon />,
						<ToggleButtonGroup
							value={questionCount}
							exclusive
							onChange={(_, value) => setQuestionCount(value)}
							className='button-grid'
						>
							{[5, 10, 15, 20].map((count) => (
								<ToggleButton
									key={count}
									value={count}
									className='option-button'
								>
									{count}
								</ToggleButton>
							))}
						</ToggleButtonGroup>
					)}

					{renderFormSection(
						'difficulty',
						<FilterListIcon />,
						<ToggleButtonGroup
							value={difficulty}
							exclusive
							onChange={(_, value) => setDifficulty(value)}
							className='button-grid'
						>
							{['Easy', 'Medium', 'Hard'].map((level) => (
								<ToggleButton
									key={level}
									value={level.toLowerCase()}
									className='option-button'
									color={
										level === 'Easy'
											? 'success'
											: level === 'Medium'
											? 'warning'
											: 'error'
									}
								>
									{level}
								</ToggleButton>
							))}
						</ToggleButtonGroup>
					)}

					{renderFormSection(
						'questionType',
						<FilterListIcon />,
						<ToggleButtonGroup
							value={questionType}
							exclusive
							onChange={(_, value) => setQuestionType(value)}
							className='button-grid'
						>
							{['Multiple Choice', 'True/False'].map((type) => (
								<ToggleButton
									key={type}
									value={
										type === 'Multiple Choice'
											? 'multiple'
											: 'boolean'
									}
									className='option-button'
								>
									{type === 'Multiple Choice'
										? getText('settings', 'multipleChoice')
										: getText('settings', 'trueFalse')}
								</ToggleButton>
							))}
						</ToggleButtonGroup>
					)}
				</Box>

				{error && (
					<Typography
						variant='body1'
						color='error'
						className='error-message'
					>
						{error}
					</Typography>
				)}

				<Button
					variant='contained'
					size='large'
					onClick={handleStart}
					disabled={loading}
					className='start-button'
				>
					{loading ? (
						<CircularProgress
							size={24}
							className='loading-indicator'
						/>
					) : (
						getText('settings', 'startButton')
					)}
				</Button>
			</CardContent>
		</Card>
	);
}

export default Settings;
