// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders MerkleCanvas title', () => {
    render(<App />);
    const titleElement = screen.getByText(/MerkleCanvas/i);
    expect(titleElement).toBeInTheDocument();
});
