
import Button from '@mui/material/Button'
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography';
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

    const handleDelete =(index:number)=>{
      const updatedToDo=todos.filter((_,i)=>i!==index)
      setTodos(updatedToDo)
    }
    return (
      <Container

      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        minWidth:'100vw',
        backgroundColor: "#f4f4f4",
      }}
    >
      <Card
        style={{
          padding: "25px",
          boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
          borderRadius: "12px",
          backgroundColor: "#ffffff",
        }}
      >
        <Typography variant="h4" style={{ marginBottom: "20px", fontWeight: "bold", color: "#333" }}>
          Todo List
        </Typography>

        <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
          <TextField
            label="Add Todo"
            variant="outlined"
            fullWidth
            value={text}
            onChange={handleText}
            sx={{
              backgroundColor: "#fff",
              borderRadius: "5px",
            }}
          />
          <Button
            onClick={handleAdd}
            variant="contained"
            color="primary"
            sx={{
              fontWeight: "bold",
              padding: "12px 24px",
              borderRadius: "8px",
              textTransform: "none",
            }}
          >
            Add
          </Button>
        </div>

        <List>
          {todos.map((item, index) => (
            <ListItem
              key={index}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "12px",
                marginBottom: "8px",
                borderRadius: "8px",
                borderLeft: "5px solid #1976d2",
                backgroundColor: "#f9f9f9",
                boxShadow: "0px 2px 6px rgba(0,0,0,0.08)",
              }}
            >
              {editIndex === index ? (
                <TextField
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  fullWidth
                />
              ) : (
                <Typography style={{ flex: 1, fontSize: "16px", color: "#333" }}>{item}</Typography>
              )}
              {editIndex === index ? (
                <Button
                  onClick={handleSave}
                  variant="contained"
                  color="success"
                  sx={{ marginLeft: "10px", fontWeight: "bold", textTransform: "none" }}
                >
                  Save
                </Button>
              ) : (
                <Button
                  onClick={() => handleEdit(index)}
                  variant="contained"
                  color="secondary"
                  sx={{ marginLeft: "10px", fontWeight: "bold", textTransform: "none" }}
                >
                  Edit
                </Button>
              )}
              <Button
                  onClick={() => handleDelete(index)}
                  variant="contained"
                  color="secondary"
                  sx={{ marginLeft: "10px", fontWeight: "bold", textTransform: "none",backgroundColor:'red' }}
                >
                  Delete
                </Button>
            </ListItem>
          ))}
        </List>
      </Card>
    </Container>
    );
  }

export default Todo
