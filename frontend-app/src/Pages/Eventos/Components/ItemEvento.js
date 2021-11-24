import React from 'react'


import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import { Button } from "react-bootstrap";
import Container from '@material-ui/core/Container';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';


import "./ItemEvento.scss"




class ItemEvento extends React.Component  {
    
    constructor(props){
        super(props);
        this.state = {
            expanded: false,
            loadingImage: true,
            imageData: null
        }
    }
    
    componentDidMount(){
        console.log(this.props.dataEvento.path_foto)
        fetch(this.props.dataEvento.path_foto)
        .then(response => response.blob())
        .then(image => {
            // Create a local URL of that image
            const localUrl = URL.createObjectURL(image);
            console.log(localUrl)
            this.setState({
                imageData: localUrl,
            });
        })
    }

    //expandir componente
    handleExpandClick = () => {
        this.setState({
            expanded: !this.state.expanded
        })
    };

    render(){
        return(
            <Card className="root">
            <CardHeader
                avatar={
                    <Avatar
                        aria-label="recipe"
                        variant="square"
                        className={"avatar"}
                        style={{ width: 56, height: 56 }}
                    >
                        {this.props.dataEvento.valor_puntos}
                    </Avatar>
                }
                action={
                    <Typography
                        classname={"action"}
                        variant="h5"
                        color="textSecondary"
                    ></Typography>
                }

                title={this.props.dataEvento.titulo}
                subheader="Diciembre 14, 2021 | 2:00 p.m"

            />
            <CardMedia 
                className="media"
               src={ this.state.imageData}
                title= {this.props.dataEvento.categoria}
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    Verás cuán sencillo resulta configurar aspectos avanzados de tu
                    cámara para, desde los formatos de fotografía digital hasta el
                    balance de blancos, para poder tener un mejor control de la
                    imagen en la postproducción fotográfica.
                </Typography>
                <Button
                    variant="danger"
                    style={{ marginBottom: 2, marginTop: 8 }}
                    type="submit"
                    href="/formulario"
                >
                    INSCRIBIRSE AL AVENTO{" "}
                </Button>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton
                    className={this.state.expanded ? "expandOpen" : "expand"}
                    onClick={this.handleExpandClick}
                    aria-expanded={this.state.expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </IconButton>
            </CardActions>
            <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph>Method:</Typography>
                    <Typography paragraph>
                        Heat 1/2 cup of the broth in a pot until simmering, add
                        saffron and set aside for 10 minutes.
                    </Typography>

                </CardContent>
            </Collapse>
        </Card>
        )
    }


}

export default ItemEvento
