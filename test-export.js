// 测试PomodoroTimer的导出情况
import PomodoroTimer from './dist/pomodoro-timer.js';

// 打印导出的内容
console.log('PomodoroTimer:', PomodoroTimer);
console.log('类型:', typeof PomodoroTimer);
console.log('是否为函数:', typeof PomodoroTimer === 'function');
console.log('是否有默认导出:', PomodoroTimer !== undefined);

// 检查属性
if (PomodoroTimer) {
  console.log('属性列表:', Object.keys(PomodoroTimer));
} 