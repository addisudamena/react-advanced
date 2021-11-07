import React from "react"
import Card from "./Card"
import Favorite from "./Favorite"

function App() {
    return (
        <div>
            <Favorite/>
            <Card cardColor="red" height={200} width={200} />
            <Card cardColor="purple" />
            <Card cardColor="green" />
        </div>
    )
}

export default App