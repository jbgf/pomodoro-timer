'use client'

import React from 'react'
import { useState, useEffect } from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import { PomodoroSettings, PomodoroSession } from './types'

interface Props {
    settings: PomodoroSettings,
    content?: React.ReactNode
}

export default function PomodoroTimer({ settings, content }: Props) {
    const [timeLeft, setTimeLeft] = useState(settings.workDuration * 60)
    const [isRunning, setIsRunning] = useState(false)
    const [isWorkMode, setIsWorkMode] = useState(true)
    const [sessionCount, setSessionCount] = useState(0)

    useEffect(() => {
        let interval: NodeJS.Timeout | null = null

        if (isRunning && timeLeft > 0) {
            interval = setInterval(() => {
                setTimeLeft((time) => time - 1)
            }, 1000)
        } else if (timeLeft === 0) {
            handleSessionComplete()
        }

        return () => {
            if (interval) clearInterval(interval)
        }
    }, [isRunning, timeLeft])

    useEffect(() => {
        if (isWorkMode && settings.autoStartPomodoros) {
            setIsRunning(true)
        }
    }, [])

    const savePomodoroSession = (completed: boolean) => {
        const session: PomodoroSession = {
            type: isWorkMode ? 'work' : 'break',
            duration: isWorkMode ? settings.workDuration : settings.breakDuration,
            completed,
            timestamp: new Date()
        }

        const stored = localStorage.getItem('pomodoroSessions')
        const sessions = stored ? JSON.parse(stored) : []
        localStorage.setItem('pomodoroSessions', JSON.stringify([...sessions, session]))
    }

    const handleSessionComplete = () => {
        savePomodoroSession(true)
        /* const audio = new Audio('/sounds/bell.mp3')
        if (settings.soundEnabled) {
            audio.play()
        } */

        if (isWorkMode) {
            setSessionCount((count) => count + 1)
            setTimeLeft(settings.breakDuration * 60)
            if (settings.autoStartBreaks) {
                setIsRunning(true)
            }
        } else {
            setTimeLeft(settings.workDuration * 60)
            if (settings.autoStartPomodoros) {
                setIsRunning(true)
            }
        }
        setIsWorkMode(!isWorkMode)
    }

    const toggleTimer = () => {
        setIsRunning(!isRunning)
    }

    const resetTimer = () => {
        if (isRunning) {
            savePomodoroSession(false)
        }
        setIsRunning(false)
        setTimeLeft(isWorkMode ? settings.workDuration * 60 : settings.breakDuration * 60)
    }

    const minutes = Math.floor(timeLeft / 60)
    const seconds = timeLeft % 60

    return (
        <div className="flex flex-col items-center">
            <div className="w-64 h-64 mb-8">
                <CircularProgressbar
                    value={timeLeft}
                    maxValue={isWorkMode ? settings.workDuration * 60 : settings.breakDuration * 60}
                    text={`${minutes}:${seconds.toString().padStart(2, '0')}`}
                    styles={buildStyles({
                        textColor: isWorkMode ? '#FF6B6B' : '#4ECDC4',
                        pathColor: isWorkMode ? '#FF6B6B' : '#4ECDC4',
                        trailColor: '#F3F4F6',
                    })}
                />
            </div>

            {!!content && <div>{content}</div>}

            <div className="flex gap-4 mb-6 justify-center">
                <button
                    onClick={toggleTimer}
                    className={`btn ${isRunning ? 'btn-error' : 'btn-primary'}`}
                >
                    {isRunning ? 'Pause' : 'Start'}
                </button>
                <button onClick={resetTimer} className="btn btn-outline dark:bg-gray-800 dark:text-white">
                    Reset
                </button>
            </div>

            <div className="text-center">
                <p className="text-lg font-medium mb-2">
                    {isWorkMode ? 'Work Time' : 'Break Time'}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                    Sessions completed today: {sessionCount}
                </p>
            </div>
        </div>
    )
} 