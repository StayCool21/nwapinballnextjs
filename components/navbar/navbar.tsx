import {Button, Dropdown, Link, Navbar, Switch, Text} from '@nextui-org/react';
import React from 'react';
import {ModalLogin} from '../modal';
import {icons} from './icons';
import {AcmeLogo} from './logo';
import { useRouter } from 'next/router';
import {useTheme as useNextTheme} from 'next-themes';
import {useTheme} from '@nextui-org/react';
import {GithubIcon} from '../icons/GithubIcon';

export const Nav = () => {
   const {setTheme} = useNextTheme();
   const {isDark, type} = useTheme();
   const router = useRouter();
   const collapseItems = [
      'Features',
      'Home',
      'About Us',
      'Events',
      'Current Lineup',
      'Subscribe',
      // 'Company',
      'Legal',
   ];
   return (
      <Navbar
         isBordered
         css={{
            'overflow': 'hidden',
            '& .nextui-navbar-container': {
               background: '$background',
               borderBottom: 'none',
            },
         }}
      >
         <Navbar.Brand>
            <Navbar.Toggle aria-label="toggle navigation" showIn="xs" />
            <AcmeLogo />
            {/* <Text b color="inherit" hideIn="xs">
               ACME
            </Text> */}
            <Navbar.Content
               hideIn="sm"
               css={{
                  pl: '6rem',
               }}
            >
               <Navbar.Link isActive={router.pathname === '/'} href="/">
                  Home
               </Navbar.Link>
               <Navbar.Link isActive={router.pathname === '/aboutUs'} href="/aboutUs">
                  About Us
               </Navbar.Link>
               <Navbar.Link isActive={router.pathname === '/events'} href="/events">
                  Events
               </Navbar.Link>
               <Navbar.Link isActive={router.pathname === '/currentLineup'} href="/currentLineup">
                  Current Lineup
               </Navbar.Link>
               <Navbar.Link isActive={router.pathname === '/subscribe'} href="/subscribe">
                  Subscribe
               </Navbar.Link>
               {/* <Navbar.Link isActive={router.pathname === '/company'} href="/company">
                  Company
               </Navbar.Link> */}
               <Dropdown isBordered>
                  <Navbar.Item>
                     <Dropdown.Button
                        auto
                        light
                        css={{
                           px: 0,
                           dflex: 'center',
                           svg: {pe: 'none'},
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
                           'py': '$4',
                           'svg': {
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
                        key="99_uptime"
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
            <Navbar.CollapseItem>
               <Link
                  color="inherit"
                  css={{
                  minWidth: "100%",
                  }}
                  href="/"
               >
                  Home
               </Link>
            </Navbar.CollapseItem>
            <Navbar.CollapseItem>
               <Link
                  color="inherit"
                  css={{
                  minWidth: "100%",
                  }}
                  href="/aboutUs"
               >
                  About Us
               </Link>
            </Navbar.CollapseItem>
            <Navbar.CollapseItem>
               <Link
                  color="inherit"
                  css={{
                  minWidth: "100%",
                  }}
                  href="/events"
               >
                  Events
               </Link>
            </Navbar.CollapseItem>
            <Navbar.CollapseItem>
               <Link
                  color="inherit"
                  css={{
                  minWidth: "100%",
                  }}
                  href="/currentLineup"
               >
                  Current Lineup
               </Link>
            </Navbar.CollapseItem>
            <Navbar.CollapseItem>
               <Link
                  color="inherit"
                  css={{
                  minWidth: "100%",
                  }}
                  href="/subscribe"
               >
                  Subscribe
               </Link>
            </Navbar.CollapseItem>
            {/* <Navbar.CollapseItem>
               <Link
                  color="inherit"
                  css={{
                  minWidth: "100%",
                  }}
                  href="/company"
               >
                  Company
               </Link>
            </Navbar.CollapseItem> */}
         </Navbar.Collapse>
         <Navbar.Content>
            {/* <ModalLogin /> */}

            {/* <Navbar.Item>
               <Button auto flat href="#">
                  Start free trial
               </Button>
            </Navbar.Item> */}
            <Navbar.Item hideIn={'xs'}>
               <Link
                  color="inherit"
                  css={{
                     minWidth: '100%',
                  }}
                  target="_blank"
                  href="https://github.com/Siumauricio/landing-template-nextui"
               >
                  <GithubIcon />
               </Link>
            </Navbar.Item>
            <Navbar.Item hideIn={'xs'}>
            <Switch
               checked={isDark}
               onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
               css={{
                  '--nextui-colors-primary': 'orange',
                  '--nextui-colors-primarySolidHover': 'orange',
                  '--nextui-colors-primarySolidContrast': 'orange',
                  '& .nextui-switch-track': {
                     border: '2px solid orange',
                     borderRadius: '12px', // Adjust as needed
                  },
                  '& .nextui-switch-thumb': {
                     backgroundColor: 'orange',
                     borderRadius: '50%', // Makes the thumb circular
                  },
               }}
            />
            </Navbar.Item>
         </Navbar.Content>
      </Navbar>
   );
};
