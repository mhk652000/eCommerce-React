import axios from "axios"

export const login = async (data) => {

    const response = await axios.post('https://calm-plum-jaguar-tutu.cyclic.app/todos', { todoName: "me", isComplete: false, }).then((res) => {
        return res.data
    })
    return response
}

export const MapTodo = () => {
    const data = axios.get('https://calm-plum-jaguar-tutu.cyclic.app/todos').then(res => {
        return res.data.data

    })
    return data
}