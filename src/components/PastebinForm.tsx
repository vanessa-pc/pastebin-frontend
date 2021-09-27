import { config } from "dotenv";
import { useState } from "react";

config();
const apiBaseURL = process.env.REACT_APP_API_BASE;

export function PastebinForm({
  paste,
  setPaste,
}: {
  paste: string[];
  setPaste: React.Dispatch<React.SetStateAction<string[]>>;
}): JSX.Element {
  const [text, setText] = useState("");
  const onFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      setPaste([...paste, text]);
      const requestBody = {content: paste[paste.length-1]};
      const response = async () => {
        console.log(apiBaseURL);
        await fetch(`${apiBaseURL}`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(requestBody),
        });
      };
      response();
      // window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form className="pastebin-form" onSubmit={onFormSubmit}>
      <input
        type="text"
        value={text}
        className="pastebin-input"
        placeholder="Paste your text here."
        onChange={(e) => setText(e.target.value)}
      />
      <button className="submit-form-btn" onClick={() => setText("")}>
        Save Paste
      </button>
    </form>
  );
}
