import { View, Text, TouchableOpacityProps } from 'react-native'
import React from 'react'
import { Container, Title, FilterStyleProps } from './styles'

type Props = TouchableOpacityProps & FilterStyleProps & {
  title:string
}

export default function Filter({ title , isActive = false, ...rest} : Props) {
  return (
    <Container {...rest} isActive={isActive}>
       <Title>{title}</Title>
    </Container>
  )
}