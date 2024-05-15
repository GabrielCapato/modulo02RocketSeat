import AsyncStorage from "@react-native-async-storage/async-storage";
import { groupsGetAll } from "./grousGetAll";
import { GROUP_COLLECTION, PLAYER_COLLECTION } from "../storageConfig";

export async function groupRemoveByName(groupDeleted : string){
  
  try {

    const storedGroups = await groupsGetAll();
    const groups = await storedGroups.filter(group => group !== groupDeleted);

    await AsyncStorage.setItem(GROUP_COLLECTION,JSON.stringify(groups))
    await AsyncStorage.removeItem(`${PLAYER_COLLECTION}-${groupDeleted}`)
    
  } catch (error) {
    throw error;
  }

}