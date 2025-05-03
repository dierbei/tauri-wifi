// // src/pages/Splashscreen.tsx
// export default function Splashscreen() {
//   return (
//     <div className="fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-yellow-400 via-orange-500 to-purple-800">
//       {/* Timi 动画 Logo */}
//       <div className="mb-8 animate-bounce">
//         <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-2xl border-8 border-yellow-300">
//           <span className="text-5xl font-extrabold text-orange-500 tracking-widest">TiMi</span>
//         </div>
//       </div>
//       {/* 王者荣耀大标题 */}
//       <h1 className="text-5xl md:text-7xl font-extrabold text-white drop-shadow-lg mb-4 tracking-widest animate-fade-in">
//         王者荣耀
//       </h1>
//       {/* 启动提示 */}
//       <p className="text-xl md:text-2xl text-white/90 mb-8 animate-pulse">
//         启动中，请稍等片刻...
//       </p>
//       {/* 进度条 */}
//       <div className="w-64 h-3 bg-white/30 rounded-full overflow-hidden shadow-lg">
//         <div className="h-full bg-yellow-300 animate-progress"></div>
//       </div>
//       {/* 版权信息 */}
//       <div className="absolute bottom-8 text-white/60 text-xs tracking-widest">
//         © 2024 TiMi Studio Group
//       </div>
//     </div>
//   );
// }
  
import { useEffect, useRef, useState } from "react";

export default function Splashscreen() {
  const [progress, setProgress] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const duration = 3400;
    const interval = 50;
    const steps = duration / interval;
    let current = 0;

    const timer = setInterval(() => {
      current++;
      setProgress(Math.min(100, Math.floor((current / steps) * 100)));
      if (current >= steps) clearInterval(timer);
    }, interval);

    // 播放启动音效
    if (audioRef.current) {
      console.log("🔊 尝试播放音效...");
      audioRef.current.volume = 0.5;
      audioRef.current.play().catch((e) => {
        console.error("播放失败", e);
      });audioRef.current.play().catch(() => {});
    }

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-yellow-400 via-orange-500 to-purple-800 animate-gradient-move text-center">
      <audio ref={audioRef} src="./assets/yuanshen.mp3" preload="auto" />

      {/* Logo */}
      <div className="mb-8 animate-zoom-fade">
        <div className="w-32 h-32 rounded-full flex items-center justify-center shadow-2xl border-8 border-yellow-300 bg-white animate-glow">
          <span className="text-5xl font-bold text-orange-500 tracking-widest">TiMi</span>
        </div>
      </div>

      {/* Title */}
      <h1 className="text-white text-6xl font-extrabold drop-shadow-lg mb-2 tracking-widest animate-zoom-fade">
        王者荣耀
      </h1>

      {/* Subtitle */}
      <p className="text-white/90 text-xl mb-6 animate-pulse">正在启动，请稍候...</p>

      {/* 进度条 + 百分比 */}
      <div className="w-64 h-3 bg-white/30 rounded-full overflow-hidden mb-2 shadow-inner">
        <div
          className="h-full bg-yellow-300 transition-all duration-100 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
      <p className="text-white/80 text-sm font-mono">{progress}%</p>

      {/* Footer */}
      <div className="absolute bottom-6 text-white/60 text-xs tracking-widest">
        © 2024 TiMi 工作室版权所有 · <span className="underline cursor-pointer">切换语言</span>
      </div>
    </div>
  );
}
