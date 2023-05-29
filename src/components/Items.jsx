import SingleItem from './SingleItem'
import { useGlobalContext } from '../context/AppProvider'
const Items = () => {
    const {items} = useGlobalContext()
    console.log(items)
    return (
        <div className="items">
            {items.map(item => {
                console.log(item)
                return <SingleItem key={item.id} {...item} l="l"/>
            })}
        </div>
    )
}
export default Items