import { useState, useEffect } from "react";
import {
  UsersIcon,
  ChevronRightIcon,
  SignalIcon,
  MusicalNoteIcon,
} from "@heroicons/react/24/outline";

import { Button } from "./components/Button/Button";
import { Input } from "./components/Input/Input";
import { Select } from "./components/Select/Select";

function App() {
  const emails = [
    "m@mail.com",
    "m@google.com",
    "m@support.com",
    "m@google.com",
  ];

  const [name, setName] = useState("");
  const hasError = name.length > 0 && name.length < 2;

  const [selectedText, setTextBefor] = useState("");

  useEffect(() => {
    setName("Test text bla bla bla");
    setTextBefor("Test Select");
  }, []);

  return (
    <>
      <div style={{ padding: 40 }}>
        <div style={{ padding: 40 }}>
          <Select
            options={emails}
            helperText="You need to enter your full name in here."
            label="Name"
            value={selectedText}
            onChange={(val) => setTextBefor(val)}
          />
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            label="Name"
            helperText="You need to enter your full name."
            errorText={hasError ? "Must be at least 2 characters" : ""}
            hasError={hasError}
          />
        </div>
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
      </div>
    </>
  );
}

export default App;
