import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Players } from '../screens/Players';
import { NewGroup } from '../screens/NewGroup';
import { Groups } from '../screens/Groups';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {

  return (
    <Navigator
    initialRouteName='groups'
    screenOptions={{
      headerShown:false
    }}>
      <Screen
        name='groups'
        component={Groups}
      />
      <Screen
        name='players'
        component={Players}
      />
      <Screen
        name='new'
        component={NewGroup}
      />


    </Navigator>
  );

}