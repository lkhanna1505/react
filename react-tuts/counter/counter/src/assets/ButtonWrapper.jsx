// import { FiPlus } from "react-icons/fi";
// import { FiMinus } from "react-icons/fi";

const ButtonWrapper = ({ name, icon: Icon, onClick , count}) => {
  return (
    <div className="min-h-[20px] flex items-center justify-center">
      <NeumorphismButton name={name} icon={Icon} onClick={onClick} count={count} />
    </div>
  );
};

const NeumorphismButton = ({ name, icon: Icon, onClick, count }) => {
  return (
    <button
      onClick={() => {
        onClick();
        console.log(`Button ${name} clicked! and count is ${count}`);
      }}
      className={`
        px-4 py-2 rounded-full 
        flex items-center gap-2 
        text-slate-100
        shadow-[-5px_-5px_10px_rgba(_0,_0,_0,_0.8),_5px_5px_10px_rgba(0,_0,_0,_0.25)]
        
        transition-all

        hover:shadow-[-1px_-1px_5px_rgba(255,_255,_255,_0.6),_1px_1px_5px_rgba(0,_0,_0,_0.3),inset_-2px_-2px_5px_rgba(255,_255,_255,_1),inset_2px_2px_4px_rgba(0,_0,_0,_0.3)]
        hover:text-slate-100
    `}
    >
      <Icon />
      <span>{name}</span>
    </button>
  );
};

export default ButtonWrapper;