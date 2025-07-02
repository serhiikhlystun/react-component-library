import React from 'react';
import { MenuItem } from './types';

interface SidebarItemProps {
    item: MenuItem;
};

const SidebarItem: React.FC<SidebarItemProps> = ({ item }) => {
    return (
        <div className="sidebar-item">
            <span>{item.label}</span>
            {item.children && item.children.length > 0 && (
                <div className="ml-4 text-sm">
                    {item.children.map((child, index) => (
                        <SidebarItem key={index} item={child} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default SidebarItem;