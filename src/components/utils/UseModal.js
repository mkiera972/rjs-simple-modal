import { useState } from 'react';

const useModal = () => {
    const [showModal, setModal] = useState(false);

    const Toggle = () => setModal(!showModal);   

    return {
        showModal, Toggle
    };
};

export default useModal;