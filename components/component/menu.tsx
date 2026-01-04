// components/Menu.tsx
import Image from 'next/image';
import { menuItems } from "@/lib/menu";
import { MenuItem } from "@/types/menu";

const Menu: React.FC = () => {
    return (
        <div className="menu">
            <h1 className="text-center text-3xl font-bold mb-8"></h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {menuItems.map((item: MenuItem) => (
                    <div key={item.id} className="border rounded-lg shadow-lg overflow-hidden">
                        <Image
                            src={item.image}
                            alt={item.name}
                            width={500}
                            height={300}
                            className="object-cover w-full h-48"
                        />
                        <div className="p-4">
                            <h2 className="text-xl font-semibold">{item.name}</h2>
                            <p className="text-gray-700 mt-2">{item.description}</p>
                            <p className="text-xl font-bold mt-4">{item.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Menu;
