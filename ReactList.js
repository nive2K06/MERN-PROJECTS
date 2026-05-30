import React from "react";

function ReactList() {
    const fruits = ["Apple", "Banana", "Cherry", "Watermelon", "Papaya", "Orange"];

    const users = [
        { id: 1, name: 'Thivi', age: 20 },
        { id: 2, name: 'Hekajan', age: 20 },
        { id: 3, name: 'Nive', age: 20 },
    ];
    return(
            <div>
                <h1>Fruits</h1>
                <ul>
                    {fruits.map((f, index) =>
                        <li key={index}>{f}</li>)}
                </ul>

                <table cellSpacing={25} border={20}>
                    <tr>
                        <th>User ID</th>
                        <th>Name</th>
                        <th>Age</th>
                    </tr>
                    {users.map((user) => (
                     <tr>
                         <td>{user.id}</td>
                         <td>{user.name}</td>
                          <td>{user.age}</td>
                     </tr>
                    ))}
                    </table>
                
            </div>

        );
    }


export default ReactList;