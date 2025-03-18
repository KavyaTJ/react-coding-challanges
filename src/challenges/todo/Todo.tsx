
import Button from '@mui/material/Button'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import TextField from '@mui/material/TextField'
import React, { use, useState } from 'react'

interface TodoProps {}

interface TodoState {
    text: string;
    todos: string[];
}
function Todo() {
    const [text,setText]=useState('')
    const [todos,setTodos]=useState<string[]>([])
   

    const handleText = (e: React.ChangeEvent<HTMLInputElement>): void => {
        console.log(e.target.value);
        const text = e.target.value;
        setText(text);
       
    };

    const handleAdd =()=>{
        setTodos([...todos, text]);
        setText('');
    }
  return (
    <div>
      <TextField id="outlined-basic" variant="outlined" 
      value={text}
      onChange={handleText}/>
      <Button 
      onClick={handleAdd}
      variant="contained">Add</Button>
      <div>
      {todos.map((item)=>{
        return(
        <List>
          <ListItem disablePadding>
            {item}
          </ListItem>
      
        </List>)})}
      </div>
    </div>
  )
}

export default Todo
