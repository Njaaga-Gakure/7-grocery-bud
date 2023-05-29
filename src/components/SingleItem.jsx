import {FaTrashAlt} from 'react-icons/all'
import { useGlobalContext } from '../context/AppProvider'
const SingleItem = ({id, name, completed}) => {
const {removeItem, editItem} = useGlobalContext()
return (
    <div className="item">
        <input type="checkbox" checked={completed} onChange={() => editItem(id)} name="" id="" />
        <p style={{textDecoration:  completed? "line-through" : ""}}>{name}</p>
        <FaTrashAlt className='delete-btn' onClick={() => removeItem(id)}/>
    </div>
    )
}
export default SingleItem