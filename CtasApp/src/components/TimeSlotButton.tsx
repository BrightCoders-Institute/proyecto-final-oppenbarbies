import * as React from 'react';
import {useEffect} from 'react';
import {View, Text, Alert} from 'react-native';
import TimeSlotsModal from './TimeSlotsModal';
import Button from './Button';
import {TimeSlotButtonProps} from '../schema/TimeSlotsSchema';
import AvailableTimePickerStyles from '../styles/AvailableTimePickerStyles';
import FinishAppointmentScreenStyles from '../styles/FinishAppointmentScreenStyles';
import WatchIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../styles/colors/Colors';
import {useUserContext} from '../../UserContext';

const TimeSlotButton: React.FC<TimeSlotButtonProps> = ({
  slots,
  selectedHour,
  setSelectedHour,
  email,
}) => {
  const {isTimeSlotDisabled, setTimeSlotDisabled} = useUserContext();
  const [modalVisible, setModalVisible] = React.useState(false);

  const handleSlotSelection = (timeSlot: string) => {
    setSelectedHour(timeSlot);
    setTimeSlotDisabled(true);
    setModalVisible(false);
  };

  const onPressViewTimes = () => {
    if(slots.length == 0){
      setModalVisible(false);
      Alert.alert('There are not times availables', 'search for available times on another date');
    }else{
      setModalVisible(true);
    }
  };

  return (
    <View style={AvailableTimePickerStyles.buttonContainer}>
      <Button
        text="View Available Time"
        onPress={onPressViewTimes}
        styleName="Big"
        textStyleName="slots"
      />
      <WatchIcon
        name="clock-time-four-outline"
        size={30}
        color={Colors.white}
        style={FinishAppointmentScreenStyles.iconContainer}
      />
      <TimeSlotsModal
        isVisible={modalVisible}
        onClose={() => setModalVisible(false)}
        slots={slots}
        onSelect={handleSlotSelection}
        email={email}
        isTimeSlotDisabled={isTimeSlotDisabled}
        selectedHour={selectedHour}
      />
      {selectedHour && (
        <Text style={AvailableTimePickerStyles.slot}>
          Selected Time: {selectedHour}
        </Text>
      )}
    </View>
  );
};

export default TimeSlotButton;
