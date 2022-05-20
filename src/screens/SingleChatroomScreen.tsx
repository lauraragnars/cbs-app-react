import { Text, View } from 'react-native'

export default function SingleChatroomScreen ({ route }: any) {
  const { title, chatmessages } = route.params
  return (
    <>
      <View>
        <Text>{title}</Text>
      </View>
    </>
  )
}
