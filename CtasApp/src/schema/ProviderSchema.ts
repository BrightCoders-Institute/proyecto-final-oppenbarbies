export type Provider = {
  email: String;
  name: String;
  alias: String;
  phone: String;
  occupation: String;
  description: String;
  address: Array<String>;
  scoreList: Array<number>;
  rating: number;
  image: String;
  userType: String;
  appointments?: Array<Appointment>;
}

export type Appointment = {

}