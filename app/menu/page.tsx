// pages/index.tsx
import Menu from "@/components/component/menu";

const Home: React.FC = () => {
    return (
        <div className="bg-orange-100">
        <nav className="bg-amber-800 shadow-md">
         <div className="container mx-auto px-4 ">
             <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                    <div className="relative flex items-center justify-between h-16">
                        <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                            <div className="flex-shrink-0 text-2xl text-center rounded-b-xl font-bold text-white">
                                Cake Shop Menu
                            </div>
                        </div>
                        <div className="hidden sm:flex sm:ml-auto">
                            <a href="/" className="text-white px-3 text-lg font-medium hover:underline underline-offset-4">Home</a>
                            <a href="/contact" className="text-white text-lg font-medium hover:underline underline-offset-4">Contact</a>
                        </div>
                    </div>
            </div>
            </div>
            </nav>
            <Menu />
        </div>
        
    );
};

export default Home;
