import {IconBrandFacebook, IconBrandInstagram} from "@tabler/icons-react";
import {ActionIcon} from "@mantine/core";
import useFetch from "../hooks/useFetch.jsx";

/**
 * @param media Either 'facebook' or 'instagram.
 */
function SocialMediaIcon({media}){
    const {result, error} = useFetch('api/contactInfos');
    if (error) console.error('Could not load contact info.', error);
    if (!result) return (<></>);

    const style = {width: '100%', height: '100%'};
    let icon;
    let color;
    let url;
    switch (media){
        case 'facebook':
            icon = <IconBrandFacebook style={style}/>;
            color = 'blue';
            url = result.facebook;
            break;
        case 'instagram':
            icon = <IconBrandInstagram style={style}/>;
            color = 'pink';
            url = 'https://www.instagram.com/' + result.instagram;
            break;
        default: return (<></>);
    }

    return (
        <ActionIcon variant="filled" color={color} size="xl" radius="xl" component="a" href={url}>
            {icon}
        </ActionIcon>
    )
}

export default SocialMediaIcon;