import { ChapterContext } from "../context/ChapterContext";
import { useContext } from "react";

export const useChapterContext = () => {
    const context=useContext(ChapterContext)

    if(!context){
        throw Error('useChapterContext must be used inside a ChapterContextProvider')
    }


    return context
}