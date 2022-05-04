import React from 'react'

        var players = [{ name: "Rohit", score: 12 },
        { name: "Dhawan", score: 26 },
        { name: "Virat", score: 124 },
        { name: "Ambati", score: 52 },
        { name: "Yujraj", score: 36 },
        { name: "Dhoni", score: 45 },
        { name: "Hardik", score: 2 },
        { name: "Deepak", score: 0 },
        { name: "Jasprit", score: 0 },
        { name: "Shami", score: 2 },
        { name: "Chahal", score: 1 },]


    
 export function ListOfPlayers()
{
    return players.map((item) => {
        return (
            < div>
                <li>Mr.{item.name}<span>{item.score}</span></li>
            </div>)
    })
}

export function LPlayers()
{
    return players.map((item) => {
        if (item.score<70)
        return (
            < div>
                <li>Mr.{item.name}<span>{item.score}</span></li>
            </div>)
    })
        }
    



   

