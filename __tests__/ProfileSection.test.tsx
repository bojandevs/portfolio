import { render, screen } from '@testing-library/react';
import ProfileSection from '../app/components/ProfileSection';

describe('ProfileSection', () => {
  it('renders the correct email link', () => {
    render(<ProfileSection />);
    const link = screen.getByRole('link', { name: /bojandev@gmail.com/i });
    expect(link).toHaveAttribute('href', 'mailto:bojandev@gmail.com');
  });

  it('renders the profile image with correct object position', () => {
    render(<ProfileSection />);
    const img = screen.getByAltText('Profile');
    expect(img).toHaveStyle({ objectPosition: '50% 20%' });
  });
});
