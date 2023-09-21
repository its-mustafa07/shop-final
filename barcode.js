import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Dimensions,
  ScrollView,
} from 'react-native';
import {MlkitBarcodeView, BARCODE} from 'react-native-mlkit-barcode';
import DraggableFlatList from 'react-native-draggable-flatlist';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import ListItem from './componnets/listItem.js/listItem';
import ListView from './componnets/listItem.js/listView.js/listView';

export default class AppExp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      enableScanner: true,
      barcodeFormat: BARCODE.FORMAT_ALL_FORMATS,
      scannedResults: [],
      //   data: [
      //     {id: '1', component: <ListItem />},
      //     {id: '2', component: <ListItem />},
      //     {id: '3', component: <ListItem />},
      //     {id: '4', component: <ListItem />},
      //     {id: '5', component: <ListItem />},
      //     {id: '6', component: <ListItem />},
      //     {id: '7', component: <ListItem />},
      //     {id: '8', component: <ListItem />},
      //     {id: '9', component: <ListItem />},
      //     {id: '10', component: <ListItem />},
      //     {id: '11', component: <ListItem />},
      //     {id: '12', component: <ListItem />},
      //     {id: '13', component: <ListItem />},
      //     {id: '14', component: <ListItem />},
      //     {id: '15', component: <ListItem />},
      //     {id: '16', component: <ListItem />},
      //     {id: '17', component: <ListItem />},
      //     {id: '18', component: <ListItem />},
      //     {id: '19', component: <ListItem />},
      //   ],
    };
    this.isScanning = false;
  }

  handleScanSuccess = data => {
    if (this.isScanning) return;
    this.isScanning = true;
    console.log('BarCode On Success:', data);
    this.setState(prevState => ({
      scannedResults: [...prevState.scannedResults, data.code],
    }));

    setTimeout(() => {
      this.isScanning = false;
      this.setState({
        enableScanner: true,
      });
    }, 500);
  };

  renderItem = ({item, index, drag}) => (
    <View style={styles.itemContainer} key={index}>
      <ListItem drag={drag} item={item} />
      {/* <Text
        style={styles.itemText}
        onLongPress={drag}>
        Scanned Result: {item}
      </Text> */}
    </View>
  );

  render() {
    const screenWidth = Dimensions.get('window').width;
    return (
      <GestureHandlerRootView>
        <SafeAreaView style={styles.mainContainer}>
          <View style={{width: '100%', height: '100%'}}>
            <MlkitBarcodeView
              style={{
                width: 500,
                height: 500,
              }}
              enableScanner={this.state.enableScanner}
              barcodeFormat={this.state.barcodeFormat}
              onSuccess={this.handleScanSuccess}
            />
            <DraggableFlatList
              data={this.state.scannedResults}
              renderItem={this.renderItem}
              keyExtractor={(item, index) => `draggable-item-${index}`}
              onDragEnd={({data}) => this.setState({scannedResults: data})}
              contentContainerStyle={{
                alignItems: 'center',
                gap: 15,
                paddingVertical: 30,
                width: screenWidth,
              }}
            />
          </View>
        </SafeAreaView>
      </GestureHandlerRootView>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    position: 'absolute',
    top: -250,
    left: 0,
    //   right: -10,
    justifyContent: 'center',
    alignItems: 'center', // Align children to the center horizontally
  },
});
