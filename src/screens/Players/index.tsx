import { View, Text } from 'react-native'
import React from 'react'
import { Container } from './styles'
import { Header } from '../../components/Header'
import { Highlight } from '../../components/Highlight'
import { ButtonIcon } from '../../components/ButtonIcon'

export function Players() {
  return (
    <Container>
      <Header showBackButton/>
      <Highlight title='Nome da Turma' subtitle='adicione a galera e separe os times'/>
      <ButtonIcon/>
    </Container>
  )
}