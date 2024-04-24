// Eventos creados por usuarios
export interface IEvent {
    eventId: string;
    creatorId: string;
    title: string;
    description: string;
    location: string;
    startTime: Date;
    endTime: Date;
    participants: string[];
  }