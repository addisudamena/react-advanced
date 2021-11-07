import React from "react"
import Card from "./Card"
import Favorite from "./Favorite"
import Menu from "./Menu"

function App() {
    return (
        <div>
            <Menu>
            <Favorite/>
            <Card cardColor="red" height={200} width={200} />
            <Card cardColor="purple" />
            <Card cardColor="green" />
        </div>
    )
}

export default App