import * as React from 'react';
import {
  View,
  Text,
  Modal,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Button from './Button';

interface TimeSlotsModalProps {
  isVisible: boolean;
  onClose: () => void;
  slots: string[];
  onSelect: (timeSlot: string) => void;
}

const TimeSlotsModal: React.FC<TimeSlotsModalProps> = ({
  isVisible,
  onClose,
  slots,
  onSelect,
}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.title}>Choose the time for your appointment.</Text>
          <FlatList
            data={slots}
            keyExtractor={item => item}
            renderItem={({item}) => (
              <TouchableOpacity onPress={() => onSelect(item)}>
                <Text style={styles.listItem}>{item}</Text>
              </TouchableOpacity>
            )}
          />
          <View style={styles.closeButton}><Button text="Close" onPress={onClose} /></View>
          

        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '80%',
    height: '50%',
    backgroundColor: '#40B9A9',
    borderRadius: 10,
    padding: 10,
  },
  title: {
    color: 'white',
    textAlign: 'center',
    fontFamily: 'Inter-ExtraBold',
    fontSize: 18,
    paddingBottom: 10,
    marginBottom: 10,
    borderColor: '#eee',
    borderBottomWidth: 5,
  },
  listItem: {
    textAlign: 'center',
    fontFamily: 'Inter-Bold',
    padding: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#eee',
    color: 'white',
  },
  closeButton: {
    marginVertical: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default TimeSlotsModal;
