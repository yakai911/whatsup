import { Avatar, IconButton } from "@material-ui/core";
import {
  AttachFile,
  InsertEmoticon,
  Mic,
  MoreVert,
  SearchOutlined,
} from "@material-ui/icons";
import React from "react";
import "../assets/Chat.css";

function Chat() {
  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar />
        <div className="chat__headerInfo">
          <h3>Room Name</h3>
          <p>Last seen at...</p>
        </div>
        <div className="chat__headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>

      <div className="chat__body">
        <p className="chat__reciever chat__message">
          <span className="chat__name">rddmg</span>
          the plastic of universe
          <span className="chat__timestamp ">{new Date().toUTCString()}</span>
        </p>
        <p className="chat__message">
          <span className="chat__name">Soney</span>
          This is message
          <span className="chat__timestamp">{new Date().toUTCString()}</span>
        </p>
      </div>
      <div className="chat__footer">
        <InsertEmoticon />
        <form>
          <input
            type="text"
            // onChange={(e) => setInput(e.target.value)}
            // value={input}
            placeholder="输入文字"
          />
        </form>
        <Mic />
      </div>
    </div>
  );
}

export default Chat;
