import {StyleSheet} from 'react-native';
import Colors from './colors/Colors';

const ProviderSetCitaStyles = StyleSheet.create({
  main:{
    flex: 1,
    backgroundColor: Colors.aqua,
  },
  body: {
    flex: 1,
    backgroundColor: Colors.white,
    marginTop: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: 'center',
    padding: 10,
  },
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
  appointmentDetails: {
    fontFamily: 'Inter-ExtraBold',
    fontSize: 15,
    color: Colors.babyBlue,
  },
  backArrow: {
    justifyContent: 'center',
    width: 40,
    height: 35,
    backgroundColor: Colors.babyBlue,
    borderBottomRightRadius: 100,
    padding: 5,
    marginBottom: 5,
  },
});

export default ProviderSetCitaStyles;
