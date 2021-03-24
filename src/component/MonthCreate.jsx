import { Box, Text, FormControl, Select, FormLabel, Input, FormHelperText, Button } from '@chakra-ui/react'
import months from 'months'
import React from 'react'

const MonthCreate = () => (
  <Box h="100%" d="flex" flexDir="column">
    <Text textTransform="uppercase" color="white" mb="15px" fontSize="xl">Create a new track</Text>
    <Box d="flex" flexDir="row" mb="15px">
        <Box d="flex" flex="1" mr="15px">
            <FormControl id="month">
                <FormLabel textTransform="uppercase" color="white">Month</FormLabel>
                <Select bgColor="white">
                    {
                        months.abbr.map( month => <option>{month}</option>)
                    }
                </Select>            
            </FormControl>
        </Box>
        <Box d="flex" flex="1">
            <FormControl id="year">
                <FormLabel textTransform="uppercase" color="white">Year</FormLabel>
                <Input type="number" bgColor="white"/>
            </FormControl>
        </Box>
    </Box>
    <Box d="flex" mb="15px">
        <FormControl id="after30thSalary">
            <FormLabel textTransform="uppercase" color="white">after 30th salary</FormLabel>
            <Box d="flex">
                <Box
                    d="flex"
                    bgColor="blue.100"
                    color="white"
                    pl="15px"
                    pr="15px"
                    alignItems="center"
                    borderLeftRadius="5px"
                >PHP</Box>
                <Input type="number" bgColor="white" borderLeftRadius="0px" />
            </Box>
            <FormHelperText color="red.200">(PHP) your gross salary on 2nd cutoff of the month</FormHelperText>
        </FormControl>
    </Box>
    <Box d="flex" mb="30px">
        <FormControl id="after15thSalary">
            <FormLabel textTransform="uppercase" color="white">after 15th salary</FormLabel>
            <Box d="flex">
                <Box
                    d="flex"
                    bgColor="blue.100"
                    color="white"
                    pl="15px"
                    pr="15px"
                    alignItems="center"
                    borderLeftRadius="5px"
                >PHP</Box>
                <Input type="number" bgColor="white" borderLeftRadius="0px" />
            </Box>
            <FormHelperText color="red.200">(PHP) your gross salary on 1st cutoff of the month</FormHelperText>
        </FormControl>
    </Box>
    <Box d="flex" alignItems="flex-end" justifyContent="center" height="100%">
        <Button bgColor="red.100" pl="80px" pr="80px" borderRadius="30px" color="white" textTransform="uppercase">create</Button>
    </Box>
  </Box>
)

export default MonthCreate
