import { Button, Dropdown, Link, Navbar, Text } from '@nextui-org/react';
import React from 'react';
import { ModalLogin } from '../modal';
import { icons } from './icons';
import { AcmeLogo } from './logo';
import { useRouter } from 'next/router';
import { FaFacebook, FaInstagram } from 'react-icons/fa'; // Import Facebook and Instagram icons
import { FaBirthdayCake } from 'react-icons/fa'; // Importing a birthday hat icon from Font Awesome
import { MdFavorite } from 'react-icons/md'; // Importing a favorite icon from Material Design Icons

export const Nav = () => {
  const router = useRouter();
  const currentPath = router.pathname;

  interface MenuItems {
    'Features': string;
    'Home': string;
    'About Us': string;
    'Parties': string;
    'Donate': string;
    'Current Lineup': string;
    'Subscribe': string;
    'Announcements': string;
  }

  const handleItemClick = (url: string): void => {
    router.push(url);
  }

  const collapseItems: (keyof typeof menuItems)[] = [
    'Home',
    'About Us',
    'Parties',
    'Donate',
    'Current Lineup',
    'Subscribe',
    'Announcements'
  ];

  const menuItems = {
    'Features': '/features',
    'Home': '/',
    'About Us': '/aboutUs',
    'Parties': '/events',
    'Donate': '/donate',
    'Current Lineup': '/currentLineup',
    'Subscribe': '/subscribe',
    'Announcements': '/announcements',
  };

  return (
    <Navbar
      isBordered
      css={{
        overflow: 'hidden',
        '& .nextui-navbar-container': {
          background: '$background',
          borderBottom: 'none',
        },
      }}
    >
      <Navbar.Brand>
        <Navbar.Toggle aria-label="toggle navigation" 
        css={{
          '@media (max-width: 960px)': {
            display: 'block',
          },
          '@media (min-width: 961px)': {
            display: 'none',
          },
        }} />
        <AcmeLogo />
        <Navbar.Content
          hideIn="sm"
          css={{
            pl: '4rem',
          }}
        >
          <Navbar.Link isActive={router.pathname === '/'} href="/">
            Home
          </Navbar.Link>
          <Navbar.Link isActive={router.pathname === '/aboutUs'} href="/aboutUs">
            About Us
          </Navbar.Link>
          <Navbar.Link isActive={router.pathname === '/currentLineup'} href="/currentLineup">
            Current Lineup
          </Navbar.Link>
          <Navbar.Link isActive={router.pathname === '/subscribe'} href="/subscribe">
            Subscribe
          </Navbar.Link>
          <Navbar.Link isActive={router.pathname === '/announcements'} href="/announcements">
            Announcements
          </Navbar.Link>
          <Dropdown isBordered>
            <Navbar.Item>
              <Dropdown.Button
                auto
                light
                css={{
                  px: 0,
                  dflex: 'center',
                  svg: { pe: 'none' },
                }}
                iconRight={icons.chevron}
                ripple={false}
              >
                Inquiries
              </Dropdown.Button>
            </Navbar.Item>
            <Dropdown.Menu
              aria-label="ACME features"
              onAction={(key) => handleItemClick(key as string)}
              css={{
                '$$dropdownMenuWidth': '340px',
                '$$dropdownItemHeight': '70px',
                '& .nextui-dropdown-item': {
                  py: '$4',
                  svg: {
                    color: 'orange',
                    mr: '$4',
                  },
                  '& .nextui-dropdown-item-content': {
                    w: '100%',
                    fontWeight: '$semibold',
                  },
                },
              }}
            >
              <Dropdown.Item
                key="/events"
                showFullDescription
                description="We host parties for all occasions: birthdays, anniversaries, and more!"
                icon={<FaBirthdayCake size={26} />}
                textValue="Parties"
                css={{
                  backgroundColor: currentPath === '/events' ? '$accents2' : 'transparent',
                }}
              >
                Parties
              </Dropdown.Item>
              <Dropdown.Item
                key="/donate"
                showFullDescription
                description="Show your support by donating!"
                icon={<MdFavorite size={26} />}
                textValue="Donate"
                css={{
                  backgroundColor: currentPath === '/donate' ? '$accents2' : 'transparent',
                }}
              >
                Donate
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Navbar.Content>
      </Navbar.Brand>

      <Navbar.Collapse>
        {collapseItems.map((item, index) => (
          <Navbar.CollapseItem key={index}>
            <Link
              color="inherit"
              css={{
                minWidth: '100%',
              }}
              href={menuItems[item]}
            >
              {item}
            </Link>
          </Navbar.CollapseItem>
        ))}
      </Navbar.Collapse>
      <Navbar.Content>
        <Navbar.Item hideIn={'sm'}>
          <Link
            color="inherit"
            css={{
              minWidth: '100%',
            }}
            target="_blank"
            href="https://www.facebook.com/people/NWA-Pinball-Club/61558384277432/"
          >
            <FaFacebook size={24} />
          </Link>
        </Navbar.Item>
        <Navbar.Item hideIn={'sm'}>
          <Link
            color="inherit"
            css={{
              minWidth: '100%',
            }}
            target="_blank"
            href="https://www.instagram.com/nwapinballclub/"
          >
            <FaInstagram size={24} />
          </Link>
        </Navbar.Item>
      </Navbar.Content>
    </Navbar>
  );
};