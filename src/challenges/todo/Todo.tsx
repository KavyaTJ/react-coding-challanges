
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
    const [editIndex, setEditIndex] = useState<number | null>(null);
  const [editText, setEditText] = useState("");
   

    const handleText = (e: React.ChangeEvent<HTMLInputElement>): void => {
        console.log(e.target.value);
        const text = e.target.value;
        setText(text);
       
    };

    const handleAdd =()=>{
        setTodos([...todos, text]);
        setText('');
    }
    const handleEdit=(index:any)=>{
      setEditIndex(index)
      setEditText(todos[index])
    }

    const handleSave =()=>{
     if(editIndex !==null){
      const updatedTodos=todos.map((item,index)=>
      index=== editIndex ? editText :item)
      setTodos(updatedTodos)
      setEditIndex(null)
      setEditText('')
     }
    }
  return (
 <div>
      <TextField
        id="outlined-basic"
        variant="outlined"
        value={text}
        onChange={handleText}
      />
      <Button onClick={handleAdd} variant="contained">
        Add
      </Button>

      <List>
        {todos.map((item, index) => (
          <ListItem key={index}>
            {editIndex === index ? (
              <TextField
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
              />
            ) : (
              <ListItem>{item}</ListItem>
            )}
            {editIndex === index ? (
              <Button onClick={handleSave} variant="contained">
                Save
              </Button>
            ) : (
              <Button onClick={() => handleEdit(index)} variant="contained">
                Edit
              </Button>
            )}
          </ListItem>
        ))}
      </List>
    </div>
  );

}

export default Todo
