import React, {useState, useEffect} from "react";
import axios from 'axios'
import {Link} from 'react-router-dom'
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 500,
   
  },
  media: {
    height: 200,
  },
});

export default function SelectedCard({value}) {
  const classes = useStyles();
const [store, setStore] = useState([])

console.log('selected Search value', value)

const fetchStore = async () => {
    try {
      const response = await axios.get(`/stores/${value}`)
      setStore(response.data.payload)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      await fetchStore()
    }
  fetchData()
  }, [])
console.log('stores on selected store', store)



  return (
    <div> 

        <p> what</p>
        <Link to={`/store/${store.store_id}`}>
    <Card className={classes.root}
    height= '500px'>
    <CardActionArea>
      <CardMedia
        className={classes.media}
        image={store.avatar_url}
        title= {store.store_name}
      />
      <CardContent 
      
      >
        <Typography gutterBottom variant="h5" component="h2">
         {store.store_name}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
         {store.store_address} <br></br>
         {store.store_city}

        </Typography>
      </CardContent>
    </CardActionArea>

     <CardActions>
      <Button size="small" color="primary">
        Share
      </Button>
      <Button size="small" color="primary">
        Learn More
      </Button>
    </CardActions> 
   </Card> 
   </Link>
  </div>
  );
}
