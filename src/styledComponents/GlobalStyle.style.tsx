import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		font-family: -apple-system, "BlinkMacSystemFont", "Segoe UI", "Helvetica", "Arial", sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
		font-style: normal;
	}
	body {
		background-color: ${(props) => props.theme.backgroundColor};
	}
`;

export default GlobalStyle;
