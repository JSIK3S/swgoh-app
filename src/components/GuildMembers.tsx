import { collection, onSnapshot, query } from "firebase/firestore";
import db from "../firebase.ts";
import { useEffect, useState } from "react";

function GuildMembers() {
  const [allyCodes, setAllyCodes] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const guildCollectionRef = collection(db, "guild");
    const q = query(guildCollectionRef);

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const allyCodesArray: string[] = [];
      querySnapshot.forEach((doc) => {
        const { allyCode } = doc.data();
        allyCodesArray.push(allyCode);
      });

      setAllyCodes(allyCodesArray);
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="m-8">
      <h2 className="text-2xl text-white">Jar Jar's Players:</h2>
      <ul>
        {allyCodes.map((allyCode, index) => (
          <li key={index} className="text-white">
            {allyCode}
          </li>
        ))}
      </ul>
    </div>
  );
}

export { GuildMembers };
