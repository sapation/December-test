import { Slot, Stack } from "expo-router";

export default function RootLayout(){
    return <Stack screenOptions={{}}>
        <Stack.Screen name="index" options={{title: 'Devember', }}/>
    </Stack>
}