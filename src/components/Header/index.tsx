import React from 'react';
import { View } from 'react-native';
import { BackButton, BackIcon, Container, Logo } from './styles';

// import { Container } from './styles';

type Props = {
  showBackButton?: boolean;
}

export function Header({ showBackButton = false}:Props) {
  return (
    <Container>
      { showBackButton && (
      <BackButton>

      <BackIcon color='white' size={32} />
    </BackButton>
      )}

      <Logo source={require('../../assets/logo.png')} />
    </Container>
  );
}
