// src/pages/Splashscreen.tsx
export default function Splashscreen() {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-yellow-400 via-orange-500 to-purple-800">
      {/* Timi 动画 Logo */}
      <div className="mb-8 animate-bounce">
        <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-2xl border-8 border-yellow-300">
          <span className="text-5xl font-extrabold text-orange-500 tracking-widest">TiMi</span>
        </div>
      </div>
      {/* 王者荣耀大标题 */}
      <h1 className="text-5xl md:text-7xl font-extrabold text-white drop-shadow-lg mb-4 tracking-widest animate-fade-in">
        王者荣耀
      </h1>
      {/* 启动提示 */}
      <p className="text-xl md:text-2xl text-white/90 mb-8 animate-pulse">
        启动中，请稍等片刻...
      </p>
      {/* 进度条 */}
      <div className="w-64 h-3 bg-white/30 rounded-full overflow-hidden shadow-lg">
        <div className="h-full bg-yellow-300 animate-progress"></div>
      </div>
      {/* 版权信息 */}
      <div className="absolute bottom-8 text-white/60 text-xs tracking-widest">
        © 2024 TiMi Studio Group
      </div>
    </div>
  );
}
  