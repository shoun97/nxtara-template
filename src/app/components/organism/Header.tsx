import React from 'react';
import CustomLogo from '@components/atoms/CustomLogo';

interface HeaderProps {
  transparent?: boolean;
}

const Header: React.FC<HeaderProps> = ({ transparent = false }) => {
  return (
    <div
      className={`fixed top-0 w-full z-1000 transition-all duration-300 ${
        transparent ? '' : 'bg-primary-1 shadow-lg'
      }`}
      style={
        transparent
          ? {
              background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%)',
            }
          : {}
      }
    >
      <CustomLogo imageUrl="/nxtara.svg" imageAlt="Nxtara Logo" />
    </div>
  );
};

export default Header;
