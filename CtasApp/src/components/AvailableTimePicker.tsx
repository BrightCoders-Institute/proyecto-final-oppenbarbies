import React, {useState} from 'react';
import {View, Text, Modal, Alert} from 'react-native';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import AvailableTimePickerStyles from '../styles/AvailableTimePickerStyles';
import Button from './Button';
import useTimePicker from '../hooks/useAvailableTimePicker';

const AvailableTimePicker = () => {
  const {
    startTime,
    endTime,
    showStartPicker,
    showEndPicker,
    modalVisible,
    handleEndTimeChange,
    handleStartTimeChange,
    generateTimeSlots,
    setModalVisible,
    setShowStartPicker,
    setShowEndPicker,
  } = useTimePicker();

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
            <View style={AvailableTimePickerStyles.separator} />
            <View style={AvailableTimePickerStyles.centeredButton}>
              <Button text="Save" onPress={generateTimeSlots} />
            </View>

            <Text style={AvailableTimePickerStyles.instructions}>
              This will setup the range of your available appointments every 30
              minutes
            </Text>

            <View style={AvailableTimePickerStyles.separator} />
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
