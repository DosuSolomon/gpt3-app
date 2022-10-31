import { useState } from "react";
import Text from "../../components/text";
const Header = () => {
  const [text, setText] = useState([
    { title: "chatbot", knowledge: "hdsfhfj", id: 1 },
    { title: "chatbot2", knowledge: "hdsfhfj", id: 2 },
    { title: "chatbot2", knowledge: "hdsfhfj", id: 3 },
  ]);
  return (
    <div key={text.id}>
      {text.map((t) => (
        <Text title={t.title} knowledge={t.knowledge} />
      ))}
    </div>
  );
};

export default Header;
