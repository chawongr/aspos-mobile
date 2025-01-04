import { useState, useEffect } from "react";

interface Category {
  id: number;
  name: string;
}

interface Props {
  categories: Category[];
  onTabClick: (categoryId: number) => void;
}

const CategoryTabs: React.FC<Props> = ({ categories, onTabClick }) => {
  const [activeCategory, setActiveCategory] = useState<number>(categories[0]?.id || 0);

  const handleScroll = () => {
    const sections = categories.map((category) =>
      document.getElementById(`category-${category.id}`)
    );
    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    sections.forEach((section, index) => {
      if (section) {
        const { offsetTop, offsetHeight } = section;
        if (scrollTop >= offsetTop && scrollTop < offsetTop + offsetHeight) {
          setActiveCategory(categories[index].id);
        }
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [categories]);

  return (
    <div className="flex space-x-4 overflow-x-auto p-2">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => {
            setActiveCategory(category.id);
            onTabClick(category.id);
          }}
          className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium ${
            activeCategory === category.id
              ? "bg-green text-white"
              : "bg-lightBg"
          }`}
        >
          <div className="truncate w-20">{category.name}</div>
        </button>
      ))}
    </div>
  );
};

export default CategoryTabs;

// interface CategoryTabProps {
//     categories: { id: number; name: string }[];
//     onTabClick: (categoryId: number) => void;
//     activeCategory: number;
//   }
  
//   const CategoryTabs: React.FC<CategoryTabProps> = ({ categories, onTabClick, activeCategory }) => {
//     return (
//       <div className="flex space-x-4 overflow-x-auto">
//         {categories.map((category) => (
//           <button
//             key={category.id}
//             onClick={() => onTabClick(category.id)}
//             className={`px-4 py-2 rounded-full ${
//               activeCategory === category.id ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-700'
//             }`}
//           >
//             {category.name}
//           </button>
//         ))}
//       </div>
//     );
//   };
  
//   export default CategoryTabs;
  