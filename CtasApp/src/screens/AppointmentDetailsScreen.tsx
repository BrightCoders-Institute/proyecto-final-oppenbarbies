import * as React from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {SafeAreaView} from 'react-native-safe-area-context';

const AppointmentDetailsScreen: React.FC = () => {
  return (
    <SafeAreaView style={ProfileClientScreenStyles.container}>
      <KeyboardAwareScrollView
        resetScrollToCoords={{x: 0, y: 0}}
        contentContainerStyle={ProfileClientScreenStyles.contentContainer}
        scrollEnabled={true}>
           <View style={AppointmentDetailsScreen.background}>
            
            </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default AppointmentDetailsScreen;
