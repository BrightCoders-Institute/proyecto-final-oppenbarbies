import React from 'react';
import {Text, View, Modal} from 'react-native';
import {Calendar} from 'react-native-calendars';
import Button from './Button';
import {useCustomCalendar} from '../hooks/useCustomCalendar';
import CustomCalendarStyles from '../styles/CustomCalendarStyles';

const CustomCalendar: React.FC = () => {
  const {
    selectedDates,
    modalVisible,
    onDayPress,
    markAsUnavailable,
    handleConfirm,
    handleCancel,
  } = useCustomCalendar();

  return (
    <View style={CustomCalendarStyles.container}>
      <View style={CustomCalendarStyles.calendarContainer}>
        <Calendar
          markedDates={selectedDates}
          onDayPress={onDayPress}
          style={CustomCalendarStyles.calendar}
        />
        <View style={CustomCalendarStyles.buttonContainer}>
          <Button
            text="Save Changes"
            onPress={markAsUnavailable}
            styleName="welcome"
            textStyleName="welcome"
          />
        </View>
      </View>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={CustomCalendarStyles.modalBackground}>
          <View style={CustomCalendarStyles.modalContent}>
            <Text style={CustomCalendarStyles.modalText}>
              Are you sure you don't have any unavailable dates?
            </Text>
            <View style={CustomCalendarStyles.modalButtons}>
              <Button
                text="Yes"
                onPress={handleConfirm}
                textStyleName="welcome"
              />
              <Button
                text="No"
                onPress={handleCancel}
                textStyleName="welcome"
              />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default CustomCalendar;
