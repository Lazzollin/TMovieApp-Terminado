import React, { useContext, useEffect, useState } from "react";
import { Modal, Pressable, StyleSheet, Text, View } from "react-native";
import { AuthContext } from "../../context/authContext";

const ModalComponent = () => {
  const { state } = useContext(AuthContext);

  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    if (state.errorMsg) {
      setModalVisible(true);
    }
  }, [state.errorMsg]);

  return (
    <Modal transparent={true} animationType="slide" visible={modalVisible}>
      <View style={styles.containerModal}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTextError}>{state.errorMsg}</Text>
          <View>
            <Pressable onPress={() => setModalVisible(false)}>
              <Text style={styles.botonCerrar}>Cerrar</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ModalComponent;

const styles = StyleSheet.create({
  containerModal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },

  modalTextError: {
    fontSize: 20,
    color: "black",
  },
  modalContent: {
    backgroundColor: "white",
    paddingHorizontal: 30,
    paddingVertical: 20,
    borderRadius: 10,
  },
  botonCerrar: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginTop: 20,
    marginLeft: "auto",
    backgroundColor: "#78ED2B",
    borderRadius: 5,
  },
});
