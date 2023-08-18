import {StyleSheet} from 'react-native';
import Colors from './colors/Colors';

const ProviderSetCitaStyles = StyleSheet.create({
  main: {
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
    width: 50,
    height: 45,
    backgroundColor: Colors.babyBlue,
    borderBottomRightRadius: 100,
    padding: 5,
    marginBottom: 5,
  },
  mapContainer: {
    marginTop: 10,
    width: 300,
    height: 150,
    justifyContent: 'flex-end',
    alignItems: 'center',
    borderRadius: 10,
    overflow: 'hidden',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  locationContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    gap: 5,
  },
  locationText: {
    fontSize: 12,
    fontFamily: 'Inter-Light',
    color: Colors.babyBlue,
    textAlign: 'center',
    marginBottom: 5,
  },
  button: {
    backgroundColor: Colors.white,
    justifyContent: 'center',
    paddingHorizontal: 50,
    paddingVertical: 10,
  },
  buttonText: {
    fontSize: 20,
    fontFamily: 'Inter-ExtraBold',
    color: Colors.white,
  },
  calendarContainer: {
    width: '100%',
    height: 340,
    alignItems: 'center',
    marginTop: 10,
  },
});

export default ProviderSetCitaStyles;
