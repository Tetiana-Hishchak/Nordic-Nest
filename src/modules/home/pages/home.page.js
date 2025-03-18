import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { box } from './home.style';
import { useNavigate } from 'react-router-dom';
import SliderComponent from '../components/slider/slider.component';
import Nostalgia from '../components/nostalgia/nostalgia.component';
import CategorySlider from '../components/categoriesCarousel/categoriesCarousel.component';
import Faq from '../components/faq/faq.component';
import GetTheLook from '../components/getTheLook/getTheLook.component';
import ExclusiveCircle from '../components/exclusiveCircle/exclusiveCircle';
import ItemsCarousel from '../components/itemsCarousel/itemsCarousel.component';
export const HomePage = () => {
    const navigate = useNavigate();
    return (_jsxs("div", { className: box, children: [_jsx(SliderComponent, {}), _jsx(Nostalgia, {}), _jsx(CategorySlider, {}), _jsx(GetTheLook, {}), _jsx(ItemsCarousel, {}), _jsx(ExclusiveCircle, {}), _jsx(Faq, {})] }));
};
