import { TouchableOpacity } from "react-native";
import styled from "styled-components";
import { MaterialIcons } from '@expo/vector-icons'



export type ButtonIconTypeStyleProps = 'PRIMARY' | 'SECONDARY'

type Props = {
  type: ButtonIconTypeStyleProps;
}

export const Container = styled(TouchableOpacity)`
  width: 56px;
  height: 56px;
  justify-content: center;
  align-items: center;
  margin-left: 12px;
`;

export const Icon = style(MaterialIcons).attrs()``