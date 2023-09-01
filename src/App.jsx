import Card from "./components/Card";
import emojipedia from "./emojipedia";
function App() {
  console.log(emojipedia);
  return (
    <>
      <h1>
        <span>Emojipedia</span>
      </h1>
      <dl className="dictionary">
        {emojipedia.map((emojis) => (
          <Card
            key={emojis.id}
            emoji={emojis.emoji}
            name={emojis.name}
            meaning={emojis.meaning}
          />
        ))}
      </dl>
    </>
  );
}

export default App;
