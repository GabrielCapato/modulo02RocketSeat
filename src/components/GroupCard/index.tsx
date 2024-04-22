import React from 'react';
import { TouchableOpacityProps, View } from 'react-native';
import { Container, Icon, Title } from './styles';

// import { Container } from './styles';

type Props = TouchableOpacityProps & {
  title: string,
}

export function GroupCard({title,...rest}:Props){
  return(
    <Container {...rest}>
      <Icon/>
      <Title>{title}</Title>
    </Container>
  )
}