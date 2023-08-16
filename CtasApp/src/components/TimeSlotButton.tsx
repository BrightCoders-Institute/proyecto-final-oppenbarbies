import * as React from 'react';
import {View, Text, Alert} from 'react-native';
import TimeSlotsModal from './TimeSlotsModal';
import Button from './Button';
import {TimeSlotButtonProps} from '../schema/TimeSlotsSchema';

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
    <View>
      <Button
        text="Select Time Slot"
        onPress={() => setModalVisible(true)}
        styleName="welcome"
        textStyleName="welcome"
      />

      <TimeSlotsModal
        isVisible={modalVisible}
        onClose={() => setModalVisible(false)}
        slots={slots}
        onSelect={handleSlotSelection}
      />

      {selectedSlot && <Text>Selected Slot: {selectedSlot}</Text>}
    </View>
  );
};

export default TimeSlotButton;
