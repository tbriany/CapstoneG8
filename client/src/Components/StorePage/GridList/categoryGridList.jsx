import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: 'nowrap',
    transform: 'translateZ(0)',
  },
  title: {
    color: theme.palette.primary.light,
  },
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'black',

  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
    backgroundColor: 'white',
    fontWeight: 'bold'
  }
}));


const tileData = [
    {
        img: 'https://www.marni.com/12/12386489MT_13_n_r.jpg',
        title: 'Womens',
        author: 'author'
    }, 
    {
        img: 'https://nationalpostcom.files.wordpress.com/2018/07/tee1.jpg?quality=80&strip=all',
        title: 'Mens',
        author: 'author'
    }, 
    {
        img: 'https://images.express.com/is/image/expressfashion/0036_05051421_1695?cache=on&wid=361&fmt=jpeg&qlt=75,1&resmode=sharp2&op_usm=1,1,5,0&defaultImage=Photo-Coming-Soon',
        title: 'Beauty',
        author: 'author'
    }, 
    {
        img: 'https://nationalpostcom.files.wordpress.com/2018/07/tee1.jpg?quality=80&strip=all',
        title: 'Accessories',
        author: 'author'
    }
]



export default function CategoriesGridList(props) {
  const classes = useStyles();

  return (
    <div className={classes.root} style={{margin: "20px", padding: "15px"}}>
        <Typography variant='h4' display='block' paragraph='true'>
         {props.listTitle}
        </Typography>
      <GridList className={classes.gridList} cols={4} cellHeight={300} spacing={10}>
        {tileData.map((tile) => (
           <GridListTile key={tile.img}>
            <Link to={`/store/1/products`}>
              <img src={tile.img} alt={tile.title} />
              <span className={classes.imageButton}>
               <Typography
                 component="span"
                 variant="subtitle1"
                 color="inherit"
                 className={classes.imageTitle}
               >
                 {tile.title}
               </Typography>
             </span>
               </Link>
             </GridListTile>
        ))}
      </GridList>
    </div>
  );
}