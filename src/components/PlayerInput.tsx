function PlayerInput() {
  return (
    <form className="m-8">
      <input type="text" placeholder="Add New Players Here" />
      <button className="text-white border-2 border-black px-1 py-1 m-2 rounded">
        Add Player
      </button>
    </form>
  );
}

export { PlayerInput };
