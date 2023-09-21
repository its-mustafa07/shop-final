import React from 'react'
import { View, SafeAreaView, Text } from 'react-native'
import BarcodeScane from './barcode';


const BarCodeWrapper = () => {
    return (
        <>
            <View>
                <SafeAreaView>
                    <Text>
                        this is my test comp
                    </Text>
                    <BarcodeScane/>
                </SafeAreaView>
            </View>

        </>
    )
}

export default BarCodeWrapper;