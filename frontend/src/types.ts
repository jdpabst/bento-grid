export type UserContextType = {
 user: User;
 setUser: (newValue: User) => void;
 text: Text[];
 setText: any;
}

export type User = {
 id: number;
 // add more stuff here as needed
}

export type Text = {
 id: number;
 title: string;
 desc: string

}