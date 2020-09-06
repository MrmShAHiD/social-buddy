import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Box } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './Post.css';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    boxShadow: 'none',
  },
  mainBtn: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 4,
    border: 0,
    color: 'white',
    height: 48,

    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
  linkBtn: {
    margin: '15px auto',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'none',
    },
  },
});

const Post = (props) => {
    const classes = useStyles();
    const {title, body, id} = props.post;
    console.log(props);
    return (
        <div className="post">
            <h1>{title}</h1>
            <p>{body}</p>
            <p><Link to={`/post/${id}`}><span id="see-more-button">See more</span></Link></p>
        </div>
    );
};

export default Post;