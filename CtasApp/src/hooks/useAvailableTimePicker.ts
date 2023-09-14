import { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import { GETCurrentUserEmail } from '../auth/CurrentUser';
import { PostAvailableTimes } from '../database/Providers/SettersProvider';

const useTimePicker = () => {
  const initialTime = new Date();
  initialTime.setHours(0, 0, 0, 0);
  const [startTime, setStartTime] = useState(initialTime);
  const [endTime, setEndTime] = useState(new Date(initialTime));
  const [showStartPicker, setShowStartPicker] = useState<boolean>(false);
  const [showEndPicker, setShowEndPicker] = useState<boolean>(false);
  const [timeSlots, setTimeSlots] = useState<string[]>([]);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [userEmail, setUserEmail] = useState<string | null>(null); // State para almacenar el correo electrónico del usuario

  useEffect(() => {
    async function fetchUserEmail() {
      const email = await GETCurrentUserEmail();
      setUserEmail(email);
    }

    fetchUserEmail();
  }, []);

  const checkTimeValidity = () => {
    if (startTime.getTime() === endTime.getTime()) {
      Alert.alert(
        'Error',
        'The hours must be different. Please select different hours.'
      );
      return false;
    }
    return true;
  };

  const checkTimeDifference = () => {
    const differenceInMilliseconds = endTime.getTime() - startTime.getTime();
    const differenceInMinutes = differenceInMilliseconds / (60 * 1000);

    if (differenceInMinutes < 30) {
      Alert.alert(
        'Error',
        'A minimum gap of 30 minutes between the start time and end time is required.'
      );
      return false;
    }
    return true;
  };

  const handleEndTimeChange = (event: Event, selectedDate: Date | undefined) => {
    setShowEndPicker(false);
    if (selectedDate) {
      setEndTime(selectedDate);
    }
  };

  const handleStartTimeChange = (event: Event, selectedDate: Date | undefined) => {
    setShowStartPicker(false);
    if (selectedDate) {
      setStartTime(selectedDate);
    }
  };

  const generateTimeSlots = () => {
    if (!checkTimeValidity()) {
      return;
    }
    if (!checkTimeDifference()) {
      return;
    }

    const slots = [];
    let start = new Date(startTime);
    let end = new Date(endTime);

    if (start.getTime() > end.getTime()) {
      end.setDate(end.getDate() + 1);
    }

    while (start.getTime() < end.getTime()) {
      slots.push(
        start.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      );
      start.setMinutes(start.getMinutes() + 30);
    }

    if (end.getMinutes() % 30 !== 0) {
      slots.pop();
    }

    setTimeSlots(slots);

    if (userEmail) {
      PostAvailableTimes(userEmail, slots);
    }
  };

  return {
    startTime,
    endTime,
    showStartPicker,
    showEndPicker,
    timeSlots,
    modalVisible,
    handleEndTimeChange,
    handleStartTimeChange,
    generateTimeSlots,
    setModalVisible,
    setShowStartPicker,
    setShowEndPicker,
  };
};

export default useTimePicker;
