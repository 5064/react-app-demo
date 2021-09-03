import './App.css';
import { Header } from './Header';
import { Rooms } from './Rooms';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { RoomDetail } from './RoomDetail';

export function App() {
  return (
    <Router>
      <div className="flex flex-col h-screen">
        <Header></Header>
        <Switch>
          <Route path="/room/:roomId">
            <RoomDetail />
          </Route>
          <Route path="/">
            <Rooms/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
