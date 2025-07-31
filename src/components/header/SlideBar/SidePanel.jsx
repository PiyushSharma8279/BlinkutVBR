import "./slidebar.css"
import { useRef, useEffect } from "react";
import { X } from 'lucide-react';

const SidePanel = ({ isOpen, onClose, items }) => {
  const panelRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (panelRef.current && !panelRef.current.contains(event.target) && isOpen) {
        onClose();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);
  return (
    <>
      <div className={`backdrop ${isOpen ? 'active' : ''}`} onClick={onClose} />
      <div ref={panelRef} className={`side-panel ${isOpen ? 'open' : ''}`}>
        <div className="panel-header">
          <button className="close-btn cursor-pointer" onClick={onClose}><X/></button>
        </div>
        <div className="panel-content">
          <ul className="item-list">
            {items.map((item, index) => (
              <li
                key={index}
                className={`item ${index < 5 ? 'lg:hidden' : ''}`}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
export default SidePanel