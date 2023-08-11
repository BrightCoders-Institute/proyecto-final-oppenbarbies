import React, {useState, useCallback} from 'react';
import {Text, View, Modal} from 'react-native';
import {Calendar} from 'react-native-calendars';
import Button from './Button';
import {Day, SelectedDates} from '../schema/CustomCalendarSchema';

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
    <View style={{justifyContent: 'center', alignContent: 'center'}}>
      <Text style={{fontSize: 20, fontWeight: 'bold', textAlign: 'center'}}>
        Select Unavailable Days
      </Text>
      <View style={{paddingHorizontal: 50}}>
        <Calendar
          markedDates={selectedDates}
          onDayPress={onDayPress}
          style={{borderRadius: 10}}
        />
        <View style={{marginTop: 20}}>
          <Button
            text="Save Changes"
            onPress={markAsUnavailable}
            styleName="welcome"
            textStyleName="welcome"
          />
        </View>
      </View>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          }}>
          <View
            style={{backgroundColor: 'white', padding: 20, borderRadius: 10}}>
            <Text style={{fontSize: 15, fontFamily: 'Inter-Bold'}}>
              Are you sure you don't have any unavailable dates?
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 10,
              }}>
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
