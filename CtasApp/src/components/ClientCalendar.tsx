import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {Calendar} from 'react-native-calendars';
import {GetUnavailableDays} from '../database/Providers/GettersProvider';
import CustomCalendarStyles from '../styles/CustomCalendarStyles';

const ClientCalendar: React.FC<{email: string}> = ({email}) => {
  const [selectedDay, setSelectedDay] = useState<string | undefined>('');
  const [unavailableDates, setUnavailableDates] = useState<{
    [key: string]: {
      disabledTouchEvent: boolean;
      selectedColor: string;
      selected: boolean;
    };
  }>({});

  useEffect(() => {
    const fetchUnavailableDates = async () => {
      try {
        const dates = await GetUnavailableDays(email);

        if (dates) {
          const formattedDates = dates.reduce((acc, date) => {
            acc[date] = {
              disabledTouchEvent: true,
              selectedColor: 'red',
              selected: true,
            };
            return acc;
          }, {} as {[key: string]: {disabledTouchEvent: boolean; selectedColor: string; selected: boolean}});
          setUnavailableDates(formattedDates);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchUnavailableDates();
  }, []);

  return (
    <View>
      <Calendar
        onPress = {day=>{
          setSelectedDay(day?.dateString);
          console.log(selectedDay);
        }}
        markedDates={unavailableDates}
        style={CustomCalendarStyles.calendar}
      />
    </View>
  );
};
export default ClientCalendar;
