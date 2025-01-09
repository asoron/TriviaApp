/** @format */

import React, { useState, useEffect, useMemo } from 'react';
import '../styles/QuestionCard.css';
import {
	Card,
	CardContent,
	Typography,
	Button,
	Box,
	IconButton,
} from '@mui/material';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';

const decodeHtml = (html) => {
	const txt = document.createElement('textarea');
	txt.innerHTML = html;
	return txt.value;
};

function QuestionCard({
	question,
	onAnswer,
	currentQuestion,
	totalQuestions,
	onRestart,
	correctCount,
	incorrectCount,
}) {
	const [selectedAnswer, setSelectedAnswer] = useState(null);
	const [showFeedback, setShowFeedback] = useState(false);

	const answers = useMemo(() => {
		if (!question) return [];
		return [question.correct_answer, ...question.incorrect_answers]
			.map(decodeHtml)
			.sort(() => Math.random() - 0.5);
	}, [question]);

	useEffect(() => {
		setSelectedAnswer(null);
		setShowFeedback(false);
	}, [question]);

	const handleAnswer = (answer) => {
		const correct = answer === decodeHtml(question.correct_answer);
		setSelectedAnswer(answer);
		setShowFeedback(true);
		onAnswer(correct);
	};

	if (!question) return null;

	const progress = (currentQuestion / totalQuestions) * 100;

	return (
		<Card className='question-card'>
			<CardContent className='question-content'>
				<Box className='question-header'>
					<Box className='question-progress'>
						{currentQuestion}/{totalQuestions}
						<Box className='progress-bar'>
							<Box
								className='progress-fill'
								style={{ width: `${progress}%` }}
							/>
						</Box>
						<Box className='score-display'>
							<Box className='score-item correct'>
								<CheckCircleIcon fontSize='small' />
								{correctCount}
							</Box>
							<Box className='score-item incorrect'>
								<CancelIcon fontSize='small' />
								{incorrectCount}
							</Box>
						</Box>
					</Box>
					<Box className='question-controls'>
						<IconButton
							onClick={onRestart}
							className='control-button'
						>
							<RestartAltIcon />
						</IconButton>
					</Box>
				</Box>

				<Typography className='question-text'>
					{decodeHtml(question.question)}
				</Typography>

				<Box className='answers-grid'>
					{answers.map((answer, index) => {
						const isSelected = selectedAnswer === answer;
						const isCorrectAnswer =
							answer === decodeHtml(question.correct_answer);
						const isIncorrectSelected =
							isSelected && !isCorrectAnswer;

						return (
							<Button
								key={index}
								onClick={() =>
									!showFeedback && handleAnswer(answer)
								}
								disabled={showFeedback}
								className={`answer-button ${
									showFeedback && isCorrectAnswer
										? 'correct'
										: ''
								} ${
									showFeedback && isIncorrectSelected
										? 'incorrect'
										: ''
								} ${isSelected ? 'selected' : ''}`}
							>
								{answer}
							</Button>
						);
					})}
				</Box>
			</CardContent>
		</Card>
	);
}

export default QuestionCard;
