import { Box, useTheme } from '@chakra-ui/react';

const CustomProgress = ({
    percentage = 50,
    size = { base: '80px', md: '120px', lg: '150px' },  //レスポンシブ対応
    stroke = 8,
    icon: Icon = null,
    }) => {
    const theme = useTheme();
    const color = theme.colors.mariner || '#4267b2';


    const baseSize = 150;
    const radius = (baseSize - stroke) / 2;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;

    return (
        <Box position="relative" w={size} h={size} > {/* レスポンシブによって変わる */}
        <svg
            viewBox={`0 0 ${baseSize} ${baseSize}`} //固定だけどw,hは親Boxの100%だから自然に伸縮
            width="100%"
            height="100%"
            style={{ display: 'block' }}
        >
            {/* 下側の円 */}
            <circle
            stroke="#eee"
            fill="transparent"
            strokeWidth={stroke}
            r={radius}
            cx={baseSize / 2}
            cy={baseSize / 2}
            />
            
            {/* 上側の円 */}
            <circle
            stroke={color}
            fill="transparent"
            strokeWidth={stroke}
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            r={radius}
            cx={baseSize / 2}
            cy={baseSize / 2}
            style={{
                transition: 'stroke-dashoffset 0.6s ease-out',
                transform: 'rotate(-90deg)',
                transformOrigin: 'center',
            }}
            />
        </svg>
        {/* アイコン部分 */}
        <Box
            position="absolute"
            top="0"
            left="0"
            w={size}
            h={size}
            display="flex"
            alignItems="center"
            justifyContent="center"
            fontSize={{ base: `calc(${size.base} / 2.0)`, md: `calc(${size.md} / 2.0)` }}
            color={color}
            pointerEvents="none"
        >
            {Icon && <Icon style={{ width: '40%', height: '40%' }} />}
        </Box>
        </Box>
    );
};

export default CustomProgress;
