declare module 'Park' {
  export interface IPark {
    total: string;
    limit: string;
    start: string;
    data: Datum[];
  }

  export interface Datum {
    id: string;
    url: string;
    fullName: string;
    parkCode: string;
    description: string;
    latitude: string;
    longitude: string;
    latLong: string;
    activities: Activity[];
    topics: Activity[];
    states: string;
    contacts: Contacts;
    entranceFees: Entrance[];
    entrancePasses: Entrance[];
    fees: unknown[];
    directionsInfo: string;
    directionsUrl: string;
    operatingHours: OperatingHour[];
    addresses: Address[];
    images: Image[];
    weatherInfo: string;
    name: string;
    designation: string;
  }

  export interface Activity {
    id: string;
    name: string;
  }

  export interface Address {
    postalCode: string;
    city: string;
    stateCode: StateCode;
    line1: string;
    type: AddressType;
    line3: Line3;
    line2: string;
  }

  export type Line3 = string;

  export type StateCode = string;

  export type AddressType = 'Physical' | 'Mailing';

  export interface Contacts {
    phoneNumbers: PhoneNumber[];
    emailAddresses: EmailAddress[];
  }

  export interface EmailAddress {
    description: string;
    emailAddress: string;
  }

  export interface PhoneNumber {
    phoneNumber: string;
    description: string;
    extension: string;
    type: PhoneNumberType;
  }

  export type PhoneNumberType = 'Voice' | 'Fax' | 'TTY';

  export interface Entrance {
    cost: string;
    description: string;
    title: string;
  }

  export interface Image {
    credit: string;
    title: string;
    altText: string;
    caption: string;
    url: string;
  }

  export interface OperatingHour {
    exceptions: Exception[];
    description: string;
    standardHours: Hours;
    name: string;
  }

  export interface Exception {
    exceptionHours: Hours;
    startDate: Date;
    name: string;
    endDate: Date;
  }

  export interface Hours {
    wednesday?: string;
    monday?: string;
    thursday?: string;
    sunday?: string;
    tuesday?: string;
    friday?: string;
    saturday?: string;
  }
}
