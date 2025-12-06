'use client';

export function Button({ children, onClick, className, variant }) {
  const base = 'px-4 py-2 rounded-2xl font-semibold transition-colors w-full';
  const style =
    variant === 'secondary'
      ? 'bg-gray-700 text-white hover:bg-gray-600'
      : 'bg-yellow-400 text-black hover:bg-yellow-300';

  return (
    <button className={`${base} ${style} ${className || ''}`} onClick={onClick}>
      {children}
    </button>
  );
}