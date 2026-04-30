import HomeScreen from '../../../features/menu/screen/HomeScreen';

export default function index() {
    return (
        <HomeScreen />
    );
}

//Se supone que desde aca van las redirecciones a los otros screens del home, 
// como el de platos, restaurantes, etc. 
// Por ahora solo hay el de platos, que es el DishHome.tsx,
//  pero se pueden agregar mas en el futuro.