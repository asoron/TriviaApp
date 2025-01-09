/** @format */

import React, { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { lightTheme, darkTheme } from './theme';
import Settings from './components/Settings';
import QuestionCard from './components/QuestionCard';
import Score from './components/Score';
import { LanguageProvider } from './contexts/LanguageContext';
import { Box } from '@mui/material';
import './styles/global.css';

function App() {
	const [theme, setTheme] = useState('dark');
	const [gameStarted, setGameStarted] = useState(false);
	const [questions, setQuestions] = useState([]);
	const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
	const [score, setScore] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [correctAnswers, setCorrectAnswers] = useState(0);
	const [wrongAnswers, setWrongAnswers] = useState(0);

	const toggleTheme = () =>
		setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));

	const handleStart = (newQuestions) => {
		setQuestions(newQuestions);
		setGameStarted(true);
		setCurrentQuestionIndex(0);
		setScore(0);
		setShowScore(false);
		setCorrectAnswers(0);
		setWrongAnswers(0);
	};

	const handleAnswer = (correct) => {
		if (correct) {
			setScore(score + 1);
			setCorrectAnswers((prev) => prev + 1);
		} else {
			setWrongAnswers((prev) => prev + 1);
		}

		setTimeout(() => {
			if (currentQuestionIndex < questions.length - 1) {
				setCurrentQuestionIndex(currentQuestionIndex + 1);
			} else {
				setShowScore(true);
			}
		}, 2000);
	};

	const handleRestart = () => {
		setGameStarted(false);
		setShowScore(false);
		setQuestions([]);
		setCurrentQuestionIndex(0);
		setScore(0);
		setCorrectAnswers(0);
		setWrongAnswers(0);
	};

	const commonBoxStyles = {
		width: '100%',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	};

	return (
		<ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
			<LanguageProvider>
				<CssBaseline />
				<Box
					sx={{
						...commonBoxStyles,
						minHeight: '100vh',
						background:
							theme === 'light'
								? 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)'
								: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
						padding: { xs: '0.5rem', sm: '1rem' },
					}}
				>
					<Box
						sx={{
							...commonBoxStyles,
							maxWidth: '800px',
							margin: '0 auto',
							minHeight: {
								xs: 'calc(100vh - 1rem)',
								sm: 'calc(100vh - 2rem)',
							},
						}}
					>
						{!gameStarted && !showScore && (
							<Settings
								onStart={handleStart}
								onThemeToggle={toggleTheme}
								theme={theme}
							/>
						)}
						{gameStarted && !showScore && (
							<QuestionCard
								question={questions[currentQuestionIndex]}
								onAnswer={handleAnswer}
								currentQuestion={currentQuestionIndex + 1}
								totalQuestions={questions.length}
								onRestart={handleRestart}
								correctCount={correctAnswers}
								incorrectCount={wrongAnswers}
							/>
						)}
						{showScore && (
							<Score
								score={score}
								total={questions.length}
								onRestart={handleRestart}
								correctAnswers={correctAnswers}
								wrongAnswers={wrongAnswers}
							/>
						)}
					</Box>
				</Box>
			</LanguageProvider>
		</ThemeProvider>
	);
}

export default App;
