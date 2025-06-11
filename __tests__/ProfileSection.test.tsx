import { render, screen } from '@testing-library/react';
import ProfileSection from '../app/components/ProfileSection';

describe('ProfileSection', () => {
  it('renders the correct email link', () => {
    render(<ProfileSection />);
    const link = screen.getByRole('link', { name: /bojandev@gmail.com/i });
    expect(link).toHaveAttribute('href', 'mailto:bojandev@gmail.com');
  });
});
