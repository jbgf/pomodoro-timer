import { default as default_2 } from 'react';

declare interface PomodoroSettings {
    workDuration: number;
    breakDuration: number;
    longBreakDuration: number;
    sessionsUntilLongBreak: number;
    soundEnabled: boolean;
    autoStartBreaks: boolean;
    autoStartPomodoros: boolean;
}

declare function PomodoroTimer({ settings, content }: Props): default_2.JSX.Element;
export default PomodoroTimer;

declare interface Props {
    settings: PomodoroSettings;
    content?: default_2.ReactNode;
}

export { }
