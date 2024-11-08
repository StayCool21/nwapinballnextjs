import React from 'react';
import { Collapse, Text } from '@nextui-org/react';

interface CollapsibleProps {
  title: string;
  children: React.ReactNode;
}

const Collapsible: React.FC<CollapsibleProps> = ({ title, children }) => {
  return (
    <Collapse title={title} css={{ mb: '$4' }}>
      <Text>{children}</Text>
    </Collapse>
  );
};

export default Collapsible;