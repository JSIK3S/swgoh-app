import { useState } from "react";
import db from "../firebase.ts";
import {
  addDoc,
  collection,
  serverTimestamp,
  doc,
  setDoc,
} from "firebase/firestore";

function PlayerInput() {
  const [player, setPlayer] = useState("");

  const handlePlayerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPlayer(event.target.value);
  };

  const handleAddPlayer = () => {
    addPlayerToGuild(player);
    console.log(player);
  };

  async function addPlayerToGuild(allyCode: string) {
    const guildCollectionRef = collection(db, "guild");

    const newPlayer = {
      allyCode,
      createdAt: serverTimestamp(),
    };

    try {
      // const playerRef = doc(guildCollectionRef, allyCode);
      await addDoc(guildCollectionRef, newPlayer);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  return (
    <form className="m-8">
      <input
        type="text"
        placeholder="Enter Ally Code Here"
        value={player}
        onChange={handlePlayerChange}
      />
      <button
        className="text-white border-2 border-black px-1 py-1 m-2 rounded"
        onClick={handleAddPlayer}
      >
        Add Player
      </button>
    </form>
  );
}

export { PlayerInput };
