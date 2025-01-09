/** @format */

import React from 'react';
import {
	Card,
	CardContent,
	Typography,
	Button,
	Box,
	CircularProgress,
	Divider,
} from '@mui/material';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import QuizIcon from '@mui/icons-material/Quiz';
import { useLanguage } from '../contexts/LanguageContext';
import '../styles/Score.css';

function Score({ score, total, correctAnswers, wrongAnswers, onRestart }) {
	const percentage = Math.round((score / total) * 100);
	const { getText } = useLanguage();

	const getFeedbackMessage = () => {
		if (percentage >= 80) return getText('score', 'excellent');
		if (percentage >= 60) return getText('score', 'good');
		return getText('score', 'needsImprovement');
	};

	const getScoreClass = () => {
		if (percentage >= 80) return 'excellent';
		if (percentage >= 60) return 'good';
		return 'needs-improvement';
	};

	const renderStatBox = (icon, value, label) => (
		<Box className={`stat-box ${label.toLowerCase()}-stats`}>
			{icon}
			<Typography
				variant='h5'
				className='stat-value'
			>
				{value}
			</Typography>
			<Typography
				variant='body2'
				className='stat-label'
			>
				{getText('game', label)}
			</Typography>
		</Box>
	);

	const scoreClass = getScoreClass();

	return (
		<Card className={`score-card ${scoreClass}`}>
			<CardContent className='score-content'>
				<Box className='score-header'>
					<Typography
						variant='h4'
						className='score-title animate-title'
					>
						{getText('game', 'complete')}
					</Typography>
				</Box>

				<Box className='score-progress-container'>
					<Box className='progress-wrapper'>
						<CircularProgress
							variant='determinate'
							value={percentage}
							size={140}
							thickness={5}
							className={`progress-circle ${scoreClass}`}
						/>
						<Box className='progress-content'>
							<Typography
								variant='h4'
								component='div'
								className={`score-value ${scoreClass}`}
							>
								{percentage}%
							</Typography>
						</Box>
					</Box>

					<Typography
						variant='h6'
						className='score-message'
					>
						{getFeedbackMessage()}
					</Typography>
				</Box>

				<Divider className='score-divider' />

				<Box className='stats-container'>
					{renderStatBox(
						<CheckCircleIcon className='stat-icon' />,
						correctAnswers,
						'correct'
					)}
					{renderStatBox(
						<CancelIcon className='stat-icon' />,
						wrongAnswers,
						'incorrect'
					)}
					{renderStatBox(
						<QuizIcon className='stat-icon' />,
						total,
						'totalQuestions'
					)}
				</Box>

				<Button
					variant='contained'
					color='primary'
					fullWidth
					size='large'
					onClick={onRestart}
					className='restart-button'
					startIcon={<EmojiEventsIcon />}
				>
					{getText('game', 'playAgain')}
				</Button>
			</CardContent>
		</Card>
	);
}

export default Score;
