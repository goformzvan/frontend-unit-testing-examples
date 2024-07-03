import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

// this is the biggest bang for your buck in terms of testing.
// it tests all of the user interactions for the App component, which
// includes all of the other tests we have written so far.
//
// if you focus on breaking down your components into smaller, more testable
// ones you can get more value out of the tests you write.
describe('App', () => {
  test('should render the App component', () => {
    render(<App />);

    expect(screen.getByText('Count')).toBeInTheDocument();
    expect(screen.getByText('Reset')).toBeInTheDocument();
    expect(screen.getByText('Current count is 0')).toBeInTheDocument();
  });

  describe('WHEN clicking the Count button', () => {
    test('should increment the count', async () => {
      const user = userEvent.setup();

      render(<App />);

      await user.click(screen.getByText('Count'));

      expect(screen.getByText('Current count is 1')).toBeInTheDocument();
    });

    describe('AND the next count is 5', () => {
      test('should skip to 6', async () => {
        const user = userEvent.setup();

        render(<App />);

        const countButton = screen.getByText('Count');
        // click the button 4 times
        for (let i = 0; i < 4; i++) {
          await user.click(countButton);
        }

        expect(screen.getByText('Current count is 4')).toBeInTheDocument();
        // click the button the 5th time
        await user.click(countButton);

        expect(screen.getByText('Current count is 6')).toBeInTheDocument();
      });
    });

    describe('AND the next count is 17', () => {
      test('should show an error message', async () => {
        const user = userEvent.setup();

        render(<App />);

        const countButton = screen.getByText('Count');

        // click the button 13 times since we skip every 5th count
        for (let i = 0; i < 13; i++) {
          await user.click(countButton);
        }

        expect(screen.getByText('Current count is 16')).toBeInTheDocument();
        // click the button the 17th time
        await user.click(countButton);

        expect(
          screen.getByText('Count cannot be divisible by 17')
        ).toBeInTheDocument();
      });
    });
  });

  describe('WHEN clicking the Reset button', () => {
    test('should reset the count back to 0', async () => {
      const user = userEvent.setup();

      render(<App />);

      const countButton = screen.getByText('Count');
      // click the button 4 times
      for (let i = 0; i < 4; i++) {
        await user.click(countButton);
      }

      expect(screen.getByText('Current count is 4')).toBeInTheDocument();
      // click the button the 5th time
      await user.click(screen.getByText('Reset'));

      expect(screen.getByText('Current count is 0')).toBeInTheDocument();
    });
  });
});
