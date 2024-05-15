import React from 'react';
import { BackButton, BackIcon, Container, Logo } from './styles';
import { useNavigation } from '@react-navigation/native';

// import { Container } from './styles';

type Props = {
  showBackButton?: boolean;
}

export function Header({ showBackButton = false}:Props) {

  const navigation = useNavigation();

  function handleGoBack(){
    navigation.navigate('groups');
  }
  return (
    <Container>
      { showBackButton && (
      <BackButton onPress={handleGoBack}>
      <BackIcon color='white' size={32} />
    </BackButton>
      )}

      <Logo source={require('../../assets/logo.png')} />
    </Container>
  );
}
