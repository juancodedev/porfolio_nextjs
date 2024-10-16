import Link from 'next/link';
import { FaGithub, FaLinkedinIn, FaYoutube, FaTwitter } from 'react-icons/fa'
import { Interface } from 'readline';

interface SocialItem {
    icon: JSX.Element,
    path: string,
}

const socials: SocialItem[] = [
    { icon: <FaGithub />, path: 'https://github.com/juancodedev' },
    { icon: <FaLinkedinIn />, path: 'https://www.linkedin.com/in/juanshocl/' },
    { icon: <FaYoutube />, path: 'https://www.youtube.com/juanshocl' },
    // { icon: <FaTwitter />, path: '' },
]

interface SocialProps {
    containerStyles?: string | React.CSSProperties;
    iconStyles: string | React.CSSProperties;
}

const Social: React.FC<SocialProps> = ({ containerStyles, iconStyles }) => {
    return (
        <div className={containerStyles as string}>
            {socials.map((item, index) => {
                return (
                    <Link key={index} href={item.path} className={iconStyles as string } target='blank_'>
                        {item.icon}
                    </Link>
                );
            })}
        </div>
    );
};

export default Social