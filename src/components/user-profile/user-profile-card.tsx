import React from 'react';
import { Container } from '../Container';

const UserProfile = (): React.ReactElement => {
  return (
    <Container>
      <UserAvatar />
    </Container>
  );
};

const UserAvatar = (): React.ReactElement => {
  return;
};

const StatusBar = ({ trailing }: any) => {
  return (
    <Container
      styleOverrides={{
        height: '20px',
      }}
    ></Container>
  );
};
