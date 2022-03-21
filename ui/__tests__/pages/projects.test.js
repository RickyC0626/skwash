import React from 'react';
import { render, shallow } from 'enzyme';

import ProjectsPage from '../../pages/projects';

describe('<ProjectsPage />', () => {
  it('should be a div with id `#page-wrapper`', () => {
    const wrapper = render(<ProjectsPage />);
    expect(wrapper.is('div')).toBeTruthy();
    expect(wrapper.attr('id')).toBe('page-wrapper');
  });

  it('should have a header', () => {
    const wrapper = render(<ProjectsPage />);
    expect(wrapper.find('header')).toHaveLength(1);
  });

  it('should have main element', () => {
    const wrapper = render(<ProjectsPage />);
    expect(wrapper.find('main')).toHaveLength(1);
  });

  it('should have a footer', () => {
    const wrapper = render(<ProjectsPage />);
    expect(wrapper.find('footer')).toHaveLength(1);
  })

  it('should have horizontal rules between elements', () => {
    const wrapper = render(<ProjectsPage />);
    expect(wrapper.find('hr')).toHaveLength(2);
  })

  it('children should be in proper order', () => {
    const wrapper = render(<ProjectsPage />);
    const ordering = ['header', 'hr', 'main', 'hr', 'footer'];

    wrapper.children().each((idx, node) => {
      expect(node.name).toEqual(ordering[idx]);
    });
  });
});