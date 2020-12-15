import React from 'react';
// @ts-ignore
import { isMobile } from '@ui5/webcomponents-base/dist/Device';

const style = {
  centered: {
    minWidth: isMobile() ? '80%' : '50%',
    padding: '1rem',
    margin: '0 auto',
  },
};

const CenteredContent: React.FC = ({ children }) => {
  return (
    <div data-testid="centered-content" style={style.centered}>
      {children}
    </div>
  );
};

export default CenteredContent;
