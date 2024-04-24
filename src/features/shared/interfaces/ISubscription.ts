// Suscripciones y servicios premium
export interface ISubscription {
    subscriptionId: string;
    userId: string;
    type: 'standard' | 'premium';
    startDate: Date;
    endDate: Date;
  }
  
  