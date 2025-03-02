import React, { useState, useEffect } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

// 定义组件的Props接口
export interface PomodoroTimerProps {
  settings: {
    workDuration: number; // 工作时长（分钟）
    breakDuration: number; // 休息时长（分钟）
    autoStartBreaks: boolean; // 是否自动开始休息
    autoStartPomodoros: boolean; // 是否自动开始下一个番茄钟
  };
  content?: React.ReactNode; // 可选的额外内容
}

// 番茄钟组件
const PomodoroTimer: React.FC<PomodoroTimerProps> = ({ settings, content }) => {
  // 状态管理
  const [timeLeft, setTimeLeft] = useState(settings.workDuration * 60); // 剩余时间（秒）
  const [isActive, setIsActive] = useState(false); // 计时器是否激活
  const [isWorkMode, setIsWorkMode] = useState(true); // 是否处于工作模式
  const [sessionsCompleted, setSessionsCompleted] = useState(0); // 已完成的番茄钟数量

  // 计时器逻辑
  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;

    if (isActive && timeLeft > 0) {
      // 如果计时器激活且时间大于0，每秒减少1
      timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      // 时间结束时切换模式
      handleComplete();
    }

    // 清理函数
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [isActive, timeLeft]);

  // 记录会话数据到本地存储
  const saveSession = (completed: boolean) => {
    const session = {
      type: isWorkMode ? 'work' : 'break',
      duration: isWorkMode ? settings.workDuration : settings.breakDuration,
      completed: completed,
      timestamp: new Date()
    };

    // 获取现有会话数据
    const existingSessions = localStorage.getItem('pomodoroSessions');
    const sessions = existingSessions ? JSON.parse(existingSessions) : [];

    // 保存更新后的会话数据
    localStorage.setItem('pomodoroSessions', JSON.stringify([...sessions, session]));
  };

  // 处理计时完成
  const handleComplete = () => {
    // 保存完成的会话
    saveSession(true);

    if (isWorkMode) {
      // 工作模式结束，切换到休息模式
      setSessionsCompleted(prev => prev + 1);
      setTimeLeft(settings.breakDuration * 60);
      if (settings.autoStartBreaks) {
        setIsActive(true);
      }
    } else {
      // 休息模式结束，切换到工作模式
      setTimeLeft(settings.workDuration * 60);
      if (settings.autoStartPomodoros) {
        setIsActive(true);
      }
    }

    // 切换模式
    setIsWorkMode(!isWorkMode);
  };

  // 开始/暂停计时器
  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  // 重置计时器
  const resetTimer = () => {
    // 如果计时器正在运行，保存未完成的会话
    if (isActive) {
      saveSession(false);
    }

    setIsActive(false);
    setTimeLeft(isWorkMode ? settings.workDuration * 60 : settings.breakDuration * 60);
  };

  // 格式化时间显示
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="flex flex-col items-center">
      {/* 圆形进度条 */}
      <div className="w-64 h-64 mb-8">
        <CircularProgressbar
          value={timeLeft}
          maxValue={isWorkMode ? settings.workDuration * 60 : settings.breakDuration * 60}
          text={`${minutes}:${seconds.toString().padStart(2, '0')}`}
          styles={buildStyles({
            textColor: isWorkMode ? '#FF6B6B' : '#4ECDC4',
            pathColor: isWorkMode ? '#FF6B6B' : '#4ECDC4',
            trailColor: '#F3F4F6'
          })}
        />
      </div>

      {/* 额外内容 */}
      {!!content && <div>{content}</div>}

      {/* 控制按钮 */}
      <div className="flex gap-4 mb-6 justify-center">
        <button
          onClick={toggleTimer}
          className={`btn ${isActive ? 'btn-error' : 'btn-primary'}`}
        >
          {isActive ? '暂停' : '开始'}
        </button>
        <button
          onClick={resetTimer}
          className="btn btn-outline dark:bg-gray-800 dark:text-white"
        >
          重置
        </button>
      </div>

      {/* 状态信息 */}
      <div className="text-center">
        <p className="text-lg font-medium mb-2">
          {isWorkMode ? '工作时间' : '休息时间'}
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          今日已完成番茄钟: {sessionsCompleted}
        </p>
      </div>
    </div>
  );
};

export default PomodoroTimer; 