import "./App.css";
import { Input } from "./components/Input/Input";
import { Select } from "./components/Select/Select";
import { Button } from "./components/Button/Button";
import {
  UsersIcon,
  ChevronRightIcon,
  SignalIcon,
  MusicalNoteIcon,
} from "@heroicons/react/24/outline";

function App() {
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
          value="value text input"
          label="Name"
          helperText="You need to enter your full name in here."
          errorText="String must contain at least 2 character(s)"
        />
      </div>
    </>
  );
}

export default App;
