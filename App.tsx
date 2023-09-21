/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import BarcodeScane from './barcode';

import { StyleSheet, Text, View } from 'react-native';
const App =()=> {


//   useEffect(()=>{
//     checkPermissions()
//   },[])
// const devices = useCameraDevices()
// const device = devices.back
//   const checkPermissions =async()=>{
//     const newCameraPermission = await Camera.requestCameraPermission()
//   }
//   if (device == null) return <ActivityIndicator />
  return (
    <>
    
    {/* <BarcodeScane /> */}
    
  
  <BarcodeScane />
  
 
   
    </>
  )
}

export default App;
