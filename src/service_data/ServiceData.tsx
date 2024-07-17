import { useState } from 'react';
import { Box, Card, CardBody, CardHeader, Heading, Table, TableContainer, 
    TableCaption, Thead, Tr, Th, Td, Tbody, Tab, TabPanel, TabPanels, Tabs, TabList,  } from '@chakra-ui/react';
import { SingleDatepicker } from "chakra-dayzed-datepicker";
import { useQuery } from '@tanstack/react-query';
import { getFellowshipServices } from '../services/fellowship_service';
import dayjs from 'dayjs';
import { FellowshipService } from '../types/FellowshipService';
import { Response } from '../types/RemoteResponse';

const ServiceData = () => {
    const [date, setDate] = useState(new Date());
    const { data: serviceData, isSuccess } = useQuery<Response<FellowshipService[]>>({
        queryKey: ['service_data', date],
        queryFn: () => getFellowshipServices(dayjs(date).format("YYYY-MM-DD"))
    })

    console.log("SERVICE DATA:: ",serviceData);

    return (<>
    <Box maxW="5xl" mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
        <Tabs variant='unstyled'>
            <TabList>
                <Tab _selected={{ color: 'white', bg: 'blue.500' }}>Fellowship Service</Tab>
                <Tab _selected={{ color: 'white', bg: 'red.400' }}>Defaulters</Tab>
            </TabList>
            <TabPanels>
                <TabPanel>
                <Card>
            <CardHeader>
                <Heading size='md'>Fellowship Service Data</Heading>
                Select Date of Service: 
                <SingleDatepicker
                    name="date-input"
                    date={date}
                    onDateChange={setDate}
                />
            </CardHeader>
                <CardBody>
                <TableContainer>
                    <Table variant='striped' >
                        <Thead>
                        <Tr>
                            <Th>Index Number</Th>
                            <Th>Name</Th>
                            <Th>Attendance</Th>
                            <Th isNumeric>Offering</Th>
                        </Tr>
                        </Thead>
                        <Tbody>
                            {
                                isSuccess && 
                                serviceData.data.map((fellowship_service: FellowshipService) => (
                                    <Tr>
                                        <Td>{ fellowship_service.index_number }</Td>
                                        <Td>{ fellowship_service.name }</Td>
                                        <Td>{ fellowship_service.attendance ?? 0 }</Td>
                                        <Td>{ fellowship_service.offering ?? 0 } Ghc</Td>
                                    </Tr>
                                ))
                            }
                            
                        </Tbody>

                        <TableCaption>Total Attendance: { serviceData?.data.reduce((acc, val) => val.attendance + acc, 0 ) } Total Offering: { serviceData?.data.reduce((acc, val) => parseFloat((val.offering ?? 0) + "") + acc, 0.0 ).toFixed(2) } GHc</TableCaption>
                    </Table>
                </TableContainer>
                </CardBody>
            </Card>
                </TabPanel>
                <TabPanel>
                <p>two!</p>
                </TabPanel>
            </TabPanels>
        </Tabs>
        
        
    </Box>
    </>)
}

export default ServiceData;