import { GuildMembers } from "./components/GuildMembers";
import { PlayerInput } from "./components/PlayerInput";

function App() {
  return (
    <>
      <div className="bg-red-900 h-[1000px] flex items-center justify-center">
        <h1 className="text-white text-center text-3xl m-3">Hello Boyos</h1>
        <PlayerInput />
        <GuildMembers />
      </div>
    </>
  );
}

export default App;
