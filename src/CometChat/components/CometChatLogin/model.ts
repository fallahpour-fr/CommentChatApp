export interface IModel {
    isDarkMode:boolean;
    password:string;
    email:string;
    message:string;
    handleSubmit:(event: React.FormEvent<HTMLFormElement>) => void;
    setEmail:(value: React.SetStateAction<string>) => void;
    setPassword:(value: React.SetStateAction<string>) => void;
};