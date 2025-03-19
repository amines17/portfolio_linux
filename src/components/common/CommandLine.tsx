interface CommandLineProps {
  command: string;
}

export default function CommandLine({ command }: CommandLineProps) {
  return (
    <div className="text-emerald-500 mb-2">$ {command}</div>
  );
}