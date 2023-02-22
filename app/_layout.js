import {Stack} from "expo-router"

export const unstable_settings = {
   initialRouteName: '/'
}
export default function Layout(){
   return <Stack initialRouteName={'/'}/>
}