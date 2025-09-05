type Props = { label: string; onClick?: () => void };

export default function Button({ label, onClick }: Props) {
  return (
    <button onClick={onClick} className="flex items-center gap-1 hover:underline text-blue-500 font-semibold">
      {label}
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
        <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6m0 0H9m9 0v9" />
      </svg>
    </button>
  );
}
