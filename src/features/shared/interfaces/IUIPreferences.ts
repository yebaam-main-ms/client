// Preferencias de la interfaz de usuario
export interface IUIPreferences {
    userId: string;
    theme: 'light' | 'dark';
    fontSize: 'small' | 'medium' | 'large';
  }
  
  // Configuraciones de privacidad
export interface IPrivacySetting {
    userId: string;
    settingType: 'profileVisibility' | 'messagePrivacy';
    value: 'public' | 'friendsOnly' | 'private';
  }
  