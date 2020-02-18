import React from 'react';
import Modal from "react-native-modal";
import { TouchableHighlight, View, StyleSheet, SafeAreaView, FlatList } from 'react-native';
import { B } from '../utils/Utils';

const History = (props) => {
  const [modalVisible, setModalVisible] = React.useState(false);

  const handleSelectHistoryItem = (text) => {
    if (props.handleSearch) {
      props.handleSearch(text);
    }
  }

  return (
    <View style={styles.container}>
      <Modal isVisible={modalVisible}>
        <SafeAreaView>
          <View style={styles.modalWrapper}>
            <View style={styles.modalContainer}>
              <B>Last 5 searched:</B>
              {
                props.items && props.items.length > 0 && props.items.slice(0).reverse().map((item, index) => {
                  return (
                    <TouchableHighlight
                      style={styles.modalHistoryItem}
                      key={index}
                      onPress={() => {
                        handleSelectHistoryItem(item);
                        setModalVisible(false);
                      }}>
                      <B>{item}</B>
                    </TouchableHighlight>
                  )
                })
              }

              <TouchableHighlight
                style={{ ...styles.btn, marginTop: 15 }}
                onPress={() => {
                  setModalVisible(false);
                }}>
                <B>Hide History</B>
              </TouchableHighlight>
            </View>
          </View>
        </SafeAreaView>
      </Modal>

      <TouchableHighlight
        style={styles.btn}
        onPress={() => {
          setModalVisible(true);
        }}>
        <B>Show History</B>
      </TouchableHighlight>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center'
  },
  modalWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    backgroundColor: 'white',
    paddingVertical: 15,
    borderRadius: 10,
    borderWidth: 1
  },
  modalContainer: {
    alignItems: 'center'
  },
  modalHistoryItem: {
    marginVertical: 10,
    padding: 8,
    borderColor: 'black',
    borderRadius: 10,
    borderWidth: 1,
  },
  btn: {
    marginRight: 40,
    marginLeft: 40,
    marginTop: 10,
    padding: 10,
    backgroundColor: '#68a0cf',
    borderRadius: 10,
    borderWidth: 1,
  }
});

export default History;