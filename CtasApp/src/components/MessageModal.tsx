import React from 'react';
import {View, Text, Modal} from 'react-native';
import {ModalProps} from '../schema/MessageModalSchema';
import LottieView from 'lottie-react-native';
import styles from '../styles/MessageModalStyles';
import {ANIMATIONS} from '../constants/MessageModalConst';

const MessageModal: React.FC<ModalProps> = ({
  animationKey,
  isVisible,
  title,
  message,
}) => {
  const selectedAnimation = ANIMATIONS[animationKey];

  return (
    <Modal animationType="slide" transparent={true} visible={isVisible}>
      <View style={styles.modalContainer}>
        <View style={styles.container}>
          <LottieView
            source={selectedAnimation}
            autoPlay
            loop
            style={styles.animationContainer}
          />
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.message}>{message}</Text>
        </View>
      </View>
    </Modal>
  );
};

export default MessageModal;
