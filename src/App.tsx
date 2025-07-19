import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Input } from "./components/Input/Input";
import { Select } from "./components/Select/Select";
import { Button } from "./components/Button/Button";
import {
  ChevronUpIcon,
  ChevronDownIcon,
  UsersIcon,
  ChevronRightIcon,
  SignalIcon,
  MusicalNoteIcon,
} from "@heroicons/react/24/outline";

function App() {
  const [count, setCount] = useState(0);

  const emails = [
    "m@mail.com",
    "m@google.com",
    "m@support.com",
    "m@google.com",
  ];

  return (
    <>
      <div style={{ padding: 40 }}>
        <div style={{ padding: 10 }}>
          <Button variant="primary">Primary</Button>
        </div>
        <div style={{ padding: 10 }}>
          <Button disabled={false} variant="secondary">
            Secondary
          </Button>
        </div>
        <div style={{ padding: 10 }}>
          <Button disabled={false} variant="outline">
            Outline
          </Button>
        </div>
        <div style={{ padding: 10 }}>
          <Button disabled={false} variant="destructive">
            Destructive
          </Button>
        </div>
        <div style={{ padding: 10 }}>
          <Button disabled={false} variant="ghost">
            Ghost
          </Button>
        </div>
        <div style={{ padding: 10 }}>
          <Button disabled={true} variant="disabled">
            Disabled
          </Button>
        </div>
        <div style={{ padding: 10 }}>
          <Button disabled={false} variant="linck" href="#">
            Wrapped with link
          </Button>
        </div>
        <div style={{ padding: 10 }}>
          <Button
            disabled={false}
            icons={[<UsersIcon />, <ChevronRightIcon />]}
            variant="doubleIcon"
          >
            Audience
          </Button>
        </div>
        <div style={{ padding: 10 }}>
          <Button disabled={false} leftIcon={<SignalIcon />} variant="leftIcon">
            Left Icon Button text
          </Button>
        </div>
        <div style={{ padding: 10 }}>
          <Button
            disabled={false}
            rightIcon={<MusicalNoteIcon />}
            variant="rightIcon"
          >
            Right Icon Button text
          </Button>
        </div>
        <Select
          options={emails}
          helperText="You need to enter your full name in here."
          label="Name"
          Text="Enter your name"
        />
      </div>
      <div style={{ padding: 40 }}>
        <Input
          label="Name"
          helperText="You need to enter your full name in here."
          errorText="String must contain at least 2 character(s)"
        />
      </div>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
