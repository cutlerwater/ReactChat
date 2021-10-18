import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import './App.css';


const App = () => {
  return (
    <ChatEngine
      height="!00vh"
      projectID="f740047d-1fe8-435a-a095-c0702133eefc"
      userName="jameson"
      userSecret="Lastsupper1@"
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  )
}

export default App;
