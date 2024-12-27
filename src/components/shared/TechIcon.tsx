import React from 'react';
import * as Icons from './icons';

type IconName = keyof typeof Icons;

interface TechIconProps {
  name: IconName;
  className?: string;
  size?: number;
}

const TechIcon: React.FC<TechIconProps> = ({ name, className = '', size = 24 }) => {
  const Icon = Icons[name] || Icons.FileCode;
  return <Icon size={size} className={className} />;
};

export default TechIcon;