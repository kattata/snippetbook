export default function Input({ label, name, isTextarea, rows }) {
  if (isTextarea) {
    return (
      <div className="flex flex-col">
        <label htmlFor={name}>{label}</label>
        <textarea
          name={name}
          id={name}
          rows={rows}
          className="border-solid border-slate-400 border rounded-sm px-2 py-1 text-slate-400"
        ></textarea>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col">
        <label htmlFor={name}>{label}</label>
        <input
          type="text"
          id={name}
          className="border-solid border-slate-400 border rounded-sm px-2 py-1 text-slate-400"
        />
      </div>
    );
  }
}
