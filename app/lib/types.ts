
export interface MessageItem {
    message: string;
    from: string;
    dateSent: string;
}

export interface MessageInputProps {
    message: string;
    onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onSendMessage: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}