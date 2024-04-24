

// Grupos de usuarios
export interface IGroup {
    groupId: string;
    name: string;
    description: string;
    members: string[];
    privacy: 'open' | 'closed' | 'secret';
  }
  