import React, { useEffect, useState } from 'react';
import { Button, Card, Divider, Grid, Text } from '@nextui-org/react';
import { Box } from '../styles/box';
import { Flex } from '../styles/flex';
import Image from 'next/image';

const NwaPinballMachines = () => {
  interface Machine {
    id: number;
    name: string;
    year: number;
    manufacturer: string;
    ipdb_link: string | null;
    ipdb_id: number | null;
    kineticist_url: string;
    opdb_id: string;
    image_url?: string; // Make image_url optional
  }

  const [machines, setMachines] = useState<Machine[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch the machine data from the Pinball Map API
    fetch('https://pinballmap.com/api/v1/locations/23400/machine_details.json')
      .then((response) => response.json())
      .then((data) => {
        setMachines(data.machines);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching machine data:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Grid.Container gap={2} justify="center" css={{ textAlign: 'center' }}>
        {machines.map((machine) => (
          <Grid xs={12} sm={6} md={4} key={machine.id}>
            <Card css={{ p: '$6', mw: '400px' }}>
              <Card.Header>
                <Grid.Container css={{ pl: '$6' }}>
                  <Grid xs={12}>
                    <Text h4 css={{ lineHeight: '$xs' }}>
                      {machine.name}
                    </Text>
                  </Grid>
                  <Grid xs={12}>
                    <Text css={{ color: '$accents8' }}>
                      {machine.manufacturer} ({machine.year})
                    </Text>
                  </Grid>
                </Grid.Container>
              </Card.Header>
              <Card.Body css={{ py: '$4' }}>
                {machine.image_url && (
                  <Image src={machine.image_url} alt={machine.name} style={{ width: '100%', height: 'auto' }} />
                )}
                <Divider />
                {machine.ipdb_link && (
                  <Text>
                    <a href={machine.ipdb_link} target="_blank" rel="noopener noreferrer">
                      IPDB Link
                    </a>
                  </Text>
                )}
                <Text>
                  <a href={machine.kineticist_url} target="_blank" rel="noopener noreferrer">
                    Kineticist URL
                  </a>
                </Text>
              </Card.Body>
            </Card>
          </Grid>
        ))}
      </Grid.Container>
    </div>
  );
};

export default NwaPinballMachines;