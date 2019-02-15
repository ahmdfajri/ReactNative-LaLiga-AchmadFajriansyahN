import { createStackNavigator, createAppContainer } from 'react-navigation'
import HalamanSatu from './komponen/screen1'
import HalamanDua from './komponen/screen2'
import DetailPlayer from './komponen/screen3'

var AppNavigator = createStackNavigator(
  {
    HalamanSatu: HalamanSatu,
    HalamanDua: HalamanDua,
    HalamanTiga: DetailPlayer,
  }, 
  {
    initialRouteName: 'HalamanSatu'
  }
)
export default createAppContainer(AppNavigator);