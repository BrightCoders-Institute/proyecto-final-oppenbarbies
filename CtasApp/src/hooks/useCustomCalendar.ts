import {useState, useCallback} from 'react';
import {SelectedDates, Day} from '../schema/CustomCalendarSchema';

export const useCustomCalendar = () => {
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
    if (Object.keys(selectedDates).length === 0) {
      setModalVisible(true);
    } else {
      console.log('Unavailable Days:', Object.keys(selectedDates));
    }
  }, [selectedDates]);

  const handleConfirm = useCallback(() => {
    const unavailableDates = Object.keys(selectedDates);
    console.log('Unavailable Days:', unavailableDates);
    setModalVisible(false);
  }, [selectedDates]);

  const handleCancel = useCallback(() => {
    setModalVisible(false);
  }, []);

  return {
    selectedDates,
    modalVisible,
    onDayPress,
    markAsUnavailable,
    handleConfirm,
    handleCancel,
  };
};
