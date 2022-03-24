export default function Input({ label, name, isTextarea, rows }) {
  return (
    <div className="flex flex-col">
      <label htmlFor={name} className="mb-1 mt-3">
        {label}
      </label>
      {isTextarea ? (
        <textarea
          name={name}
          id={name}
          rows={rows}
          className="border-solid border-slate-400 border rounded-sm px-2 py-1 text-slate-400"
        ></textarea>
      ) : (
        <input
          type="text"
          id={name}
          className="border-solid border-slate-400 border rounded-sm px-2 py-1 text-slate-400"
        />
      )}
    </div>
  );
}
