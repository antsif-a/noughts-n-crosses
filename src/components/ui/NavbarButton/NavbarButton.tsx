import React, { ReactNode } from 'react';
import Button from '@/components/ui/Button';

interface NavbarItemProps {
    children: ReactNode | null;
    onClick: () => void;
}

export default function NavbarButton({ onClick, children }: NavbarItemProps) {
    return (
        <Button
          border={false}
          onClick={onClick}
        >
            {children}
        </Button>
    );
}
