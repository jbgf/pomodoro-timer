# Pomodoro Timer Component Documentation

## Overview

PomodoroTimer is a customizable pomodoro timer component built with React. It supports custom work and break durations, provides automation features, and records session data. The component uses CircularProgressbar for intuitive visual feedback.

For a detailed description of the UI elements and features, please see the [UI and Features documentation](./ui-and-features.md).

## Installation

```bash
# Using npm
npm install pomodoro-timer

# Using yarn
yarn add pomodoro-timer

# Using pnpm
pnpm add pomodoro-timer
```

## Basic Usage

```jsx
import React from 'react';
import { PomodoroTimer } from 'pomodoro-timer';

// Create default settings
const defaultSettings = {
  workDuration: 25,         // Work duration (minutes)
  breakDuration: 5,         // Break duration (minutes)
  longBreakDuration: 15,    // Long break duration (minutes)
  sessionsUntilLongBreak: 4, // Number of work sessions before a long break
  soundEnabled: true,       // Enable sound notifications
  autoStartBreaks: false,   // Auto-start breaks
  autoStartPomodoros: false // Auto-start work sessions
};

function App() {
  return (
    <div className="app">
      <h1>My Pomodoro Timer</h1>
      <PomodoroTimer settings={defaultSettings} />
    </div>
  );
}

export default App;
```

## Props

| Prop Name | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| settings | PomodoroSettings | Yes | - | Pomodoro timer configuration |
| content | React.ReactNode | No | undefined | Custom content to display below the progress bar |
| onSessionComplete | (session: PomodoroSession) => void | No | undefined | Callback function triggered when a session completes |

### PomodoroSettings Type Definition

```typescript
interface PomodoroSettings {
  workDuration: number;           // Work duration (minutes)
  breakDuration: number;          // Break duration (minutes)
  longBreakDuration: number;      // Long break duration (minutes)
  sessionsUntilLongBreak: number; // Number of work sessions before a long break
  soundEnabled: boolean;          // Enable sound notifications
  autoStartBreaks: boolean;       // Auto-start breaks
  autoStartPomodoros: boolean;    // Auto-start work sessions
}
```

## Session Data Structure

The component stores session data in localStorage under the key `pomodoroSessions`.

```typescript
interface PomodoroSession {
  type: 'work' | 'break';  // Session type
  duration: number;        // Duration (minutes)
  completed: boolean;      // Whether completed
  timestamp: Date;         // Timestamp
}
```

## Advanced Usage

### Adding Custom Content

```jsx
import React from 'react';
import { PomodoroTimer } from 'pomodoro-timer';

function App() {
  const settings = {
    workDuration: 25,
    breakDuration: 5,
    longBreakDuration: 15,
    sessionsUntilLongBreak: 4,
    soundEnabled: true,
    autoStartBreaks: true,
    autoStartPomodoros: true
  };

  const customContent = (
    <div className="custom-tasks">
      <h3>Current Tasks</h3>
      <ul>
        <li>Complete project documentation</li>
        <li>Reply to emails</li>
      </ul>
    </div>
  );

  return (
    <div className="app">
      <PomodoroTimer 
        settings={settings} 
        content={customContent} 
      />
    </div>
  );
}

export default App;
```

### Using the Session Completion Callback

```jsx
import React from 'react';
import { PomodoroTimer } from 'pomodoro-timer';

function App() {
  const settings = {
    workDuration: 25,
    breakDuration: 5,
    longBreakDuration: 15,
    sessionsUntilLongBreak: 4,
    soundEnabled: true,
    autoStartBreaks: false,
    autoStartPomodoros: false
  };

  const handleSessionComplete = (session) => {
    // Custom notifications or sounds
    if (session.type === 'work') {
      console.log('Work session completed!');
      // playCustomSound();
      // showCustomNotification('Great work! Time for a break.');
    } else {
      console.log('Break session completed!');
      // showCustomNotification('Break is over. Ready to focus again?');
    }

    // Integration with task tracking
    if (session.type === 'work' && session.completed) {
      // updateTaskProgress();
    }
  };

  return (
    <div className="app">
      <PomodoroTimer 
        settings={settings} 
        onSessionComplete={handleSessionComplete}
      />
    </div>
  );
}

export default App;
```

## Browser Compatibility

The PomodoroTimer component is compatible with all modern browsers, including:

- Chrome/Edge (latest versions)
- Firefox (latest version)
- Safari (latest version)
- Opera (latest version)

## Notes

- The timer uses `localStorage` to store session data, ensure your application has appropriate permissions
- The progress bar uses the react-circular-progressbar library, ensure this dependency is properly installed

## Related Documentation

- [UI and Features Documentation](./ui-and-features.md) - Detailed explanation of the user interface and features 