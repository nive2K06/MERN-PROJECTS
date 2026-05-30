import React from "react";

function ReactList() {
    const fruits = ["Apple", "Banana", "Cherry", "Watermelon", "Papaya", "Orange"];

    const users = [
        { id: 1, name: 'Thivi', age: 20 },
        { id: 2, name: 'Hekajan', age: 26 },
        { id: 3, name: 'Nive', age: 20 },
    ];
    return(
            <div>
                <h1>Fruits</h1>
                <ul>
                    {fruits.map((f, index) =>
                        <li key={index}>{f}</li>)}
                </ul>

                <ul>
                    {users.map((user) => (
                       user.age >= 25?(
                        <li key={user.id}>{user.name} is a Senior</li>
                       ):(
                        <li key={user.id}>{user.name} is a Junior</li>
                       )
                       ))}

                </ul>
            </div>

        );
    }


export default ReactList;