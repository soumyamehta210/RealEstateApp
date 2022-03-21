import { Box, Flex, Menu, MenuButton, MenuItem, MenuList, Spacer, IconButton } from '@chakra-ui/react';
import { FcMenu, FcHome, FcABout, FcAbout } from 'react-icons/fc';
import Link from 'next/link';
import { BsSearch } from 'react-icons/bs';
import { FiKey } from 'react-icons/fi';

const Navbar = () => {
  return (
    <Flex p="2" bb="1px" borderColo="gray.100">
      <Box fontSize="3xl" color="blue.400" fontWeight="bold">
        <Link href="/" pl="2">
          Realtor
        </Link>
      </Box>
      <Spacer></Spacer>
      <Box>
        <Menu>
          <MenuButton
            as={IconButton}
            icon={<FcMenu></FcMenu>}
            variant="outline"
            color="red.400"></MenuButton>
          <MenuList>
            <Link href="/" passHref>
              <MenuItem icon={<FcHome></FcHome>}>Home</MenuItem>
            </Link>
            <Link href="/search" passHref>
              <MenuItem icon={<BsSearch></BsSearch>}>Search</MenuItem>
            </Link>
            <Link href="/search?purpose=for-sale" passHref>
              <MenuItem icon={<FcAbout></FcAbout>}>Buy Property</MenuItem>
            </Link>
            <Link href="/search?purpose=for-rent" passHref>
              <MenuItem icon={<FiKey></FiKey>}>Rent Property</MenuItem>
            </Link>
          </MenuList>
        </Menu>
      </Box>
    </Flex>
  );
};

export default Navbar;
