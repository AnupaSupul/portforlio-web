import React from 'react';

const NavLink = ({ id, label, isAction = false, onClick, isActive }) => (
    <button
        onClick={() => onClick(id)}
        className={`text-sm font-medium transition-all duration-300 relative px-2 ${isAction
                ? 'bg-brand-orange/10 text-brand-orange border border-brand-orange/50 rounded-full px-4 py-1 hover:bg-brand-orange hover:text-white'
                : isActive
                    ? 'text-brand-orange font-bold drop-shadow-[0_0_8px_rgba(255,85,0,0.5)]'
                    : 'text-slate-400 hover:text-brand-orange'
            }`}
    >
        {label}
        {!isAction && isActive && (
            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-brand-orange shadow-[0_0_10px_rgba(255,85,0,0.8)] rounded-full"></span>
        )}
    </button>
);

export default NavLink;
