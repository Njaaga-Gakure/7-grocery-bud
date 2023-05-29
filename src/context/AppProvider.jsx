import { nanoid } from "nanoid";
import { createContext, useContext, useState } from "react";
import {toast} from "react-toastify"
const AppContext = createContext()
const getLocalStorage = () => {
    let list = localStorage.getItem('list')
    list = list ? JSON.parse(list) : []
    return list
}
const AppProvider = ({children}) => {
const [items, setItems] = useState(getLocalStorage())
const setLocalStorage = (item) => {
    localStorage.setItem('list', JSON.stringify(item))
}    
const addItem = (item) => {
  const newItem = {id: nanoid(), name: item, completed: false }
  const newItems = [...items, newItem]
  setItems(newItems)
  toast.success('item added successfully')
  setLocalStorage(newItems)
}    
const removeItem = (id) => {
    console.log(id)
    setItems(prevItems => {
        const newItems = prevItems.filter(item => item.id !== id)
        setLocalStorage(newItems)
        return newItems
    })
    toast.success('item removed successfully :)')
}
const editItem = (id) => {
   setItems(prevItems => {
    const newItems = prevItems.map(item => {
        return item.id === id ? {...item, completed: !item.completed} : item
    })
    setLocalStorage(newItems)
    return newItems
   })
}
return <AppContext.Provider value={{addItem, items, removeItem, editItem, setLocalStorage}}>
    {children}
</AppContext.Provider>
}

const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppProvider, useGlobalContext}