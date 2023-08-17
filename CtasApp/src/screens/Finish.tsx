import * as React from 'react';
import {View, SafeAreaView, Image, ImageBackground} from 'react-native';
import TimeSlotButton from '../components/TimeSlotButton';
import AvailableTimePicker from '../components/AvailableTimePicker';

const timeSlots = ["12:00 AM", "12:30 AM", "1:00 AM", "1:30 AM", "2:00 AM", "2:30 AM", "3:00 AM", "3:30 AM", "4:00 AM", "4:30 AM", "5:00 AM", "5:30 AM", "6:00 AM", "6:30 AM"];

const FinishScreen: React.FC = () => {
  return (

        <View>
        <AvailableTimePicker />
       <TimeSlotButton slots={timeSlots} />
        </View>
    
  );
};

export default FinishScreen;
