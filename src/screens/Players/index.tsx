import { View, Text, FlatList, Alert, TextInput } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { Container, Form, HeaderList, NumbersOfPlayers } from './styles'
import { Header } from '../../components/Header'
import { Highlight } from '../../components/Highlight'
import { ButtonIcon } from '../../components/ButtonIcon'
import { Input } from '../../components/Input'
import Filter from '../../components/Filter'
import PlayerCard from '../../components/PlayerCard'
import { ListEmpty } from '../../components/ListEmpty'
import { Button } from '../../components/Button'
import { useNavigation, useRoute } from '@react-navigation/native'
import { AppError } from '../../utils/AppError'
import { playerAddByGroup } from '../../storage/player/playerAddByGroup'
import { playersGetByGroup } from '../../storage/player/PlayerGetByGroup'
import { playersGetByGroupAndTeam } from '../../storage/player/playerGetByGroupAndTeam'
import { PlayerStorageDTO } from '../../storage/player/PlayerStorageDTO'
import { playerRemoveByGroup } from '../../storage/player/playerRemoveByGroup'
import { groupRemoveByName } from '../../storage/group/groupRemoveByName'
import { Loading } from '../../components/Loading'

type RouteParams = {
  group: string
}

export function Players() {
  const [newPlayerName, setNewPlayerName] = useState('')
  const [team, setTeam] = useState('Time A')
  const [players, setPlayers] = useState<PlayerStorageDTO[]>([])
  const newPlayerNameInputRef = useRef<TextInput>(null)
  const [isLoading, setIsLoading] = useState(false)

  const navigator = useNavigation()

  const route = useRoute()
  const { group } = route.params as RouteParams

  async function handleAddPlayer() {
    if (newPlayerName.trim().length === 0) {
      return Alert.alert('Nova pessoa', 'Informe o nome da pessoa para adicionar')
    }

    const newPlayer = {
      name: newPlayerName,
      team,
    }

    try {
      await playerAddByGroup(newPlayer, group)
      fetchPlayersByTeam();
      newPlayerNameInputRef.current?.blur();
      setNewPlayerName('')
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert('Nova pessoa', error.message)
      } else {
        console.log(error);
        Alert.alert('Nova pessoa', 'não foi possivel adicionar')
      }
    }
  }

  async function fetchPlayersByTeam() {
    try {
      setIsLoading(true)
      const playersByTeam = await playersGetByGroupAndTeam(group, team);
      setPlayers(playersByTeam)

    } catch (error) {
      console.log(error)
      Alert.alert('Pessoas', 'Não foi possivel carregar as pessoas do time selecionado')
    } finally {
      setIsLoading(false)
    }
  }

  async function handlePlayerRemove(playerName: string) {

    try {

      await playerRemoveByGroup(playerName, group)
      fetchPlayersByTeam()

    } catch (error) {
      console.log(error)
      Alert.alert('Remover pessoa', 'Não foi possivel remover essa pessoa')
    }

  }

  async function groupRemove() {
    try {
      await groupRemoveByName(group)
      navigator.navigate('new')
    } catch (error) {
      console.log(error);
      Alert.alert('Remover grupo', 'Não foi possivel remover o grupo')
    }
  }

  async function handleGroupRemove() {
    Alert.alert('Remover', 'Deseja remover o grupo?',
      [
        {
          text: 'Não',
          style: 'cancel'
        },
        {
          text: 'Sim',
          onPress: () => groupRemove()
        }
      ]
    )
  }

  useEffect(() => {
    fetchPlayersByTeam()
  }, [team])

  return (
    <Container>
      <Header showBackButton />
      <Highlight title={group} subtitle='adicione a galera e separe os times' />
      <Form>
        <Input
          inputRef={newPlayerNameInputRef}
          placeholder="Nome da pessoa"
          autoCorrect={false}
          value={newPlayerName}
          onChangeText={setNewPlayerName}
          onSubmitEditing={handleAddPlayer}
          returnKeyType='done'

        />
        <ButtonIcon icon='add' onPress={handleAddPlayer} />
      </Form>

      <HeaderList>



        <FlatList
          data={['Time A', 'Time B']}
          keyExtractor={item => item}
          renderItem={({ item }) => (
            <Filter title={item} isActive={item === team} onPress={() => setTeam(item)} />
          )}
          horizontal
        />
        <NumbersOfPlayers>{players.length}</NumbersOfPlayers>
      </HeaderList>
      {
        isLoading ? <Loading /> :
          <FlatList
            data={players}
            keyExtractor={item => item.name}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <PlayerCard name={item.name} onRemove={() => handlePlayerRemove(item.name)} />
            )}
            ListEmptyComponent={<ListEmpty message='Não há pessoas nesse time.' />}
            contentContainerStyle={
              [
                { paddingBottom: 100 },
                players.length === 0 && {
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center'
                }

              ]
            }
          />
      }

      <Button title='Remover Turma' type='SECONDARY' onPress={handleGroupRemove} />
    </Container>
  )
}