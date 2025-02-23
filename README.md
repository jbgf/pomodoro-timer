### Pomodoro Timer

A React component for pomodoro timer.

### Installation

```bash
pnpm add @j1010/pomodoro-timer
```

### Usage
you could use the component like this:
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

## Official Demo Site
https://www.5minutetimer.app/pomodoro
