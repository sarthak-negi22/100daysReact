const PRODUCTS = [
    {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
    {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
    {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
    {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
    {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
    {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}
  ];

function ProductCategoryRow({ category }) {
    return (
        <tr>
            <th colspan = "2">
                { category }
            </th>
        </tr>
    );
}

function ProductRow({ products }) { 
    const name = products.stocked ? products.name : 
    <span style = { { color : 'red' } }>
        { products.name }
    </span>

    return (
        <>
            <tr>
                <td>
                    { name }
                </td>
                <td>
                    { products.price }
                </td>
            </tr>
        </>
    );  
}

function ProductTable({ products }){
    return (
        <>

        </>
    );
}

function FilterableProductTable({ products }) {
    return (
        <>

        </>
    );
}

export default function ThinkingInReact() {
    return (
        <>
            <FilterableProductTable products = { PRODUCTS } />
        </> 
    );
}