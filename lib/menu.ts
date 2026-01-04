// data/menu.ts
import { FaRupeeSign } from 'react-icons/fa6';
import { MenuItem } from '../types/menu';

export const menuItems: MenuItem[] = [
    {
        id: 1,
        name: "Chocolate Cake",
        description: "Rich and moist chocolate cake with a creamy frosting.",
        price: "₹ 450.00",
        image: "/image/choclatecake.webp"
    },
    {
        id: 2,
        name: "Fresh Fruit Cake",
        description: "Light and fluffy cake with fresh fruits overwhelmed with sprinkles.",
        price: "₹ 550.00",
        image: "/image/fruitcake.webp"
    },
    {
        id: 3,
        name: "Red Velvet Cake",
        description: "Classic red velvet cake with cream cheese frosting.",
        price: "₹ 500.00",
        image: "/image/redvelvetcake.webp"
    },
    {
        id: 4,
        name: "Black Forest Cake",
        description: "The Black Forest cake, with its layers of rich chocolate sponge, whipped cream.",
        price:"₹ 550.00",
        image: "/image/blackforestcake.webp"
    },
    {
        id: 5,
        name: "Butterscotch Cake",
        description: "Rich, buttery cake with caramel flavor, topped with smooth butterscotch frosting.",
        price: "₹ 650.00",
        image: "/image/butterscotchcake.webp"
    },{
        id: 6,
        name: "Blue Berry Cake",
        description: "Delightful blueberry cake with fresh berries and creamy frosting perfection.",
        price: "₹ 600.00",
        image: "/image/blueberrycake.webp"
    },
    // Add more items as needed
];
