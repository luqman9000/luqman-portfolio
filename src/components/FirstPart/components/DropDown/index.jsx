import React, { useState } from 'react';
import { FaChevronDown } from "react-icons/fa";
import './styles.css';

const DropDown = () => {
    const [toggleDropdown, setToggleDropdown] = useState(false);
    const [selectedItem, setSelectedItem] = useState(1);
    const data = [{id: 0, label: "Istanbul, TR (AHL)"}, {id: 1, label: "Paris, FR (CDG)"}, {id: 2, label: "Kuantan, Pahang"}];

    const handleItemClick = (id) => {
        setSelectedItem(id);
        setToggleDropdown(false);
    }

    const clickDropdown = () => setToggleDropdown(!toggleDropdown);

    return (
        <>
            Bored with current theme? Change it here!
            <div className="dropdown">
                <div className="dropdown-header" onClick={clickDropdown}>
                    {selectedItem !== null ? data.find(item => item.id === selectedItem).label : "null"}
                    <i className="icon">
                        <FaChevronDown/>
                    </i>
                </div>
                <div className={`dropdown-body ${toggleDropdown ? 'open' : ''}`}>
                    {data.map(item => (
                        <div key={item.id} className="dropdown-item" onClick={() => handleItemClick(item.id)}>
                            {item.label}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default DropDown;
