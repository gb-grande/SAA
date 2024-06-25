import {IconBrandFacebook, IconBrandInstagram} from "@tabler/icons-react";
import {ActionIcon} from "@mantine/core";
import useFetch from "../hooks/useFetch.jsx";

/**
 * A SocialMediaIcon component that renders an icon for a specific social media platform.
 * 
 * @param {string} media - The name or identifier of the social media platform. Either 'facebook' or 'instagram'.
 * @param {string} variant - The variant of the icon. Either 'filled' or 'subtle'.
 * @returns {JSX.Element} The SocialMediaIcon component.
 */
function SocialMediaIcon({media, variant = 'filled', ...others}){
    const {result, error} = useFetch('api/contactInfos', {
        defaultValue: {
            instagram: '',
            facebook: ''
        }
    });
    if (error) console.error('Could not load contact info.', error);

    const style = {width: '100%', height: '100%'};
    let icon;
    let color;
    let url;
    switch (media){
        case 'facebook':
            icon = (<IconBrandFacebook style={style}/>);
            color = 'blue';
            url = result.facebook;
            break;
        case 'instagram':
            icon = (<IconBrandInstagram style={style}/>);
            color = 'pink';
            url = 'https://www.instagram.com/' + result.instagram;
            break;
        default: return (<></>);
    }

    if (variant === 'subtle') color = 'white';

    return (
        <ActionIcon 
            variant={variant}
            color={color} 
            size="lg"
            radius="xl" 
            component="a" 
            href={url}
            {...others}
        >
            {icon}
        </ActionIcon>
    )
}

export default SocialMediaIcon;