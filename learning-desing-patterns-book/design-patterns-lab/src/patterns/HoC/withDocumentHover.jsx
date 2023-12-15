import { useState, useEffect } from 'react';

const withHover = (Component) => {
  // eslint-disable-next-line react/display-name
  return (props) => {
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
      const handleHover = () => {
        setIsHovered(true);
      };

      const handleMouseLeave = () => {
        setIsHovered(false);
      };

      document.addEventListener('mouseover', handleHover);
      document.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        document.removeEventListener('mouseover', handleHover);
        document.removeEventListener('mouseleave', handleMouseLeave);
      };
    }, []);

    return <Component {...props} isDocumentHovered={isHovered} />;
  };
};

export default withHover;
