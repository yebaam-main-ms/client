// src/features/friend/interfaces/friend.interface.ts

export interface IFriendRequest {
    id: string;
    requesterId: string;
    requesterUsername: string;
    requesterProfilePicture: string;
    createdAt: Date;
  }
  