import React, { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@/components/ui/Button';

interface NavbarItemProps {
    to: string;
    icon: ReactNode | null;
}

function NavbarItem({ to, icon }: NavbarItemProps) {
    const navigate = useNavigate();

    return (
        <Button
          border={false}
          onClick={() => navigate(to)}
        >
            {icon}
        </Button>
    );
}

export default NavbarItem;
