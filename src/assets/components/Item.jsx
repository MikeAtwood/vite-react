// eslint-disable-next-line react/prop-types
function Item({ name, isPacked}) {
   return (
    <li className="item">
        {isPacked ? name + ' ✔' : name}
    </li>
   )
}

export default function PackingList() {
    return (
        <section>
            <h1>Sally Rides Packing List</h1>
                <ul>
                    <Item
                        isPacked={true}
                        name="Space suit"
                    />
                    <Item
                        isPacked={true}
                        name="Helmet with a golden leaf"
                    />
                    <Item
                        isPacked={false}
                        name="Photo of Brad Pitt"
                    />
                </ul>
        </section>
    )
}