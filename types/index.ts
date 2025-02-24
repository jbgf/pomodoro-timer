export interface PomodoroSession {
    type: 'work' | 'break';
    duration: number;
    completed: boolean;
    timestamp: Date;
}

export interface PomodoroSettings {
    workDuration: number;
    breakDuration: number;
    longBreakDuration: number;
    sessionsUntilLongBreak: number;
    soundEnabled: boolean;
    autoStartBreaks: boolean;
    autoStartPomodoros: boolean;
} 