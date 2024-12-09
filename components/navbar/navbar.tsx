import { Button, Dropdown, Link, Navbar, Text } from '@nextui-org/react';
import React from 'react';
import { ModalLogin } from '../modal';
import { icons } from './icons';
import { AcmeLogo } from './logo';
import { useRouter } from 'next/router';
import { FaFacebook, FaInstagram } from 'react-icons/fa'; // Import Facebook and Instagram icons

export const Nav = () => {
  const router = useRouter();
  const collapseItems: (keyof typeof menuItems)[] = [
    // 'Features',
    'Home',
    'About Us',
    'Parties',
    'Current Lineup',
    'Subscribe',
    'Announcements'
    // 'Legal',
  ];

  const menuItems = {
    'Features': '/features',
    'Home': '/',
    'About Us': '/aboutUs',
    'Parties': '/events',
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
          <Navbar.Link isActive={router.pathname === '/events'} href="/events">
            Parties
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
                Features
              </Dropdown.Button>
            </Navbar.Item>
            <Dropdown.Menu
              aria-label="ACME features"
              css={{
                '$$dropdownMenuWidth': '340px',
                '$$dropdownItemHeight': '70px',
                '& .nextui-dropdown-item': {
                  py: '$4',
                  svg: {
                    color: '$secondary',
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
                key="autoscaling"
                showFullDescription
                description="ACME scales apps to meet user demand, automagically, based on load."
                icon={icons.scale}
              >
                Autoscaling
              </Dropdown.Item>
              <Dropdown.Item
                key="usage_metrics"
                showFullDescription
                description="Real-time metrics to debug issues. Slow query added? We’ll show you exactly where."
                icon={icons.activity}
              >
                Usage Metrics
              </Dropdown.Item>
              <Dropdown.Item
                key="production_ready"
                showFullDescription
                description="ACME runs on ACME, join us and others serving requests at web scale."
                icon={icons.flash}
              >
                Production Ready
              </Dropdown.Item>
              <Dropdown.Item
                key="+99_uptime"
                showFullDescription
                description="Applications stay on the grid with high availability and high uptime guarantees."
                icon={icons.server}
              >
                +99% Uptime
              </Dropdown.Item>
              <Dropdown.Item
                key="supreme_support"
                showFullDescription
                description="Overcome any challenge with a supporting team ready to respond."
                icon={icons.user}
              >
                +Supreme Support
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