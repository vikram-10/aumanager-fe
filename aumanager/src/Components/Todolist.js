import React, { useEffect,useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Checkbox from '@material-ui/core/Checkbox';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function Todolist() {
  const classes = useStyles();
  const [checked, setChecked] = React.useState([1]);
  const [tasks,settasks]=useState([]);


  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  useEffect(() => {
      const getTasks=async ()=>{
        try{
            let fetcher= await fetch('http://localhost:4000/tasks',{
                method: 'GET',
                mode: 'cors', 
                cache: 'no-cache',
                credentials: 'same-origin',
                headers: {
                    'token':localStorage.getItem('token'),
                  'Content-Type': 'application/json'
                },
                redirect: 'follow', 
                referrerPolicy: 'no-referrer'
              });
              let fetcherData=await fetcher.json();
              settasks(fetcherData);
        }
        catch(err){
              console.log(err);
        }
      }
      getTasks();
  }, [])

console.log(tasks);
  return (
      <div className="container">
          <h1>To-Do List!</h1>
          <div className="todoListMargin">
          <List dense className={classes.root}>
      {tasks.map((taskname,index) => {
        const labelId = `checkbox-list-secondary-label-${index}`;
        return (
          <ListItem key={index} button>
            <ListItemText id={labelId} primary={`${taskname}`} />
            <ListItemSecondaryAction>
              <Checkbox
                edge="end"
                onChange={handleToggle(index)}
                checked={checked.indexOf(index) !== -1}
                inputProps={{ 'aria-labelledby': labelId }}
              />
            </ListItemSecondaryAction>
          </ListItem>
        );
      })}
    </List>
          </div>    
      </div>
  );
}
