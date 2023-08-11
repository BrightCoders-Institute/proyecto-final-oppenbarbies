import React, {useState, useCallback, useMemo} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Calendar} from 'react-native-calendars';
import Button from './Button';

interface SelectedDates {
  [key: string]: {
    selected: boolean;
    selectedColor: string;
  };
}

interface Day {
  dateString: string;
}

const CustomCalendar: React.FC = () => {
  const [selectedDates, setSelectedDates] = useState<SelectedDates>({});

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
    const unavailableDates = Object.keys(selectedDates);
    console.log('Unavailable Days:', unavailableDates);
  }, [selectedDates]);

  return (
    <View style={{ padding: 50 }}>
      <Calendar markedDates={selectedDates} onDayPress={onDayPress} style={{ borderRadius:10}} />
      <View style={{ marginTop: 10, }}>
      <Button
        text="Save Changes"
        onPress={markAsUnavailable}
        styleName='welcome'
        textStyleName='welcome'
      />
    </View>

    </View>
  );
};

export default CustomCalendar;
