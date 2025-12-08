import React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";

const Todo = () => {
  const [items, setItem] = useState([
    { id: 1, label: "Html", checked: true },
    { id: 2, label: "CSS", checked: true },
    { id: 3, label: "JavaScript", checked: true },
    { id: 4, label: "React", checked: false },
  ]);

  const [newinput, setNewInput] = useState("");
  const [isEditing, setisEditing] = useState(false);

  function addList() {
    setItem([
      ...items,
      { id: items.length + 1, label: newinput, checked: false },
    ]);
    setNewInput("");
  }

  function handleCheckbox(id) {
    setItem(
      items.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  }

  function DeleteItem(id) {
    setItem(
      items
        .filter((item) => item.id !== id)
        .map((item, index) => {
          return { ...item, id: index + 1 };
        })
    );
  }
  function isUpadate(id) {
    setisEditing(true);
    setNewInput()

  }

  return (
    <div>
      <h1>Courses</h1>
      <div>
        <input
          type="text"
          value={newinput}
          onChange={(e) => {
            setNewInput(e.target.value);
          }}
        />
        <Button onClick={addList}>{isEditing ? "Save" : "ADD"}</Button>
      </div>
      {items.map((item) => {
        return (
          <FormGroup key={item.id}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={item.checked}
                  onChange={() => handleCheckbox(item.id)}
                />
              }
              label={item.label}
            />
            <IconButton
              aria-label="delete"
              onClick={() => {
                DeleteItem(item.id);
              }}
            >
              <DeleteIcon />
            </IconButton>
            <Button>
              <EditIcon onClick={() => isUpadate(items.id)} />
            </Button>
          </FormGroup>
        );
      })}
    </div>
  );
};

export default Todo;
