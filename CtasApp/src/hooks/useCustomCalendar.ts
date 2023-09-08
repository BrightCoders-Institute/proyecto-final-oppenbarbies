import {useState, useCallback} from 'react';
import {SelectedDates, Day} from '../schema/CustomCalendarSchema';
import { GetUnavailableDays } from '../database/Providers/GettersProvider';
import { useUserContext } from '../../UserContext';
import { PostUnavailableDays } from '../database/Providers/SettersProvider';

export const useCustomCalendar = () => {
  const [selectedDates, setSelectedDates] = useState<SelectedDates>({});
  const [modalVisible, setModalVisible] = useState(false);
  const {sessionData} = useUserContext()

  // CREAR FUNCION PARA INICIALIZAR EL CALENDARIO CON LAS FECHAS NO DISPONIBLES EXTRAIDAS DE LA BASE DE DATOS

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

  const logUnavailableDates = useCallback(async () => {
    const unavailableDates = Object.keys(selectedDates);
    // console.log('Unavailable Days:', unavailableDates);
    await PostUnavailableDays(sessionData.userEmail, unavailableDates);
  }, [selectedDates]);

  const markAsUnavailable = useCallback(async () => {
    if (Object.keys(selectedDates).length === 0) {
      setModalVisible(true);
    } else {
      // console.log(await GetUnavailableDays(sessionData.userEmail));
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
