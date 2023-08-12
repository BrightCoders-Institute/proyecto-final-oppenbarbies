import React, {useState, FC} from 'react';
import DatePicker from 'react-native-modern-datepicker';
import {parse, format} from 'date-fns';
import CalendarModalStyles from '../styles/CalendarModalStyles';
import Colors from '../styles/colors/Colors';
import {CalendarModalProps} from '../schema/DateModalSchema';

const CalendarModal: FC<CalendarModalProps> = ({setBirthdate}) => {
  const [selectedDate, setSelectedDate] = useState<string>('');

  const handleDateChange = (date: string) => {
    setSelectedDate(date);
    console.log(date);
    const dateObj = parse(date, 'yyyy/MM/dd', new Date());
    const formattedDate = format(dateObj, 'd MMM, yyyy');
    console.log(formattedDate);
    setBirthdate(formattedDate);
  };

  return (
    <DatePicker
      options={{
        defaultFont: 'Inter-Regular',
        headerFont: 'Inter-Bold',
        secundaryFont: 'Inter-Bold',
        backgroundColor: Colors.white,
        textHeaderColor: Colors.babyBlue,
        textDefaultColor: Colors.black,
        selectedTextColor: Colors.white,
        mainColor: Colors.babyBlue,
        textSecondaryColor: Colors.babyBlue,
        borderColor: Colors.babyBlue,
      }}
      onSelectedChange={handleDateChange}
      mode="calendar"
      style={CalendarModalStyles.modalCalendar}
    />
  );
};

export default CalendarModal;
