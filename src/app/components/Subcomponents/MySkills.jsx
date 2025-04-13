import { DataSkills } from "@/app/Data/DataSkills";

export default function MySkills() {
  const Skills = DataSkills.map( DS => {
    return(
      <button key={DS.key} className='h-10 w-25 shadow-1xl text-gray-700 bg-gray-300 rounded-sm  cursor-pointer hover:opacity-75'>
        {DS.Type}
      </button>
    )
  })
  return (Skills)
};
