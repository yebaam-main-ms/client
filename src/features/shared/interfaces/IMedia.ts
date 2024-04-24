
// Gestión de archivos multimedia
export interface IMedia {
    mediaId: string;
    userId: string;
    url: string;
    type: 'image' | 'video';
    createdAt: Date;
  }
  
  
  