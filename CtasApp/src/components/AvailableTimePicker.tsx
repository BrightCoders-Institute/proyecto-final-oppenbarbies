import React, {useState} from 'react';
import {View, Text, Modal, Alert} from 'react-native';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import AvailableTimePickerStyles from '../styles/AvailableTimePickerStyles';
import Button from './Button';

const AvailableTimePicker = () => {
  const initialTime = new Date();
  initialTime.setHours(0, 0, 0, 0);
  const [startTime, setStartTime] = useState(initialTime);
  const [endTime, setEndTime] = useState(new Date(initialTime));
  const [showStartPicker, setShowStartPicker] = useState<boolean>(false);
  const [showEndPicker, setShowEndPicker] = useState<boolean>(false);
  const [timeSlots, setTimeSlots] = useState<string[]>([]);
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const checkTimeValidity = () => {
    if (startTime.getTime() === endTime.getTime()) {
      Alert.alert(
        'Error',
        'The hours must be different. Please select different hours.',
      );
      return false;
    }
    return true;
  };

  const handleEndTimeChange = (event: any, selectedDate: Date | undefined) => {
    setShowEndPicker(false);
    if (selectedDate) {
      setEndTime(selectedDate);
    }
  };

  const handleStartTimeChange = (
    event: any,
    selectedDate: Date | undefined,
  ) => {
    setShowStartPicker(false);
    if (selectedDate) {
      setStartTime(selectedDate);
    }
  };
  const generateTimeSlots = () => {
    if (!checkTimeValidity()) return;

    let slots = [];
    let start = new Date(startTime);
    let end = new Date(endTime);

    if (start.getTime() > end.getTime()) {
        end.setDate(end.getDate() + 1);
      
    }
  if (start.getTime() === end.getTime()) {
    Alert.alert('Error', 'The hours must be different. Please select different hours.');
    return;
  }

    while (start.getTime() !== end.getTime()) {
      slots.push(
        start.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'}),
      );
      start.setMinutes(start.getMinutes() + 30);
    }

    setTimeSlots(slots);
    console.log('Available Time Slots:', slots);
  };

  return (
    <View>
      <View style={AvailableTimePickerStyles.buttonContainer}>
        <Button
          text="Open Time Picker"
          onPress={() => setModalVisible(true)}
          styleName="welcome"
          textStyleName="welcome"
        />
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={AvailableTimePickerStyles.overlay}>
          <View style={AvailableTimePickerStyles.modalView}>
            <View style={AvailableTimePickerStyles.timePickerRow}>
              <Text style={AvailableTimePickerStyles.timeText}>
                Start Time:
                {startTime.toLocaleTimeString([], {
                  hour: '2-digit',
                  minute: '2-digit',
                })}
              </Text>
              <Button
                text="Pick Start Time"
                onPress={() => setShowStartPicker(true)}
              />
            </View>

            {showStartPicker && (
              <RNDateTimePicker
                value={startTime}
                mode="time"
                onChange={handleStartTimeChange}
              />
            )}

            <View style={AvailableTimePickerStyles.timePickerRow}>
              <Text style={AvailableTimePickerStyles.timeText}>
                End Time:
                {endTime.toLocaleTimeString([], {
                  hour: '2-digit',
                  minute: '2-digit',
                })}
              </Text>
              <Button
                text="Pick End Time"
                onPress={() => setShowEndPicker(true)}
              />
            </View>

            {showEndPicker && (
              <RNDateTimePicker
                value={endTime}
                mode="time"
                onChange={handleEndTimeChange}
              />
            )}
            <View style={AvailableTimePickerStyles.separator}></View>
            <View style={AvailableTimePickerStyles.centeredButton}>
              <Button text="Save" onPress={generateTimeSlots} />
            </View>

            <Text style={AvailableTimePickerStyles.instructions}>
              This will setup the range of your available appointments every 30
              minutes
            </Text>

            <View style={AvailableTimePickerStyles.separator}></View>
            <View style={AvailableTimePickerStyles.centeredButton}>
              <Button
                text="Close Window"
                onPress={() => setModalVisible(false)}
              />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default AvailableTimePicker;
