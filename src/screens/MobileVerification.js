import { View, Text, Image, TextInput, TouchableOpacity, SafeAreaView } from 'react-native'
import React, { useState, useEffect } from 'react';
import 'firebase/auth';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function MobileVerification({ navigation }) {
    const [confirm, setConfirm] = useState(null);

    const [number, setNumber] = useState(0);

    const checkLoggedIn = async () => {
        const number = await AsyncStorage.getItem("user_number");
        if (number) {
            navigation.navigate("home", { number: number });
        }
    }

    const confirmCode = async (code, confirmed) => {
        try {
            await confirmed.confirm(code);
            await AsyncStorage.setItem("user_number", number);
            //navigation.navigate("bottomtabs", { number: number });
            navigation.navigate("home", { number: number });
        } catch (error) {

            alert('Invalid code!');
        }
    };

    async function signIn() {
        try {
            const confirmation = await auth().signInWithPhoneNumber(number);
            setConfirm(confirmation);
            navigation.navigate("otp", { number: number, confirmCode: confirmCode, confirm: confirmation });

        } catch (error) {
            alert(error);
        }
    }

    useEffect(() => {
        checkLoggedIn();
    }, [])


    return (
        <>
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "center" }}>
                    <Text style={{ fontWeight: "400", color: "black", fontSize: 20, alignSelf: "flex-start", marginLeft: 20, marginTop: 40, marginBottom: 10 }}>Enter your mobile number</Text>
                    <TextInput
                        cursorColor="dodgerblue"
                        style={{
                            color: 'black',
                            borderRadius: 5,
                            borderWidth: 1,
                            borderColor: 'gray',
                            padding: 10,
                            height: '10%',
                            width: '90%',
                            fontSize: 15,
                            marginBottom: '5%',
                        }}
                        value={number}
                        onChangeText={n => { setNumber(n) }}
                    />
                    <TouchableOpacity title="Upload File" style={{ height: 50, width: "90%", backgroundColor: "black", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", borderRadius: 10, elevation: 0, alignSelf: "center", marginBottom: 10 }}
                        onPress={() => signIn()}>
                        <Text style={{ color: "white", fontSize: 15, color: "white", fontWeight: "600" }}>Continue</Text>
                    </TouchableOpacity>
                    <Text style={{ fontWeight: "500", color: "gray", fontSize: 13, marginTop: 10, marginBottom: 20 }}>or</Text>
                    <TouchableOpacity title="Upload File" style={{ height: 50, width: "90%", backgroundColor: "lightgray", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", borderRadius: 10, elevation: 0, alignSelf: "center", marginBottom: 10 }}>
                        <Image source={require("../assets/google.png")} style={{ width: 20, height: 20, marginRight: 10 }}></Image>
                        <Text style={{ color: "white", fontSize: 15, color: "black", fontWeight: "600" }}>Continue with Google</Text>
                    </TouchableOpacity>
                    <TouchableOpacity title="Upload File" style={{ height: 50, width: "90%", backgroundColor: "lightgray", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", borderRadius: 10, elevation: 0, alignSelf: "center", marginBottom: 10 }}>
                        <Image source={require("../assets/apple.png")} style={{ width: 20, height: 20, marginRight: 10 }}></Image>
                        <Text style={{ color: "white", fontSize: 15, color: "black", fontWeight: "600" }}>Continue with Apple</Text>
                    </TouchableOpacity>
                    <TouchableOpacity title="Upload File" style={{ height: 50, width: "90%", backgroundColor: "lightgray", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", borderRadius: 10, elevation: 0, alignSelf: "center", marginBottom: 10 }}>
                        <Image source={require("../assets/facebook.png")} style={{ width: 20, height: 20, marginRight: 10 }}></Image>
                        <Text style={{ color: "white", fontSize: 15, color: "black", fontWeight: "600" }}>Continue with Facebook</Text>
                    </TouchableOpacity>
                    <Text style={{ fontWeight: "400", color: "gray", fontSize: 13, marginTop: 30, marginHorizontal: 25 }}>By proceeding, you consent to get calls, Whatsapp or SMS messages, including by automated means, from Uber and its affiliates to the number provided.</Text>
                </View>
            </SafeAreaView>
        </>
    )
}