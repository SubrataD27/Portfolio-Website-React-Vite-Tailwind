import React from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

const Section: React.FC<SectionProps> = ({ children, className = '', id }) => {
  const { elementRef, isVisible } = useIntersectionObserver();

  return (
    <section
      ref={elementRef}
      id={id}
      className={`${className} ${isVisible ? 'visible' : ''}`}
    >
      {children}
    </section>
  );
};

export default Section;