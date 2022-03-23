export default function TextArea({ label }) {
  return (
    <div className="flex flex-col">
      <label htmlFor={label}>{label}</label>
      <input
        type="text"
        id={label}
        className="border-solid border-slate-400 border rounded-sm px-2 py-1 text-slate-400"
      />
    </div>
  );
}
