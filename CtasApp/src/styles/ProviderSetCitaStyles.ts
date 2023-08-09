import {StyleSheet} from 'react-native';
import Colors from './colors/Colors';

const ProviderSetCitaStyles = StyleSheet.create({
  providerCard: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: Colors.aqua,
    padding: 5,
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
    gap: 20,
  },
  providerDataText: {
    fontSize: 13,
    color: Colors.white,
  },
  servicesText: {
    fontSize: 16,
    textAlign: 'center',
    color: Colors.white,
  },
  detailsContainer: {
    width: '55%',
    gap: 8,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  socialMedia: {
    width: '40%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default ProviderSetCitaStyles;
