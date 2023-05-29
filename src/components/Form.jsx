import {useRef} from 'react'
import {toast} from 'react-toastify'
import { useGlobalContext } from '../context/AppProvider'

const Form = () => {
    const {addItem} = useGlobalContext()
    const newItem = useRef(null)
    const handleSubmit = (e) => {
        e.preventDefault()
        if(!newItem.current.value) {
            toast.error('please provide a to-do item')
            return
        }
        addItem(newItem.current.value)
        newItem.current.value = null
    }
    return (
        <form onSubmit={handleSubmit} className="form">
            <div className="form-row">
                <input ref={newItem} className="form-input" type="text" name="" id="" />
                <button type="submit" className="form-btn">add</button>
            </div>
        </form>
    )
}

export default Form