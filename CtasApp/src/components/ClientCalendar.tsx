import React, {SetStateAction, useEffect, useMemo, useState} from 'react';
import {View} from 'react-native';
import {Calendar} from 'react-native-calendars';
import {GetUnavailableDays} from '../database/Providers/GettersProvider';
import CustomCalendarStyles from '../styles/CustomCalendarStyles';
import { Dispatch } from 'redux';


const ClientCalendar: React.FC<{email: string, selectedDay: string, setSelectedDay : React.Dispatch<React.SetStateAction<string>>}> = ({email, selectedDay, setSelectedDay}) => {
  // const [selectedDay, setSelectedDay] = useState<string>('');
  const [unavailableDays, setUnavailableDays] = useState<string[] | undefined>(
    [],
  );

  useEffect(() => {
    const fetchUnavailableDays = async () => {
      try {
        setUnavailableDays(await GetUnavailableDays(email));
      } catch (error) {
        console.log(error);
      }
    };
    fetchUnavailableDays();
  }, [unavailableDays]);

  const marked = useMemo(() => {
    let markedDays : any = {}
    unavailableDays.forEach((day : string) => {
      markedDays[`${day}`] = {
        disableTouchEvent: true,
        selectedColor: 'red',
        selected: true,
      };
    });
    markedDays[selectedDay] = {
      selected: true,
      disableTouchEvent: true,
      selectedDotColor: 'blue',
    };
    return markedDays;

  }, [selectedDay, unavailableDays]);
  return (
    <View>
      <Calendar
        onDayPress={day => {
          setSelectedDay(day?.dateString);
        }}
        markedDates={marked}
        style={CustomCalendarStyles.calendar}
      />
    </View>
  );
};
export default ClientCalendar;
