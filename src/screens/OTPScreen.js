import { View, Text, TextInput, TouchableOpacity, SafeAreaView } from 'react-native'
import React, { useState } from 'react'

export default function OTPScreen(props) {
    const [code, setCode] = useState('');

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "center" }}>
                <Text style={{ fontWeight: "400", color: "black", fontSize: 20, alignSelf: "flex-start", marginLeft: 20, marginTop: 30, marginBottom: 5 }}>Enter the 4-digit code sent to you at</Text>
                <Text style={{ fontWeight: "400", color: "black", fontSize: 20, alignSelf: "flex-start", marginLeft: 20, marginBottom: 30 }}>{props.route.params.number}</Text>
                <TextInput
                    cursorColor="dodgerblue"
                    style={{
                        color: 'black',
                        borderRadius: 5,
                        borderWidth: 1,
                        borderColor: 'gray',
                        padding: 10,
                        height: '12%',
                        width: '50%',
                        fontSize: 15,
                        marginBottom: '10%',
                        alignSelf: "flex-start",
                        marginLeft: 20
                    }}
                    value={code}
                    onChangeText={n => { setCode(n) }}
                />
                <TouchableOpacity style={{ height: 50, width: "50%", backgroundColor: "lightgray", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", borderRadius: 50, elevation: 0, alignSelf: "center", marginBottom: 15, alignSelf: "flex-start", marginLeft: 20 }}>
                    <Text style={{ color: "white", fontSize: 15, color: "black", fontWeight: "600" }}>I didn't receive a code</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ height: 50, width: "45%", backgroundColor: "lightgray", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", borderRadius: 50, elevation: 0, alignSelf: "center", alignSelf: "flex-start", marginLeft: 20 }}>
                    <Text style={{ color: "white", fontSize: 15, color: "black", fontWeight: "600" }}>Login with password</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={{ height: 50, width: "25%", backgroundColor: "lightgray", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", borderRadius: 50, elevation: 0, alignSelf: "center", alignSelf: "flex-start", marginLeft: 20, position: "absolute", left: 5, bottom: 50 }}>
                <Text style={{ color: "white", fontSize: 15, color: "black", fontWeight: "600" }}>Back</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ height: 50, width: "25%", backgroundColor: "lightgray", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", borderRadius: 50, elevation: 0, alignSelf: "center", alignSelf: "flex-start", marginLeft: 20, position: "absolute", right: 20, bottom: 50 }}
                onPress={() => props.route.params.confirmCode(code, props.route.params.confirm)}>
                <Text style={{ color: "white", fontSize: 15, color: "black", fontWeight: "600" }}>Next</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}