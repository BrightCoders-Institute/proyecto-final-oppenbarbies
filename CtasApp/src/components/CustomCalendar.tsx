import React, {useState, useCallback} from 'react';
import {Text, View, Modal} from 'react-native';
import {Calendar} from 'react-native-calendars';
import Button from './Button';
import {Day, SelectedDates} from '../schema/CustomCalendarSchema';
import CustomCalendarStyles from '../styles/CustomCalendarStyles';

const CustomCalendar: React.FC = () => {
  const [selectedDates, setSelectedDates] = useState<SelectedDates>({});
  const [modalVisible, setModalVisible] = useState(false);

  const onDayPress = useCallback((day: Day) => {
    setSelectedDates(prevSelectedDates => {
      const newSelectedDates = {...prevSelectedDates};
      if (newSelectedDates[day.dateString]) {
        delete newSelectedDates[day.dateString];
      } else {
        newSelectedDates[day.dateString] = {
          selected: true,
          selectedColor: 'red',
        };
      }
      return newSelectedDates;
    });
  }, []);

  const markAsUnavailable = useCallback(() => {
    setModalVisible(true);
  }, []);

  const handleConfirm = useCallback(() => {
    const unavailableDates = Object.keys(selectedDates);
    console.log('Unavailable Days:', unavailableDates);
    setModalVisible(false);
  }, [selectedDates]);

  const handleCancel = useCallback(() => {
    setModalVisible(false);
  }, []);

  return (
    <View style={CustomCalendarStyles.container}>
      <Text style={CustomCalendarStyles.title}>Select Unavailable Days</Text>
      <View style={CustomCalendarStyles.calendarContainer}>
        <Calendar
          markedDates={selectedDates}
          onDayPress={onDayPress}
          style={CustomCalendarStyles.calendarContainer}
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