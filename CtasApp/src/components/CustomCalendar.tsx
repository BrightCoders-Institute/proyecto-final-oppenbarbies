import React, {useEffect, useMemo, useState} from 'react';
import {Text, View, Modal} from 'react-native';
import {Calendar, DateData} from 'react-native-calendars';
import Button from './Button';
import {useCustomCalendar} from '../hooks/useCustomCalendar';
import CustomCalendarStyles from '../styles/CustomCalendarStyles';
import {GetUnavailableDays} from '../database/Providers/GettersProvider';
import {useUserContext} from '../../UserContext';
import {PostUnavailableDays} from '../database/Providers/SettersProvider';

const CustomCalendar: React.FC = () => {
  const {
    selectedDates,
    modalVisible,
    onDayPress,
    markAsUnavailable,
    handleConfirm,
    handleCancel,
  } = useCustomCalendar();
  const [selectedDays, setSelectedDays] = useState<string[]>([]);
  const [unavailableDays, setUnavailableDays] = useState<
    Array<string> | undefined
  >([]);
  const {sessionData} = useUserContext();
  useEffect(() => {
    const fetchUnavailableDays = async () => {
      try {
        setUnavailableDays(await GetUnavailableDays(sessionData.userEmail));
      } catch (error) {
        console.log(error);
      }
    };
    fetchUnavailableDays();
  }, [sessionData.userEmail]);
  

  const marked = useMemo(() => {
    let markedDays: any = {};
    unavailableDays?.forEach((day: string) => {
      markedDays[`${day}`] = {
        disableTouchEvent: true,
        selectedColor: 'red',
        selected: true,
      };
    });

    selectedDays?.forEach((day: string) => {
      markedDays[`${day}`] = {
        selected: true,
        selectedDotColor: 'red',
      };
    });

    return markedDays;
  }, [selectedDays, unavailableDays]);

  const onSelectDay = (day: DateData) => {
    let dayString: string = day.dateString;
    if (selectedDays.includes(dayString)) {
      setSelectedDays(selectedDays.filter(day => day !== dayString));
    } else {
      setSelectedDays([...selectedDays, day?.dateString]);
    }
  };

  const onPressSave = async () => {
    await PostUnavailableDays(sessionData.userEmail, selectedDays);
    setSelectedDays([]);
  };


  return (
    <View style={CustomCalendarStyles.container}>
      <View style={CustomCalendarStyles.calendarContainer}>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
    <View style={CustomCalendarStyles.modalBackground}>
      <View style={CustomCalendarStyles.modalContent}>
        <Text style={CustomCalendarStyles.modalText}>
          Are you sure you don't have any unavailable dates?
        </Text>
        <View style={CustomCalendarStyles.modalButtons}>
          <Button text="Yes" onPress={handleConfirm} textStyleName="welcome" />
          <Button text="No" onPress={handleCancel} textStyleName="welcome" />
        </View>
      </View>
    </View>
  </Modal>
        <Calendar
          markedDates={marked}
          onDayPress={onSelectDay}
          style={CustomCalendarStyles.calendar}
        />
        <View style={CustomCalendarStyles.buttonContainer}>
          <Button
            text="Save Changes"
            onPress={onPressSave}
            styleName="welcome"
            textStyleName="welcome"
          />
        </View>
      </View>
    </View>
  );
};

export default CustomCalendar;
