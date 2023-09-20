import React, {useEffect, useMemo, useState} from 'react';
import {View} from 'react-native';
import {Calendar} from 'react-native-calendars';
import {GetUnavailableDays} from '../database/Providers/GettersProvider';
import CustomCalendarStyles from '../styles/CustomCalendarStyles';
import moment from 'moment-timezone';

const ClientCalendar: React.FC<{
  email: string;
  selectedDay: string;
  setSelectedDay: React.Dispatch<React.SetStateAction<string>>;
}> = ({email, selectedDay, setSelectedDay}) => {
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
  }, [email]);

  const todayString = moment().subtract(1, 'days').format('YYYY-MM-DD');

  const marked = useMemo(() => {
    let markedDays: any = {};
    if (unavailableDays) {
      unavailableDays.forEach((day: string) => {
        markedDays[`${day}`] = {
          disableTouchEvent: true,
          selectedColor: 'red',
          selected: true,
        };
      });
    }
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
        minDate={todayString}
        style={CustomCalendarStyles.calendar}
      />
    </View>
  );
};

export default ClientCalendar;
