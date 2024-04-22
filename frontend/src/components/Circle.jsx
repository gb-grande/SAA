import { useMantineTheme, Text, Space } from '@mantine/core';

// Exemplo:
//
//  <Circle
//      icon='dog' // use 'dog' 'food' or 'alert'
//      number='+100'
//      description='Cachorros resgatados'
//      />
//
//
//

function Circle({number, description, icon}) {
    const theme = useMantineTheme();

    let iconContent;

    if (icon === 'dog') {
        iconContent = <svg  xmlns="http://www.w3.org/2000/svg"  width="100"  height="100"  viewBox="0 0 24 24"  fill="none"  stroke={theme.colors['aprai-green'][3]}  strokeWidth="1"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-dog"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M11 5h2" /><path d="M19 12c-.667 5.333 -2.333 8 -5 8h-4c-2.667 0 -4.333 -2.667 -5 -8" /><path d="M11 16c0 .667 .333 1 1 1s1 -.333 1 -1h-2z" /><path d="M12 18v2" /><path d="M10 11v.01" /><path d="M14 11v.01" /><path d="M5 4l6 .97l-6.238 6.688a1.021 1.021 0 0 1 -1.41 .111a.953 .953 0 0 1 -.327 -.954l1.975 -6.815z" /><path d="M19 4l-6 .97l6.238 6.688c.358 .408 .989 .458 1.41 .111a.953 .953 0 0 0 .327 -.954l-1.975 -6.815z" /></svg>
    } else if (icon === 'alert') {
        iconContent = <svg  xmlns="http://www.w3.org/2000/svg"  width="100"  height="100"  viewBox="0 0 24 24"  fill="none"  stroke={theme.colors['aprai-green'][3]}  strokeWidth="1"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-alert-triangle"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 9v4" /><path d="M10.363 3.591l-8.106 13.534a1.914 1.914 0 0 0 1.636 2.871h16.214a1.914 1.914 0 0 0 1.636 -2.87l-8.106 -13.536a1.914 1.914 0 0 0 -3.274 0z" /><path d="M12 16h.01" /></svg>
    } else if (icon === 'food') {
        iconContent = <svg  xmlns="http://www.w3.org/2000/svg"  width="100"  height="100"  viewBox="0 0 24 24"  fill="none"  stroke={theme.colors['aprai-green'][3]}  strokeWidth="1"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-dog-bowl"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 15l5.586 -5.585a2 2 0 1 1 3.414 -1.415a2 2 0 1 1 -1.413 3.414l-3.587 3.586" /><path d="M12 13l-3.586 -3.585a2 2 0 1 0 -3.414 -1.415a2 2 0 1 0 1.413 3.414l3.587 3.586" /><path d="M3 20h18c-.175 -1.671 -.046 -3.345 -2 -5h-14c-1.333 1 -2 2.667 -2 5z" /></svg>
    } else {
        iconContent = null
    }

    return (
    <div
        style={{
            width: '300px',
            height: '300px',
            backgroundColor: theme.colors['aprai-purple'][9],
            borderRadius: '50%',
            border: `5px solid ${theme.colors['aprai-green'][3]}`,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        }}
    >   
        <Text ta="center" size="50px" c="White">
            {number}
        </Text>
        {iconContent}
        <Text ta="center" size="35px" c="White">
            {description}
        </Text>
        <Space h="5px" />
    </div>
    );
}

export default Circle;