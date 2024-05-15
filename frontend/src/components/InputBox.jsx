export const InputBox = ({ label, onChange,type }) => {
  return (
    <div>
      <div className="text-black font-medium my-1.5">{label}</div>
      <input
        className="w-full h-8 rounded-md border border-slate-400 focus:outline-none focus:ring focus:ring-green-200"
        type={type}
        onChange={onChange}
      />
    </div>
  );
};
