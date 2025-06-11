import { render, screen } from '@testing-library/react';
import ProjectsSection from '../app/components/ProjectsSection';

describe('ProjectsSection', () => {
  it('renders project titles and links', () => {
    render(<ProjectsSection />);

    expect(screen.getByText('Portfolio Website')).toBeInTheDocument();
    expect(screen.getByText('Coming Soon!')).toBeInTheDocument();

    const links = screen.getAllByRole('link', { name: /View Project/i });
    expect(links).toHaveLength(2);
    expect(links[0]).toHaveAttribute('href', 'https://yourname.vercel.app');
  });
});
