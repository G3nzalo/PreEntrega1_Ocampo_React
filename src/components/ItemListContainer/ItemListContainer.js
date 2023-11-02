import "./ItenListStyle.css"
const ItemListContainer = ({greeting}) =>
{
    return (
        <div>
            <h1 className = "my-greeting">{greeting}</h1>
        </div>
    )
}

export default ItemListContainer;