import { View, Text } from 'react-native'
import React from 'react'
import Maps from './components/Maps'
import tw from 'tailwind-react-native-classnames'
import NavigateCard from './components/NavigateCard'
import RideOptions from './components/RideOptions'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const MapScreen = () => {
  
  const Stack = createNativeStackNavigator()

  return (
    <View>
      <View style={tw`h-1/2`}>
        <Maps />
      </View>
      <View style={tw`h-1/2`}>   
        <Stack.Navigator>
          <Stack.Screen name='NavigateCard' component={NavigateCard} options={{headerShown: false}}/>
          <Stack.Screen name='RideOptions' component={RideOptions} options={{headerShown: false}}/>
      
        </Stack.Navigator>
      </View>
    </View>
  )
}

export default MapScreen
