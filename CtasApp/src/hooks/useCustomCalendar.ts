import {useState, useCallback} from 'react';
import {SelectedDates, Day} from '../schema/CustomCalendarSchema';

export const useCustomCalendar = () => {
  const [selectedDates, setSelectedDates] = useState<SelectedDates>({});
  const [modalVisible, setModalVisible] = useState(false);

  const onDayPress = useCallback((day: Day) => {
    setSelectedDates(prevSelectedDates => {
      if (prevSelectedDates[day.dateString]) {
        const {[day.dateString]: value, ...newSelectedDates} =
          prevSelectedDates;
        return newSelectedDates;
      } else {
        return {
          ...prevSelectedDates,
          [day.dateString]: {
            selected: true,
            selectedColor: 'red',
          },
        };
      }
    });
  }, []);

  const logUnavailableDates = useCallback(() => {
    const unavailableDates = Object.keys(selectedDates);
    console.log('Unavailable Days:', unavailableDates);
  }, [selectedDates]);

  const markAsUnavailable = useCallback(() => {
    if (Object.keys(selectedDates).length === 0) {
      setModalVisible(true);
    } else {
      logUnavailableDates();
    }
  }, [selectedDates, logUnavailableDates]);

  const handleConfirm = useCallback(() => {
    logUnavailableDates();
    setModalVisible(false);
  }, [logUnavailableDates]);

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
