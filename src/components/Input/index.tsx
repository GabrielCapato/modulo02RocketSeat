import React from 'react';
import { TextInput, TextInputProps, View } from 'react-native';
import { Container } from './styles';
import { useTheme } from 'styled-components/native';

// import { Container } from './styles';
type Props = TextInputProps & {
  inputRef?: React.RefObject<TextInput>;


}
export function Input({inputRef,...rest}:Props){
  const { COLORS } = useTheme()

  return(
    <Container {...rest} ref={inputRef} placeholderTextColor={COLORS.GRAY_300}/>
  )
}