import React, { ReactNode } from 'react';
import Button from '@/components/ui/Button';

// TODO: Make a component similar to this with `link` property
interface NavbarItemProps {
    onClick: () => void;
    icon: ReactNode | null;
}

function NavbarItem({ onClick, icon }: NavbarItemProps) {
    return (
        <Button
          border={false}
          onClick={onClick}
        >
            {icon}
        </Button>
    );
}

export default NavbarItem;
