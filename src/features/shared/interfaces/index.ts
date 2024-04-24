import { CSSProperties, Dispatch, SetStateAction, ChangeEvent, ReactNode } from "react";

export interface IBannerProps {
    bgColor: string;
    text: string;
    showLink: boolean;
    linkText?: string;
    onClick?: () => void;
  }
  
  export interface IAlertProps {
    type: string;
    message: string;
  }
  
  export interface IAlertTypes {
    [key: string]: string;
    success: string;
    error: string;
    warning: string;
  }
  
  export interface IBreadCrumbProps {
    breadCrumbItems: string[];
  }
  
  export interface IDropdownProps {
    text: string;
    values: string[];
    maxHeight: string;
    mainClassNames?: string;
    dropdownClassNames?: string;
    showSearchInput?: boolean;
    style?: CSSProperties;
    setValue?: Dispatch<SetStateAction<string>>;
    onClick?: (item: string) => void;
  }
  
  export interface IHtmlParserProps {
    input: string;
  }
  
  export interface IPageMessageProps {
    header: string;
    body: string;
  }
  
  export interface ITextInputProps {
    id?: string;
    name?: string;
    type?: string;
    value?: string | number;
    placeholder?: string;
    className?: string;
    style?: CSSProperties;
    readOnly?: boolean;
    checked?: boolean;
    rows?: number;
    autoFocus?: boolean;
    maxLength?: number;
    min?: string | number;
    max?: string | number;
    onChange?: (event: ChangeEvent) => void;
    onClick?: () => void;
    onFocus?: () => void;
    onBlur?: () => void;
    onKeyUp?: () => void;
    onKeyDown?: (event: KeyboardEvent) => void;
  }
  
  export interface IButtonProps {
    label?: string | ReactNode;
    type?: 'button' | 'submit' | 'reset' | undefined;
    id?: string;
    className?: string;
    role?: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onClick?: (event?: any) => void;
    disabled?: boolean;
    testId?: string;
  }
  
  export interface ISliderImagesText {
    header: string;
    subHeader: string;
  }
  
  export interface IStarRatingProps {
    value?: number;
    size?: number;
    setReviewRating?: Dispatch<SetStateAction<number>>;
  }
  
  export interface IGigCardItemModal {
    overlay: boolean;
    deleteApproval: boolean;
  }
  
  export interface IMessage {
    messageId: string;
    conversationId: string; // Identificador del hilo de conversación
    senderId: string;
    receiverId: string;
    content: string;
    createdAt: Date;
    isRead: boolean;
  }
  
  
  export interface INotification {
    notificationId: string;
    type: 'message' | 'friendRequest' | 'postLike' | 'postComment' | 'postShare';
    initiatingUserId: string; // ID del usuario que origina la notificación
    targetUserId: string; // ID del usuario que recibe la notificación
    linkedObjectId: string; // ID del objeto relacionado (post, mensaje, etc.)
    message?: string; // Mensaje personalizado para la notificación
    createdAt: Date;
    isRead: boolean;
    hasUnreadMessage?: boolean;
    hasUnreadNotification?: boolean;
  }
  
  
  // Comentarios en publicaciones
  export interface IComment {
    commentId: string;
    postId: string;
    authorId: string;
    content: string;
    createdAt: Date;
    likesCount: number;
  }
  
  // Reacciones a elementos (publicaciones, comentarios, etc.)
  export interface IReaction {
    reactionId: string;
    userId: string;
    targetType: 'post' | 'comment';
    targetId: string;
    type: 'like' | 'love' | 'haha' | 'wow' | 'sad' | 'angry';
    createdAt: Date;
  }
  
  