# Pomodoro Timer

A React component for pomodoro timer.

![image](https://github.com/user-attachments/assets/98e3eb1d-4ebe-436b-890a-ca8cfcdc140c)

## Installation

```bash
pnpm add @j1010/pomodoro-timer
```

## Usage
You could use the component like this:
25 minutes work, 5 minutes break

```tsx
import { PomodoroTimer } from "@j1010/pomodoro-timer";

<PomodoroTimer settings={{
    workDuration: 25,
    breakDuration: 5,
    longBreakDuration: 15,
    sessionsUntilLongBreak: 4,
    soundEnabled: true,
    autoStartBreaks: true,
    autoStartPomodoros: false,
}} />
```

## Documentation

For detailed documentation, please check:

- [Component Documentation](./docs/components.md) - Detailed component API and usage examples
- [UI and Features Documentation](./docs/ui-and-features.md) - Detailed explanation of UI elements and features

## Official Demo Site
https://www.5minutetimer.app/pomodoro
