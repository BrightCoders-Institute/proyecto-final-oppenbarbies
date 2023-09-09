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
    backgroundColor: Colors.aqua,
    paddingHorizontal: 25,
    gap: 5,
    flex: 1,
  },
  colmuns:{
    flexDirection: 'row',
    flex:1,
  },
  providerName: {
    fontSize: 23,
    fontWeight: 'bold',
    color: Colors.white,
    fontFamily: 'Inter-Bold',
    textAlign: 'center',
  },
  providerImage:{
    width: 110,
    height: 140,
    borderRadius: 10,
    resizeMode: 'stretch'
  },
  providerDataContainer: {
    alignItems: 'center',
    gap: 2
  },
  providerDataText: {
    fontSize: 15,
    color: Colors.white,
    fontFamily: 'Inter-Regular',
    marginBottom: 2,
  },
  providerOccupation: {
    fontSize: 15,
    fontFamily: 'Inter-SemiBold',
    color: Colors.white,
    marginTop: -2,
  },
  servicesText: {
    fontSize: 14,
    textAlign: 'justify',
    color: Colors.white,
    fontFamily: 'Inter-Regular'
  },
  detailsContainer: {
    height: '100%',
    flex: 1,
  },
  socialMedia: {
    justifyContent: 'space-evenly',
    marginLeft: 10
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
    marginBottom: 3
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
