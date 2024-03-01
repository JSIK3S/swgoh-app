import { FormEvent, useState } from "react";
import { db } from "../firebase.ts";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

function AddPlayer() {
  const [player, setPlayer] = useState("");

  const handlePlayerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPlayer(event.target.value);
  };

  const handleAddPlayer = async (e: FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();

      const guildCollectionRef = collection(db, "guild");
      const newPlayer = {
        allyCode: player,
        createdAt: serverTimestamp(),
      };

      await addDoc(guildCollectionRef, newPlayer);
      setPlayer("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className="m-8" onSubmit={handleAddPlayer}>
      <input
        type="text"
        placeholder="Enter Ally Code Here"
        value={player}
        onChange={handlePlayerChange}
      />
      <button
        className="text-white border-2 border-black px-1 py-1 m-2 rounded"
        type="submit"
      >
        Add Player
      </button>
    </form>
  );
}

export { AddPlayer };
