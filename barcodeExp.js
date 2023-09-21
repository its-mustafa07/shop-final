import React from 'react';
import {StyleSheet, View, Text, FlatList, Dimensions} from 'react-native';
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

  // renderItem = ({item, index, drag}) => (
  //   // <View style={styles.itemContainer} key={index} onLongPress={drag}>
  //   <>
  //     <ListItem item={item} />
  //     <ListItem item={item} />
  //     <ListItem item={item} />
  //     <ListItem item={item} />
  //     <ListItem item={item} />
  //     <ListItem item={item} />
  //     <ListItem item={item} />
  //     <ListItem item={item} />
  //     <ListItem item={item} />
  //     <ListItem item={item} />
  //     <ListItem item={item} />
  //   </>
  //   // {/* <Text style={styles.itemText} >
  //   //   Scanned Result: {item}
  //   // </Text> */}
  //   // </View>
  // );

  data = [
    {id: '1', item: <ListItem />},
    {id: '2', item: <ListItem />},
    {id: '3', item: <ListItem />},
    {id: '4', item: <ListItem />},
    {id: '5', item: <ListItem />},
    {id: '6', item: <ListItem />},
    {id: '7', item: <ListItem />},
    // {id: '8', item: <ListItem />},
    // {id: '9', item: <ListItem />},
    // {id: '10', item: <ListItem />},
    // {id: '11', item: <ListItem />},
    // {id: '12', item: <ListItem />},
    // {id: '13', item: <ListItem />},
    // {id: '14', item: <ListItem />},
    // {id: '15', item: <ListItem />},
    // {id: '16', item: <ListItem />},
    // {id: '17', item: <ListItem />},
    // {id: '18', item: <ListItem />},
    // {id: '19', item: <ListItem />},
  ];

  // renderItem = ({item}) => (
  //   <View style={styles.item}>
  //     <Text>{item.item}</Text>
  //   </View>
  // );

  renderItem = ({item, index, drag}) => (
    <View style={styles.itemContainer} key={index}>
      <Text style={styles.itemText} onLongPress={drag}>
        Scanned Result: {item}
      </Text>
    </View>
  );

  render() {
    return (
      <GestureHandlerRootView
        style={{flex: 1, height: '100%', position: 'relative'}}>
        <SafeAreaView style={styles.mainContainer}>
          <View>
            <MlkitBarcodeView
              style={{
                width: 500,
                height: 500,
              }}
              enableScanner={this.state.enableScanner}
              barcodeFormat={this.state.barcodeFormat}
              onSuccess={this.handleScanSuccess}
            />
          </View>
          {/* </SafeAreaView> */}
          {/* <ListView> */}
          {/* <DraggableFlatList
              data={this.state.scannedResults}
              renderItem={this.renderItem}
              keyExtractor={(item, index) => `draggable-item-${index}`}
              onDragEnd={({data}) => this.setState({scannedResults: data})}
            /> */}

          <FlatList
            data={this.data}
            renderItem={this.renderItem}
            keyExtractor={item => item.id}
          />
          {/* <ScrollView style={{paddingVertical: 20, width: '100%'}}>
                <View style={{flex: 1, gap: 90, alignItems: 'center'}}>
                  <ListItem />
                  <ListItem />
                  <ListItem />
                  <ListItem />
                  <ListItem />
                  <ListItem />
                  <ListItem />
                  <ListItem />
                  <ListItem />
                  <ListItem />
                  <ListItem />
                  <ListItem />
                  <ListItem />
                  <ListItem />
                  <ListItem />
                  <ListItem />
                </View>
              </ScrollView> */}
          {/* </ListView> */}
          {/* </View> */}
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
    right: -10,
    justifyContent: 'center',
    alignItems: 'center', // Align children to the center horizontally
  },
  resultText: {
    marginTop: 20,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'blue',
  },
  itemContainer: {
    backgroundColor: 'lightgray', // light gray background
    borderRadius: 3, // border radius
    marginVertical: 5,
    marginTop: 5, // spacing between items
    padding: 20, // inner spacing
    alignItems: 'center',
  },
  itemText: {
    color: 'white', // white text
  },
});
