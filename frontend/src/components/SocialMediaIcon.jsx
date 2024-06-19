import {IconBrandFacebook, IconBrandInstagram} from "@tabler/icons-react";
import {ActionIcon} from "@mantine/core";
import useFetch from "../hooks/useFetch.jsx";

/**
 * @param media Either 'facebook' or 'instagram'.
 * @param variant Either 'filled' or 'subtle'.
 * @param others Other params.
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