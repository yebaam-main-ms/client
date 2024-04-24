
// Registros de seguridad
export interface ISecurityLog {
    logId: string;
    userId: string;
    action: string;
    ipAddress: string;
    timestamp: Date;
  }
  
  