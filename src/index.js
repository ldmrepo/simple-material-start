import moment from "moment/moment"
import {sum} from "./math"
import "./index.scss"

window.addEventListener('DOMContentLoaded', () =>{
    sum(1, 2)
    const getTodos = () => import('./api')
    const el = document.querySelector('#root')

    el.innerHTML = `
        <h2>1 + 2 = ${sum(1,2)}</h2>
    `
    const btn = document.getElementById('btn')
    btn.addEventListener('click', () => {
    getTodos().then(({ fetchTodos }) => {
        fetchTodos().then(resp => console.log(resp))
    })
    })
})