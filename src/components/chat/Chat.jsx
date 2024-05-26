import { useState } from 'react'
import './chat.css'
import EmojiPicker, { Emoji } from 'emoji-picker-react'

const Chat = () => {

    // State of emoji box opening
    const [open, setOpen] = useState(false);

    // State of input value receiving emojis
    const [text, setText] = useState("");

    const handleEmoji = (e) => {
        setText((prev) => prev + e.emoji)
        setOpen(false);
    }
    return (
        <div className='chat'>
            <div className="top">
                <div className="user">
                    <img src="./avatar.png" alt="" />
                    <div className="texts">
                        <span>Jane Doe</span>
                        <p>Random words are meant to blossom accros the univers, through the ages they have been walking around the planet giving shit to every flowers they could see.</p>
                    </div>
                </div>
                <div className="icons">
                    <img src="./phone.png" alt="" />
                    <img src="./video.png" alt="" />
                    <img src="./info.png" alt="" />
                </div>
            </div>
            <div className="center">

            </div>
            <div className="bottom">
                <div className="icons">
                    <img src="./img.png" alt="" />
                    <img src="./camera.png" alt="" />
                    <img src="./mic.png" alt="" />
                </div>
                <input 
                type="text" 
                placeholder='Type a message...'
                value={text}
                onChange={(e)=> setText(e.target.value)}
                />
                <div className="emoji" 
                onClick={ () => setOpen((prev)=> !prev)}>
                    <img className='emo' src="./emoji.png" alt="" />
                    <div className="picker">
                        <EmojiPicker open={open} onEmojiClick={handleEmoji}/>
                    </div>
                </div>
                <button className='sendButton'>Send</button>
            </div>
        </div>
    )
  }
  
  export default Chat