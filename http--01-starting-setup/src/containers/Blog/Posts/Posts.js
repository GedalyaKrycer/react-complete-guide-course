import React, { Component } from 'react';
import './Posts.css';
import axios from '../../../axios';
import Post from '../../../components/Post/Post';
import { Route } from 'react-router-dom';
import FullPost from '../FullPost/FullPost';
// import { Link } from 'react-router-dom';


export class Posts extends Component {

    state = {
        posts: []
    }

    componentDidMount() {
        // console.log('Posts:', this.props.match.url);
        axios.get('/posts')
            .then(res => {
                const posts = res.data.slice(0, 4)
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author: 'Max'
                    }
                })
                this.setState({ posts: updatedPosts });
            })
            .catch(error => {
                console.log(error);
            })


    }

    postSelectedHandler = (id) => {
        this.props.history.push('/posts/' + id);

    }



    render() {

        let posts = <p style={{ textAlign: 'center' }}>Something went wrong!</p>

        if (!this.state.error) {
            posts = this.state.posts.map(post => {
                return (
                    // <Link to={`/${post.id}`} key={post.id} >
                    <Post
                        key={post.id}
                        title={post.title}
                        author={post.author}
                        clicked={() => this.postSelectedHandler(post.id)}
                    />
                    // </Link>
                )
            })
        }
        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <Route path={this.props.match.url + '/:id'} exact component={FullPost} />
            </div>
        )
    }
}

export default Posts;
