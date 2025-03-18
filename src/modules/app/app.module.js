import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import * as React from 'react';
import PromoBanner from '~modules/home/components/promoBanner/promoBanner.component';
import { MainRouter } from '~router/main-router';
import Footer from '~shared/components/footer/footer.component';
import Header from '~shared/components/header/header.component';
import Modal from '~shared/components/modal shop/modal';
import Navigation from '~shared/components/header/components/navigation/navigation.component';
import Space from '~shared/components/space/space';
import ModalImg from '~shared/components/modalImg/modalImg';
import { useThemeStore } from '~shared/stores/theme.store';
import { useLocation } from 'react-router-dom';
const App = () => {
    const { pathname } = useLocation();
    console.log(pathname);
    const setIsLight = useThemeStore((state) => state.setIsLight);
    React.useEffect(() => {
        setIsLight(pathname !== '/');
    }, [pathname]);
    const [isModalOpen, setIsModalOpen] = React.useState(false);
    const modalRef = React.useRef(null);
    const handleOutsideClick = (event) => {
        if (modalRef.current && event.target instanceof Node && !modalRef.current.contains(event.target)) {
            setIsModalOpen(false);
        }
    };
    React.useEffect(() => {
        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);
    const handleShopClick = () => {
        setIsModalOpen((prevState) => !prevState);
    };
    return (_jsxs(_Fragment, { children: [_jsx(PromoBanner, {}), _jsx(Header, { onShopClick: handleShopClick }), _jsx(Navigation, { isModalOpen: isModalOpen, onShopClick: handleShopClick }), _jsx(MainRouter, {}), _jsx(Footer, {}), _jsx(Modal, { isOpen: isModalOpen, onClose: () => setIsModalOpen(false), children: _jsxs("div", { ref: modalRef, style: {
                        display: 'flex',
                        width: '100%',
                        justifyContent: 'space-between',
                        padding: '70px 80px',
                    }, children: [_jsx(Space, {}), _jsx(ModalImg, {})] }) })] }));
};
export default App;
