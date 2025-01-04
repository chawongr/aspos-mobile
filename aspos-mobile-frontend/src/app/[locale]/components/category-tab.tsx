import { useState, useEffect, useRef } from "react";

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
    const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

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

    useEffect(() => {
        const activeTab = tabRefs.current.find(
            (ref) => ref && ref.getAttribute("data-id") === activeCategory.toString()
        );
        if (activeTab) {
            activeTab.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
        }
    }, [activeCategory]);

    return (
        <div className="flex space-x-4 overflow-x-auto p-2">
            {categories.map((category, index) => (
                <button
                    key={category.id}
                    data-id={category.id}
                    ref={(el) => {
                        tabRefs.current[index] = el;
                    }}
                    onClick={() => {
                        setActiveCategory(category.id);
                        onTabClick(category.id);
                    }}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium ${activeCategory === category.id
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


