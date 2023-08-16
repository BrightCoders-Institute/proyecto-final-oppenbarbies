import {useState} from 'react';
import {Alert} from 'react-native';
import {DateTimePickerEvent} from '@react-native-community/datetimepicker';

const useTimePicker = () => {
  const initialTime = new Date();
  initialTime.setHours(0, 0, 0, 0);

  const [startTime, setStartTime] = useState(initialTime);
  const [endTime, setEndTime] = useState(new Date(initialTime));
  const [showStartPicker, setShowStartPicker] = useState<boolean>(false);
  const [showEndPicker, setShowEndPicker] = useState<boolean>(false);
  const [timeSlots, setTimeSlots] = useState<string[]>([]);
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const checkTimeValidity = () => {
    if (startTime.getTime() === endTime.getTime()) {
      Alert.alert(
        'Error',
        'The hours must be different. Please select different hours.',
      );
      return false;
    }
    return true;
  };

  const handleEndTimeChange = (
    event: DateTimePickerEvent,
    selectedDate?: Date,
  ) => {
    setShowEndPicker(false);
    if (selectedDate) {
      setEndTime(selectedDate);
    }
  };

  const handleStartTimeChange = (
    event: DateTimePickerEvent,
    selectedDate?: Date,
  ) => {
    setShowStartPicker(false);
    if (selectedDate) {
      setStartTime(selectedDate);
    }
  };

  const generateTimeSlots = () => {
    if (!checkTimeValidity()) {
      return;
    }

    const slots = [];
    const start = new Date(startTime);
    const end = new Date(endTime);

    if (start.getTime() > end.getTime()) {
      end.setDate(end.getDate() + 1);
    }

    while (start.getTime() !== end.getTime()) {
      slots.push(
        start.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'}),
      );
      start.setMinutes(start.getMinutes() + 30);
    }

    setTimeSlots(slots);
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
