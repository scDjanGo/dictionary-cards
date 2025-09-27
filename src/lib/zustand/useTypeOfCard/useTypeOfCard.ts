import {create} from "zustand"
import { typeViewCards } from "@/lib/types/types"


type StoreType = {
    value: typeViewCards,
    setTypeOfCard: (type: typeViewCards) => void
}




const useTypeOfCards = create<StoreType>((set) => ({
    value: "card",
    setTypeOfCard(type) {
        set({value: type})
    }
}))



export {useTypeOfCards}