import {StyleSheet} from 'react-native';
import Colors from './colors/Colors';

const ProviderSetCitaStyles = StyleSheet.create({
  providerCard: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: Colors.aqua,
  },
  providerName: {
    fontSize: 23,
    fontWeight: 'bold',
    color: Colors.white,
    fontFamily: 'Inter-Bold',
    textAlign: 'center',
  },
  providerDataContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  providerDataText:{
    fontSize: 13,
    color: Colors.white,
  },
  servicesText:{
    fontSize: 16,
    textAlign: 'center',
    color: Colors.white,
  },
  detailsContainer: {
    width: '55%',
    gap: 10,
  },
  socialMedia: {
    width: '40%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  }
});

export default ProviderSetCitaStyles;
