import React from 'react';
import { render, shallow } from 'enzyme';

import ProjectsPage from '../../pages/projects';

describe('<ProjectsPage />', () => {
  describe('Container', () => {
    it('should be a div with id `#page-wrapper`', () => {
      const wrapper = render(<ProjectsPage />);
      expect(wrapper.is('div')).toBeTruthy();
      expect(wrapper.attr('id')).toBe('page-wrapper');
    });
  });

  describe('Header', () => {
    it('should exist', () => {
      const wrapper = render(<ProjectsPage />);
      expect(wrapper.find('header')).toHaveLength(1);
    });
  });

  describe('Main section', () => {
    it('should exist', () => {
      const wrapper = render(<ProjectsPage />);
      expect(wrapper.find('main')).toHaveLength(1);
    });
  });

  describe('Footer', () => {
    it('should exist', () => {
      const wrapper = render(<ProjectsPage />);
      expect(wrapper.find('footer')).toHaveLength(1);
    });
  });

  describe('Horizontal rule', () => {
    it('should exist between elements', () => {
      const wrapper = render(<ProjectsPage />);
      expect(wrapper.find('hr')).toHaveLength(2);
    });
  });

  it('children should be in proper order', () => {
    const wrapper = render(<ProjectsPage />);
    const ordering = ['header', 'hr', 'main', 'hr', 'footer'];

    wrapper.children().each((idx, node) => {
      expect(node.name).toEqual(ordering[idx]);
    });
  });
});