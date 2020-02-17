import React from 'react';
import Modal from "react-native-modal";
import { TouchableHighlight, View, StyleSheet, SafeAreaView, Button } from 'react-native';
import { B } from '../utils/Utils';

const History = () => {
  const [modalVisible, setModalVisible] = React.useState(false);

  return (
    <View style={styles.container}>
      <Modal isVisible={modalVisible}>
        <SafeAreaView>
          <View style={styles.modalWrapper}>
            <View style={styles.modalContainer}>
              <B style={styles.modalTitle}>Last 5 searched:</B>

              <TouchableHighlight
                style={{ ...styles.modalHistoryItem, paddingTop: 20 }}
                onPress={() => {
                  setModalVisible(false);
                }}>
                <B style={styles.btnText}>Hide History</B>
              </TouchableHighlight>

              <TouchableHighlight
                style={styles.modalHistoryItem}
                onPress={() => {
                  setModalVisible(false);
                }}>
                <B style={styles.btnText}>Hide History</B>
              </TouchableHighlight>

              <TouchableHighlight
                style={styles.modalHistoryItem}
                onPress={() => {
                  setModalVisible(false);
                }}>
                <B style={styles.btnText}>Hide History</B>
              </TouchableHighlight>

              <TouchableHighlight
                style={styles.modalHistoryItem}
                onPress={() => {
                  setModalVisible(false);
                }}>
                <B style={styles.btnText}>Hide History</B>
              </TouchableHighlight>

              <TouchableHighlight
                style={{ ...styles.modalHistoryItem, paddingBottom: 20 }}
                onPress={() => {
                  setModalVisible(false);
                }}>
                <B style={styles.btnText}>Hide History</B>
              </TouchableHighlight>

              <TouchableHighlight
                style={styles.btn}
                onPress={() => {
                  setModalVisible(false);
                }}>
                <B style={styles.btnText}>Hide History</B>
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
        <B style={styles.btnText}>Show History</B>
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
  modalTitle: {
    fontSize: 16,
    alignItems: 'center'
  },
  modalHistoryItem: {
    padding: 8
  },
  btn: {
    marginRight: 40,
    marginLeft: 40,
    marginTop: 10,
    padding: 10,
    backgroundColor: '#68a0cf',
    borderRadius: 10,
    borderWidth: 1,
  },
  btnText: {
    color: '#fff',
    textAlign: 'center',
  }
});

export default History;