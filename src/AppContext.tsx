import  { Note }  from "./types" ;
import { createContext } from "react";

export interface IAppContext{
    notes : Note[];
    toggleStarNote : (noteId:number)=>void;
    deleteNote :  (noteId : number) => void;
}

export const AppContext =  createContext<IAppContext>({
    notes : [],
    toggleStarNote : () => {},
    deleteNote : () => {},
})

