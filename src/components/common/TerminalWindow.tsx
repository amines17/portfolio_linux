import { ReactNode } from 'react';

interface TerminalWindowProps {
  title: string;
  children: ReactNode;
}

export default function TerminalWindow({ title, children }: TerminalWindowProps) {
  return (
    <div className="terminal-window">
      <div className="terminal-header flex items-center">
        <div className="flex">
          <div className="terminal-dot bg-red-500"></div>
          <div className="terminal-dot bg-yellow-500"></div>
          <div className="terminal-dot bg-green-500"></div>
        </div>
        <div className="ml-4 text-gray-400 text-sm">{title}</div>
      </div>
      <div className="p-6">
        {children}
      </div>
    </div>
  );
}