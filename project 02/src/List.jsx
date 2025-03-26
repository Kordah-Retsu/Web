

function List (){
    const fruits = ['apple', 'banana', 'cherry', 'date', 'fig', 'grape'];

    fruits.sort(); 

    const listItems = fruits.map((fruits) => <li>{fruits}</li>);

    return (<ol>{listItems}</ol>);
}

export default List; 