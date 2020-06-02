import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";



const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        display: "flex",
        justifyContent: "flex-start",
        flexDirection: "column",
        marginBottom: "15px",
        marginTop: "15px",
        boxShadow: " 1px 1px 1px white"
    },
}));


const CartPopoverDisplay = ({ cartTotal, checkoutCart }) => {
    const classes = useStyles();
    return (
        <div>
        {checkoutCart.map((product) => {
            return (
                <div key={product.checkoutcart_id} className={classes.root}>
                    <Grid container spacing={0}>

                        <Grid item xs={9} >
                            <Paper
                                style={{ display: "flex", justifyContent: "flex-start", flexDirection: "column", alignItems: "flex-start", boxShadow: " 1px 1px 1px white", marginBottom: "15px", marginTop: "15px" }}
                                className={classes.paper}
                            >
                                <Grid container spacing={1} >
                                    <Grid style={{ padding: "0px" }} item xs={4} >
                                        <Paper
                                            style={{ display: "flex", justifyContent: "flex-start", flexDirection: "column", alignItems: "flex-start", boxShadow: " 1px 1px 1px white", margin: "0px", }}
                                            className={classes.paper}
                                        >
                                            <img style={{ height: "50px", margin: "0px" }} src={product.product_image_url} alt={product.product_name} ></img>
                                        </Paper>
                                    </Grid>

                                    <Grid item xs={8}  >
                                        <Paper
                                            style={{
                                                display: "flex", justifyContent: "flex-start", flexDirection: "column", alignItems: "flex-start", boxShadow: " 1px 1px 1px white", textAlign: "-webkit-left" , margin: '0px', padding:'0px'
                                            }}
                                            className={classes.paper}
                                        >
                                            <h1 style={{ margin: "0px", fontSize: "x-small" }}>{product.product_name}</h1>
                                            <p style={{ margin: "0px", fontSize: "x-small" }}> Color:{product.color_name}</p>
                                            <p style={{ margin: "0px", fontSize: "x-small" }}>Size:{product.size}</p>
                                            <p style={{ margin: "0px", fontSize: "x-small" }}>Price:${product.product_price}</p>
                                            <p style={{ margin: "0px", fontSize: "x-small" }}>QTY:{product.cartquantity}</p>
                                        </Paper>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Grid>
                        <Grid item xs={3} >
                            <Paper
                                style={{
                                    display: "flex", justifyContent: "flex-start", flexDirection: "column", alignItems: "flex-end", boxShadow: " 1px 1px 1px white", marginBottom: "15px", marginTop: "15px"
                                }}
                                className={classes.paper}
                            >
                                <p style={{ margin: "0px", fontSize: "x-small" }} > ${product.cartquantity} </p>
                            </Paper>
                        </Grid>
                    </Grid>
                </div>
            )
        })}
        <div className={classes.root}>
            <Grid container spacing={1}>
                <Grid item xs={9} >
                    <Paper
                        style={{ display: "flex", justifyContent: "flex-start", flexDirection: "column", alignItems: "flex-start", boxShadow: " 1px 1px 1px white", marginBottom: "15px", marginTop: "15px" }}
                        className={classes.paper}
                    > Total:
                     </Paper>
                </Grid>

                <Grid item xs={3} >
                    <Paper
                        style={{ display: "flex", justifyContent: "flex-start", flexDirection: "column", alignItems: "flex-end", boxShadow: " 1px 1px 1px white", marginBottom: "15px", marginTop: "15px" }}
                        className={classes.paper}
                    >
                        <p style={{ margin: "0px", fontSize: "small" }} > ${cartTotal} </p>
                    </Paper>
                </Grid>
            </Grid>

        </div>
        </div>
    )
}
export default CartPopoverDisplay