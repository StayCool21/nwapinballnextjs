import type {NextPage} from 'next';
import {Nav} from '../components/navbar/navbar';
import {Layout} from '../components/navbar/layout';
import {Hero} from '../components/hero';
import {AboutUsHomepage} from '../components/aboutUsHomepage';
import {ArcadeGalleryHomepage} from '../components/arcadeGalleryHomepage';
import {Box} from '../components/styles/box';
import {Features1} from '../components/features1';
import {Features2} from '../components/features2';
import {Features3} from '../components/features3';
import {Testimonials} from '../components/tesminonials';
import {Statistics} from '../components/statistics';
import {Pricing} from '../components/pricing';
import {Faq} from '../components/faq';
import {Trial} from '../components/trial';
import {Footer} from '../components/footer';

const Home: NextPage = () => {
   return (
      <Layout>
         <Nav />
         <Box as="main">
            <Hero />
            <AboutUsHomepage />
            <ArcadeGalleryHomepage />
            {/* <Features1 />
            <Features2 />
            <Features3 />
            <Testimonials />
            <Statistics />
            <Pricing />
            <Faq />
            <Trial /> */}
            <Footer />
         </Box>
      </Layout>
   );
};

export default Home;
