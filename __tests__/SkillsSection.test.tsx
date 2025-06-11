import { render, screen } from '@testing-library/react';
import SkillsSection from '../app/components/SkillsSection';

describe('SkillsSection', () => {
  it('renders skill categories', () => {
    render(<SkillsSection />);

    const categories = [
      'Languages',
      'Frontend',
      'Tools / Cloud / Misc',
      'Backend / Databases',
    ];

    for (const cat of categories) {
      expect(screen.getByText(cat)).toBeInTheDocument();
    }
  });
});
