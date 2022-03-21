import React from 'react';
import { render } from 'enzyme';

import ProjectsPage from '../../pages/projects';

describe('<ProjectsPage />', () => {
  it('should have main element', () => {
    const wrapper = render(<ProjectsPage />);
    expect(wrapper.closest('main')).toHaveLength(1);
  });
});