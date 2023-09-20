import * as React from 'react';
import {View, Text, Modal, FlatList, TouchableOpacity} from 'react-native';
import Button from './Button';
import {TimeSlotsModalProps} from '../schema/TimeSlotsSchema';
import TimeSlotsModalStyles from '../styles/TimeSlotsModalStyles';

const TimeSlotsModal: React.FC<TimeSlotsModalProps> = ({
  isVisible,
  onClose,
  slots,
  onSelect,
  isTimeSlotDisabled,
  selectedHour,
}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}>
      <View style={TimeSlotsModalStyles.modalContainer}>
        <View style={TimeSlotsModalStyles.modalContent}>
          <Text style={TimeSlotsModalStyles.title}>
            Choose the time for your appointment.
          </Text>
          <FlatList
            data={slots}
            keyExtractor={item => item}
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={() => onSelect(item)}
                disabled={isTimeSlotDisabled && item === selectedHour}>
                <Text style={TimeSlotsModalStyles.listItem}>{item}</Text>
              </TouchableOpacity>
            )}
          />
          <View style={TimeSlotsModalStyles.closeButton}>
            <Button text="Close" onPress={onClose} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default TimeSlotsModal;
