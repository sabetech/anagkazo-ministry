import { Box, SimpleGrid } from '@chakra-ui/react';
import StatsCard from '../components/home/StatsCard';
import { GoLocation } from 'react-icons/go';

const Dashboard = () => {
    return (<>
        <Box maxW="5xl" mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
                <StatsCard title={'Average Attendance'} stat={'7'} icon={<GoLocation size={'3em'} />} />
                <StatsCard title={'Average Offering'} stat={'7'} icon={<GoLocation size={'3em'} />} />
            </SimpleGrid>
        </Box>
    </>);
}

export default Dashboard;