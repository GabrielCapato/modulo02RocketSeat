import React from 'react';
import { TextInputProps, View } from 'react-native';
import { Container } from './styles';

// import { Container } from './styles';

export function Input({...rest}:TextInputProps){
  return(
    <Container {...rest}>

    </Container>
  )
}