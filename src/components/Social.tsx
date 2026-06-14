import React from 'react';
import Link from 'next/link';
import { FaGithub, FaLinkedinIn, FaYoutube } from 'react-icons/fa'
import { cn } from '@/lib/utils';

interface SocialItem {
    icon: React.ReactNode,
    path: string,
    label: string,
}

const socials: SocialItem[] = [
    { icon: <FaGithub />, path: 'https://github.com/juancodedev', label: 'GitHub' },
    { icon: <FaLinkedinIn />, path: 'https://www.linkedin.com/in/juanshocl/', label: 'LinkedIn' },
    { icon: <FaYoutube />, path: 'https://www.youtube.com/juanshocl', label: 'YouTube' },
]

interface SocialProps {
    containerStyles?: string;
    iconStyles?: string;
}

const Social: React.FC<SocialProps> = ({ containerStyles, iconStyles }) => {
    return (
        <div className={containerStyles}>
            {socials.map((item, index) => (
                <Link
                    key={index}
                    href={item.path}
                    target='_blank'
                    rel="noopener noreferrer"
                    aria-label={item.label}
                    className={cn(
                        "w-9 h-9 border border-primary/30 rounded-full flex justify-center items-center text-primary text-base hover:bg-primary hover:text-primary-foreground transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                        iconStyles
                    )}
                >
                    {item.icon}
                </Link>
            ))}
        </div>
    );
};

export default Social
