import React, { useState } from "react"

interface AddTodoProps {
    addTodo: (text: string) => void
}
export function AddTodo({addTodo}: AddTodoProps){
    const [text, setText] = useState('')
    //处理提交请求
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) =>{
        //阻止表单默认行为
        e.preventDefault()
        addTodo(text)
        //提交之后将输入框置空
        setText('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
            aria-label="新建代办"
            type="text" 
            value={text} 
            onChange={(e) => setText(e.target.value)}

            />
            <button type="submit">新建代办</button>
        </form>
    )
}