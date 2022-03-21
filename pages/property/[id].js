import { GoVerified } from 'react-icons/go';
import { FaBed, FaBath } from 'react-icons/fa';
import { BsGridFill } from 'react-icons/bs';

// import defaultImage from '../assets/house.jpg';
import millify from 'millify';

import { fetchApi, baseUrl } from '../../utils/fetchApi';
import { Box, Flex, Text, Avatar } from '@chakra-ui/react';
import ImageScrollbar from '../../components/ImageScrollbar';

const PropertyDetails = ({
  PropertyDetails: {
    price,
    rentFrequency,
    rooms,
    title,
    baths,
    area,
    agency,
    isVerified,
    description,
    type,
    purpose,
    furnishingStatus,
    amenities,
    photos
  }
}) => {
  return (
    <Box maxWidth="1000px" margin="auto" p="4">
      {photos && <ImageScrollbar data={photos}></ImageScrollbar>}
      <Box w="full" p="6">
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
        <Flex alignItems="center" p="1" justifyContent="space-between" w="250px" color="blue.400">
          {rooms}
          <FaBed></FaBed> | {baths} <FaBath></FaBath> | {millify(area)} sqft{' '}
          <BsGridFill></BsGridFill>
        </Flex>
        <Box mt="2">
          <Text fontSize="lg" mb="2" fontWeight="bold">
            {title}
          </Text>
          <Text lineHeight="2" color="grey.600">
            {description}
          </Text>
        </Box>
        <Flex flexWrap="wrap" textTransform="uppercase" justifyContent="space-between">
          <Flex
            justifyContent="space-between"
            w="400px"
            borderBottom="1px"
            borderColor="gray.100"
            p="3">
            <Text>Type</Text>
            <Text fontWeight="bold">{type}</Text>
          </Flex>
          <Flex
            justifyContent="space-between"
            w="400px"
            borderBottom="1px"
            borderColor="gray.100"
            p="3">
            <Text>Purpose</Text>
            <Text fontWeight="bold">{purpose}</Text>
          </Flex>
          {furnishingStatus && (
            <Flex
              justifyContent="space-between"
              w="400px"
              borderBottom="1px"
              borderColor="gray.100"
              p="3">
              <Text>Furnishing Status</Text>
              <Text fontWeight="bold">{furnishingStatus}</Text>
            </Flex>
          )}
        </Flex>
        <Box>
          {amenities.length && (
            <Text fontSize="2xl" fontWeight="black" mt="5">
              Amenities
            </Text>
          )}
          <Flex flexWrap="wrap">
            {amenities.map((item) =>
              item.amenities.map((amenity) => <Text fontWeight="bold" color="blue.400" fontSize="l" p="2" bg="gray.200" m="1" borderRadius="5" key={amenity.text}>{amenity.text}</Text>)
            )}
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default PropertyDetails;

export async function getServerSideProps({ params: { id } }) {
  const data = await fetchApi(`${baseUrl}/properties/detail?externalID=${id}`);

  return {
    props: {
      PropertyDetails: data
    }
  };
}
