import { View, Text, FlatList } from 'react-native'
import React, { useState } from 'react'
import { Container, Form, HeaderList, NumbersOfPlayers } from './styles'
import { Header } from '../../components/Header'
import { Highlight } from '../../components/Highlight'
import { ButtonIcon } from '../../components/ButtonIcon'
import { Input } from '../../components/Input'
import Filter from '../../components/Filter'
import PlayerCard from '../../components/PlayerCard'
import { ListEmpty } from '../../components/ListEmpty'
import { Button } from '../../components/Button'

export function Players() {
  const [team, setTeam] = useState('Time A')
  const [players, setPlayers] = useState([])

  return (
    <Container>
      <Header showBackButton />
      <Highlight title='Nome da Turma' subtitle='adicione a galera e separe os times' />
      <Form>
        <Input placeholder="Nome da pessoa" autoCorrect={false} />
        <ButtonIcon icon='add' />
      </Form>

      <HeaderList>

      <FlatList
        data={['Time A', 'Time B']}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <Filter title={item} isActive={item === team} onPress={()=> setTeam(item)}/>
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        />
        <NumbersOfPlayers>{players.length}</NumbersOfPlayers>
        </HeaderList>

        <FlatList
          data={players}
          keyExtractor={item => item}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <PlayerCard name={item} onRemove={()=>{}}/>
          )}
          ListEmptyComponent={<ListEmpty message='Não há pessoas nesse time.'/>}
          contentContainerStyle={
            [
              {paddingBottom:100},
              players.length === 0 && {
                flex:1,
                justifyContent:'center',
                alignItems:'center'
              }

            ]
          }
        />
        <Button title='Remover Turma' type='SECONDARY' />
    </Container>
  )
}