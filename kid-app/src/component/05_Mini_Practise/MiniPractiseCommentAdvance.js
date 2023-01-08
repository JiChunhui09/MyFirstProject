import './MiniPractiseCommentStyle.css'
import avatar from './images/avatar.png'
import React from "react";

// time formatting
function formatTime(time){
    // Formatting of time 2022-08-15
    // month is counted from 0, so must +1
    return `${time.getFullYear()}-${time.getMonth()+1}-${time.getDate()}`
}

class Comment extends React.Component {
    state = {
        // hot: Hot sorting  time: Time sorting
        tabs: [
            {
                id: 1,
                name: 'hot',
                type: 'hot'
            },
            {
                id: 2,
                name: 'time',
                type: 'time'
            }
        ],

        list: [
            {
                id: 1,
                author: 'Ellen Ji',
                comment: 'I am learning React, very beginning',
                time: new Date('2022-08-10 09:09:00'),
                // 1: Likes, 0: No attitude, -1:Steps
                attitude: 1
            },
            {
                id: 2,
                author: 'Jay Chou',
                comment: 'I am Ellen\'s favorite artist',
                time: new Date('2022-08-11 09:09:00'),
                // 1: Likes, 0: No attitude, -1:Steps
                attitude: 0
            },
            {
                id: 3,
                author: 'React',
                comment: 'I heard someone is learning me',
                time: new Date('2022-08-11 10:09:00'),
                // 1: Likes, 0: No attitude, -1:Steps
                attitude: -1
            }
        ],

        // active, key state
        active: 'hot',

        // Content in Comment input textarea
        comment: ''
    }

    // Switch the tab:
    switchTab = (type) => {
        // click to activate the state of type
        this.setState({
            active: type
        })
    }

    // Controlled component callback:
    textareaChange = (e) => {
        this.setState({
            comment: e.target.value
        })
    }

    // public comment once click button-public
    submitComment =() => {
        this.setState({
            list:[
                ...this.state.list,
                {
                    id: this.state.list.length+1,
                    author: 'Someone',
                    comment: this.state.comment,
                    time: new Date(),
                    // 1: Likes, 0: No attitude, -1:Steps
                    attitude: 0
                }
            ]
        })
    }

    // delete the comment
    delComment =(id) => {
        this.setState({
            list: this.state.list.filter(item => item.id !== id)
        })
    }

    // switch tag of like and dislike
    toggleLike =(curItem) => {
        const {attitude, id} = curItem
        this.setState({
            // 1: Likes, 0: No attitude, -1:Steps
            list: this.state.list.map(item => {
                // if item.id === id, change the feature of attitude
                if(item.id === id){
                    return {
                        ...item,
                        attitude: attitude === 1 ? 0 : 1
                    }
                } else{
                    return item
                }
            })
        })
    }
    toggleHate=(curItem) => {
        const {attitude, id} = curItem
        this.setState({
            // 1: Likes, 0: No attitude, -1:Steps
            list: this.state.list.map(item => {
                // if item.id === id, change the feature of attitude
                if(item.id === id){
                    return {
                        ...item,
                        attitude: attitude === -1 ? 0 : -1
                    }
                } else{
                    return item
                }
            })
        })
    }

    render() {
        return (
            <div className="App">
                <div className="comment-container">
                    {/* Number of Comment */}
                    <div className="comment-head">
                        <span>3 Comment</span>
                    </div>
                    {/* Sorting */}
                    <div className="tabs-order">
                        <ul className="sort-container">
                            {this.state.tabs.map(item=>
                                <li
                                    onClick={() => this.switchTab(item.type)}
                                    key={item.id}
                                    className={item.type === this.state.active ? 'on':''}
                                >Sorting by {item.name}</li>)}
                            {/*<li className="on">Sorting by Hot</li>*/}
                            {/*<li>Sorting by Time</li>*/}
                        </ul>
                    </div>

                    {/* add comment */}
                    <div className="comment-send">
                        <div className="user-face">
                            <img className="user-head" src={avatar} alt="" />
                        </div>
                        <div className="textarea-container">
                            {/* input textarea, controlled component*/}
                            <textarea
                                cols="80"
                                rows="5"
                                placeholder="Leave your comment."
                                className="ipt-txt"
                                value={this.state.comment}
                                onChange={this.textareaChange}
                            />
                            <button
                                className="comment-submit"
                                onClick={this.submitComment}
                            >Public</button>
                        </div>
                        <div className="comment-emoji">
                            <i className="face"></i>
                            <span className="text">Emoji</span>
                        </div>
                    </div>

                    {/* Comment List */}
                    <div className="comment-list">
                        {this.state.list.map(item =>(
                            <div className="list-item" key={item.id}>
                                <div className="user-face">
                                    <img className="user-head" src={avatar} alt="" />
                                </div>
                                <div className="comment">
                                    <div className="user">{item.author}</div>
                                    <p className="text">{item.comment}</p>
                                    <div className="info">
                                        <span className="time">{formatTime(item.time)}</span>

                                        {/*// Dynamic class name control*/}
                                        <span
                                            onClick={() => this.toggleLike(item)}
                                            className={item.attitude === 1 ? 'like liked':'like'}>
                                            <i className="icon" />
                                        </span>
                                        <span
                                            onClick={() => this.toggleHate(item)}
                                            className={item.attitude === -1 ? 'hate hated':'hate'}>
                                            <i className="icon" />
                                        </span>
                                        <span className="reply btn-hover" onClick={() => this.delComment(item.id)}>
                                            Delete
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}

function MiniPractiseCommentAdvance() {
    return (
        <div>
            <Comment />
        </div>
    );
}

export default MiniPractiseCommentAdvance