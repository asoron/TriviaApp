/** @format */

import { createTheme } from '@mui/material/styles';

const commonComponents = {
	MuiCard: {
		styleOverrides: {
			root: {
				boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
				borderRadius: 24,
				transition:
					'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
				padding: '32px',
				margin: '20px 0',
				backdropFilter: 'blur(8px)',
				'&:hover': {
					transform: 'translateY(-4px)',
					boxShadow: '0 12px 40px rgba(0, 0, 0, 0.2)',
				},
			},
		},
	},
	MuiButton: {
		styleOverrides: {
			root: {
				borderRadius: 12,
				textTransform: 'none',
				padding: '14px 32px',
				fontSize: '1.1rem',
				fontWeight: 600,
				transition: 'all 0.3s ease-in-out',
				margin: '8px 0',
				'&:hover': {
					transform: 'translateY(-2px)',
					boxShadow: '0 6px 20px rgba(0, 0, 0, 0.2)',
				},
			},
			contained: {
				background: 'linear-gradient(45deg, #2196f3 30%, #21cbf3 90%)',
				boxShadow: '0 4px 20px rgba(33, 150, 243, 0.3)',
				'&:hover': {
					background:
						'linear-gradient(45deg, #1976d2 30%, #00b4e5 90%)',
				},
			},
		},
	},
	MuiToggleButton: {
		styleOverrides: {
			root: {
				borderRadius: 12,
				padding: '12px 24px',
				transition: 'all 0.3s ease-in-out',
				'&.Mui-selected': {
					transform: 'scale(1.05)',
					background:
						'linear-gradient(45deg, #2196f3 30%, #21cbf3 90%)',
					color: 'white',
					boxShadow: '0 4px 20px rgba(33, 150, 243, 0.3)',
				},
			},
		},
	},
	MuiIconButton: {
		styleOverrides: {
			root: {
				padding: 12,
				transition: 'all 0.3s ease-in-out',
				'&:hover': {
					transform: 'scale(1.1) rotate(5deg)',
					background: 'rgba(255, 255, 255, 0.1)',
				},
			},
		},
	},
	MuiSelect: {
		styleOverrides: {
			root: {
				borderRadius: 12,
				marginBottom: '20px',
			},
		},
	},
	MuiTypography: {
		styleOverrides: {
			h4: {
				fontWeight: 700,
				letterSpacing: '-0.5px',
				marginBottom: '24px',
				background: 'linear-gradient(45deg, #2196f3, #21cbf3)',
				WebkitBackgroundClip: 'text',
				WebkitTextFillColor: 'transparent',
			},
			h5: {
				fontWeight: 600,
				letterSpacing: '-0.3px',
				marginBottom: '20px',
			},
			h6: {
				marginBottom: '16px',
				fontWeight: 500,
			},
		},
	},
	MuiContainer: {
		styleOverrides: {
			root: {
				paddingTop: '40px',
				paddingBottom: '40px',
			},
		},
	},
};

export const lightTheme = createTheme({
	palette: {
		mode: 'light',
		primary: {
			main: '#2563eb',
			light: '#3b82f6',
			dark: '#1d4ed8',
		},
		secondary: {
			main: '#f43f5e',
			light: '#fb7185',
			dark: '#e11d48',
		},
		info: {
			main: '#06b6d4',
			light: '#22d3ee',
			dark: '#0891b2',
		},
		warning: {
			main: '#f59e0b',
			light: '#fbbf24',
			dark: '#d97706',
		},
		success: {
			main: '#10b981',
			light: '#34d399',
			dark: '#059669',
		},
		error: {
			main: '#ef4444',
			light: '#f87171',
			dark: '#dc2626',
		},
		background: {
			default: '#f8fafc',
			paper: '#ffffff',
		},
		text: {
			primary: '#1e293b',
			secondary: '#475569',
		},
	},
	components: {
		...commonComponents,
		MuiCard: {
			styleOverrides: {
				root: {
					...commonComponents.MuiCard.styleOverrides.root,
					backgroundColor: '#ffffff',
					backgroundImage:
						'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
					border: '1px solid rgba(71, 85, 105, 0.2)',
					boxShadow: '0 8px 32px rgba(71, 85, 105, 0.1)',
					'&:hover': {
						boxShadow: '0 12px 40px rgba(71, 85, 105, 0.2)',
						transform: 'translateY(-4px)',
					},
				},
			},
		},
		MuiButton: {
			styleOverrides: {
				root: {
					...commonComponents.MuiButton.styleOverrides.root,
					borderColor: 'rgba(71, 85, 105, 0.2)',
					color: '#1e293b',
					'&.Mui-selected': {
						backgroundColor: '#2563eb',
						color: '#ffffff',
						borderColor: '#2563eb',
						boxShadow: '0 4px 12px rgba(37, 99, 235, 0.3)',
					},
					'&[color="success"]': {
						color: '#059669',
					},
					'&[color="warning"]': {
						color: '#d97706',
					},
					'&[color="error"]': {
						color: '#dc2626',
					},
				},
				contained: {
					background:
						'linear-gradient(45deg, #2563eb 30%, #3b82f6 90%)',
					color: '#ffffff',
					boxShadow: '0 4px 20px rgba(37, 99, 235, 0.3)',
					'&:hover': {
						background:
							'linear-gradient(45deg, #1d4ed8 30%, #2563eb 90%)',
						boxShadow: '0 6px 24px rgba(37, 99, 235, 0.4)',
					},
				},
			},
		},
		MuiSelect: {
			styleOverrides: {
				root: {
					backgroundColor: '#ffffff',
					borderColor: 'rgba(71, 85, 105, 0.2)',
					color: '#1e293b',
					'&:hover': {
						borderColor: 'rgba(37, 99, 235, 0.4)',
					},
					'&.Mui-focused': {
						borderColor: '#2563eb',
						boxShadow: '0 0 0 2px rgba(37, 99, 235, 0.2)',
					},
				},
			},
		},
		MuiTypography: {
			styleOverrides: {
				root: {
					color: '#1e293b',
				},
				h4: {
					fontWeight: 700,
					letterSpacing: '-0.5px',
					marginBottom: '24px',
					background: 'linear-gradient(45deg, #2563eb, #3b82f6)',
					WebkitBackgroundClip: 'text',
					WebkitTextFillColor: 'transparent',
				},
				h5: {
					fontWeight: 600,
					letterSpacing: '-0.3px',
					marginBottom: '20px',
					color: '#1e293b',
				},
				h6: {
					marginBottom: '16px',
					fontWeight: 500,
					color: '#1e293b',
				},
			},
		},
		MuiToggleButton: {
			styleOverrides: {
				root: {
					...commonComponents.MuiToggleButton.styleOverrides.root,
					color: '#475569',
					'&.Mui-selected': {
						background:
							'linear-gradient(45deg, #2563eb 30%, #3b82f6 90%)',
						color: '#ffffff',
						boxShadow: '0 4px 20px rgba(37, 99, 235, 0.3)',
					},
				},
			},
		},
		MuiCssBaseline: {
			styleOverrides: {
				':root': {
					'--text-color': '#1e293b',
				},
			},
		},
	},
	typography: {
		fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
	},
	shape: {
		borderRadius: 16,
	},
});

export const darkTheme = createTheme({
	palette: {
		mode: 'dark',
		primary: {
			main: '#6366f1',
			light: '#818cf8',
			dark: '#4f46e5',
		},
		secondary: {
			main: '#f472b6',
			light: '#f9a8d4',
			dark: '#ec4899',
		},
		success: {
			main: '#10b981',
			light: '#34d399',
			dark: '#059669',
		},
		error: {
			main: '#ef4444',
			light: '#f87171',
			dark: '#dc2626',
		},
		warning: {
			main: '#f59e0b',
			light: '#fbbf24',
			dark: '#d97706',
		},
		info: {
			main: '#3b82f6',
			light: '#60a5fa',
			dark: '#2563eb',
		},
		background: {
			default: '#0f172a',
			paper: '#1e293b',
		},
		text: {
			primary: '#f8fafc',
			secondary: '#e2e8f0',
		},
	},
	components: {
		...commonComponents,
		MuiCard: {
			styleOverrides: {
				root: {
					...commonComponents.MuiCard.styleOverrides.root,
					backgroundColor: 'rgba(30, 41, 59, 0.95)',
					backgroundImage: 'none',
					border: '1px solid rgba(255, 255, 255, 0.1)',
					boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
				},
			},
		},
		MuiButton: {
			styleOverrides: {
				root: {
					...commonComponents.MuiButton.styleOverrides.root,
					borderRadius: 12,
					padding: '10px 24px',
					fontSize: '1rem',
					boxShadow: 'none',
					'&.Mui-selected': {
						background: '#6366f1',
						color: '#ffffff',
						boxShadow: 'none',
					},
					'&:hover': {
						boxShadow: 'none',
						transform: 'translateY(-2px)',
					},
					'&[color="success"]': {
						color: '#34d399',
					},
					'&[color="warning"]': {
						color: '#fbbf24',
					},
					'&[color="error"]': {
						color: '#f87171',
					},
				},
				contained: {
					background: '#6366f1',
					boxShadow: 'none',
					'&:hover': {
						background: '#4f46e5',
						boxShadow: 'none',
					},
				},
			},
		},
		MuiTypography: {
			styleOverrides: {
				root: {
					color: '#f8fafc',
				},
				h4: {
					color: '#f8fafc',
					fontWeight: 700,
				},
				h5: {
					color: '#f8fafc',
					fontWeight: 600,
				},
				h6: {
					color: '#e2e8f0',
					fontWeight: 500,
				},
			},
		},
		MuiSelect: {
			styleOverrides: {
				root: {
					backgroundColor: 'rgba(30, 41, 59, 0.8)',
					borderColor: 'rgba(255, 255, 255, 0.1)',
					color: '#f8fafc',
					'&:hover': {
						borderColor: '#6366f1',
					},
					'&.Mui-focused': {
						borderColor: '#6366f1',
						boxShadow: 'none',
					},
				},
			},
		},
		MuiCssBaseline: {
			styleOverrides: {
				':root': {
					'--text-color': '#f8fafc',
				},
			},
		},
	},
	typography: {
		fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
	},
	shape: {
		borderRadius: 16,
	},
});
