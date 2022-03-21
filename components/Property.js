import { Avatar, Box, Flex, Text } from '@chakra-ui/react';
import Link from 'next/link';
import Image from 'next/image';
import { GoVerified } from 'react-icons/go';
import { FaBed, FaBath } from 'react-icons/fa'
import { BsGridFill } from 'react-icons/bs'

import defaultImage from '../assets/house.jpg';
import millify from 'millify';

const Property = ({
  property: {
    coverPhoto,
    price,
    rentFrequency,
    rooms,
    title,
    baths,
    area,
    agency,
    isVerified,
    externalID
  }
}) => {
  return (
    <Link href={`/property/${externalID}`} passHref>
      <Flex flexWrap="wrap" w="420px" p="5" pt="0" justifyContent="flex-start" cursor="pointer">
        <Box>
          <Image
            src={coverPhoto ? coverPhoto.url : defaultImage}
            alt="house"
            width={400}
            height={260}></Image>
        </Box>
        <Box w="full">
          <Flex pt="2" alignItems="center" justifyContent="space-between">
            <Flex alignItems="center">
              <Box pr="3" color="green.400">
                {isVerified && <GoVerified></GoVerified>}
              </Box>
              <Text fontWeight="bold" fontSize="lg">
                AED {millify(price)}
                {rentFrequency && `/${rentFrequency}`}
              </Text>
              <Box>
                <Avatar size="sm" src={agency?.logo?.url}></Avatar>
              </Box>
            </Flex>
          </Flex>
          <Flex alignItems="center" p="1" justifyContent="space-between" w="250px" color='blue.400'>
              {rooms}
              <FaBed></FaBed> | {baths} <FaBath></FaBath> | {millify(area)} sqft <BsGridFill></BsGridFill>
          </Flex>
          <Text fontSize="lg">
              {title.length > 30 ? `${title.substring(0, 30)}...` : title}
          </Text>
        </Box>
      </Flex>
    </Link>
  );
};

export default Property;
