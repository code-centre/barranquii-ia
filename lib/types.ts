export interface User {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  name: String;
  lastName: String;
  idType: IdType;
  idNumber: String;
  phone: String;
  email: String;
  profile: String;
  work: String;
  shirtSize?: ShirtSize;
  food?: FoodRestriction;
  emergencyName?: String;
  emergencyPhone?: String;
  isStaying?: String;
  paymentId?: String;
  paymentAmount: number;
  ticketType: TicketType;
  paymentLinkId?: String;
  year?: number;
}

export enum IdType {
  CC,
  CE,
  TI,
  PASSPORT,
}

enum ShirtSize {
  XS,
  S,
  M,
  L,
  XL,
}

enum FoodRestriction {
  VEGAN,
  VEGETARIAN,
  KOSHER,
  NONE,
}

enum TicketType {
  GENERAL,
  COMPLETO,
  TALLER,
  PREVENTA,
}
