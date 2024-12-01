import React from 'react';

interface ToggleUsersProps {
  toggles: string[];
  count: number;
  selected:string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
}

const ToggleUsers: React.FC<ToggleUsersProps> = ({ toggles, count,selected,setSelected }) => {
  

  const handleToggleClick = async(toggle: string) => {
    if(toggles.length < 2) return;
    setSelected(toggle);   
  };

  return (
    <div className="my-2.5">
      <h1 className="font-medium mb-1">All Users ({count})</h1>
      <div className="flex justify-between items-center">
        <div className="flex bg-white p-1 gap-1 w-fit rounded-md">
          {toggles.map((toggle) => (
            <h6
              key={toggle}
              onClick={toggles.length < 2 ? undefined : () => handleToggleClick(toggle)}
              className={`cursor-pointer text-lg p-1 rounded-sm ${toggles.length < 2? 'bg-[#16a34a] text-white cursor-default':
                toggle === selected ? 'bg-[#16a34a] text-white' : 'bg-[#ededed] text-black'
              }`}
            >
              {toggle}
            </h6>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ToggleUsers;
