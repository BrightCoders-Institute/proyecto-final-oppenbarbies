import * as React from 'react';
import {View, Text, Alert} from 'react-native';
import TimeSlotsModal from './TimeSlotsModal';
import Button from './Button';
import {TimeSlotButtonProps} from '../schema/TimeSlotsSchema';
import AvailableTimePickerStyles from '../styles/AvailableTimePickerStyles';
import FinishAppointmentScreenStyles from '../styles/FinishAppointmentScreenStyles';
import WatchIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../styles/colors/Colors';

const TimeSlotButton: React.FC<TimeSlotButtonProps> = ({slots}) => {
  const [modalVisible, setModalVisible] = React.useState(false);
  const [selectedSlot, setSelectedSlot] = React.useState<string | null>(null);

  const handleSlotSelection = (timeSlot: string) => {
    setSelectedSlot(timeSlot);
    setModalVisible(false);
    Alert.alert(
      'Time Slot Selected',
      `You have selected the ${timeSlot} slot.`,
    );
  };

  return (
    <View style={AvailableTimePickerStyles.buttonContainer}>
      <Button
        text="View Available Time"
        onPress={() => setModalVisible(true)}
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
      />

      {selectedSlot && <Text style={AvailableTimePickerStyles.slot}>Selected Time: {selectedSlot}</Text>}
    </View>
  );
};

export default TimeSlotButton;
