import './MiniPractiseCommentStyle.css'
import avatar from './images/avatar.png'
// Dependent data
const state = {
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

    // active
    active: 'hot',

    list: [
        {
            id: 1,
            author: 'Ellen Ji',
            comment: 'I am learning React, very beginning',
            time: new Date('2022-08-10 09:09:00'),
            // 1: Likes, 0: No attitude, -1:Hate
            attitude: 1
        },
        {
            id: 2,
            author: 'Jay Chou',
            comment: 'I am Ellen\'s favorite artist',
            time: new Date('2022-08-11 09:09:00'),
            // 1: Likes, 0: No attitude, -1:Hate
            attitude: 0
        },
        {
            id: 3,
            author: 'React',
            comment: 'I heard someone is learning me',
            time: new Date('2022-08-11 10:09:00'),
            // 1: Likes, 0: No attitude, -1:Hate
            attitude: -1
        }
    ]
}

// time formatting
function formatTime(time){
    // Formatting of time 2022-08-15
    // month is counted from 0, so must +1
    return `${time.getFullYear()}-${time.getMonth()+1}-${time.getDate()}`
}

function MiniPractiseComment () {
    return (
        <div className="App">
            <div className="comment-container">
                {/* Number of Comment */}
                <div className="comment-head">
                    <span>5 Comment</span>
                </div>
                {/* Sorting */}
                <div className="tabs-order">
                    <ul className="sort-container">
                        {state.tabs.map(item =>
                            <li className={item.type === state.active ? 'on':''}>
                                Sorting by {item.name}</li>)}
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
                        <textarea
                            cols="80"
                            rows="5"
                            placeholder="Leave your comment."
                            className="ipt-txt"
                        />
                        <button className="comment-submit">Public</button>
                    </div>
                    <div className="comment-emoji">
                        <i className="face"></i>
                        <span className="text">Emoji</span>
                    </div>
                </div>

                {/* Comment List */}
                <div className="comment-list">
                    {state.list.map(item =>(
                        <div className="list-item" key={item.id}>
                            <div className="user-face">
                                <img className="user-head" src={avatar} alt="" />
                            </div>
                            <div className="comment">
                                <div className="user">{item.author}</div>
                                <p className="text">{item.comment}</p>
                                <div className="info">
                                    <span className="time">
                                        {formatTime(item.time)}
                                    </span>
                                        {/*// Dynamic class name control*/}
                                    <span className={item.attitude === 1 ? 'like liked':'like'}>
                                        <i className="icon" />
                                    </span>
                                    <span className={item.attitude === -1 ? 'hate hated':'hate'}>
                                        <i className="icon" />
                                    </span>
                                    <span className="reply btn-hover">Delete</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default MiniPractiseComment