import React from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fade' | 'slide-left' | 'slide-right' | 'slide-up';
  delay?: number;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className = '',
  animation = 'fade',
  delay = 0,
}) => {
  const { elementRef, isVisible } = useIntersectionObserver();

  const animations = {
    'fade': 'opacity-0 transition-opacity duration-1000',
    'slide-left': 'opacity-0 -translate-x-10 transition-all duration-1000',
    'slide-right': 'opacity-0 translate-x-10 transition-all duration-1000',
    'slide-up': 'opacity-0 translate-y-10 transition-all duration-1000',
  };

  const baseAnimation = animations[animation];

  return (
    <div
      ref={elementRef}
      className={`${className} ${baseAnimation} ${
        isVisible ? 'opacity-100 translate-x-0 translate-y-0' : ''
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;