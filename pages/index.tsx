import { Typography, Box, Stack, Button, Link } from "@mui/material";
import Head from "next/head";
import Image from "next/image";
import ProjectItem from "../src/components/ProjectItem";
import Section from "../src/components/shared/Section";
import NextLink from "next/link";
import { Email } from "@mui/icons-material";

export default function Home() {
  return (
    <Section
      maxWidth={"lg"}
      containerProps={{
        sx: {
          paddingTop: 10,
          marginBottom: 10,
        },
      }}
    >
      <Typography
        variant="h1"
        sx={{
          mb: 2,
        }}
      >
        <Box
          component="span"
          sx={{
            color: "primary.main",
          }}
        >
          Derek Dapp
        </Box>
        <Typography
          variant="h6"
          component={"span"}
          sx={{
            "&::before": {
              content: '"("',
            },
            "&::after": {
              content: '")"',
            },
          }}
        >
          {`'s Website`}
        </Typography>
      </Typography>

      <Box>
        <Typography
          variant="h2"
          sx={{
            mb: 2,
          }}
        >
          I Develop software, and Design it too.
        </Typography>

        <Stack spacing={1}>
          <Stack direction={"row"} spacing={1}>
            <Email />{" "}
            <Typography variant="body1">derekdapp@gmail.com</Typography>
          </Stack>
        </Stack>
      </Box>
      <Box
        sx={{
          mt: 8,
        }}
      >
        <Typography variant="h3">My favorite tools 🛠</Typography>
        <Stack
          spacing={2}
          sx={{
            mt: 2,
          }}
        >
          <Box>
            <Typography
              variant="h4"
              sx={{
                color: "primary.main",
              }}
            >
              Frontend
            </Typography>
            <Typography variant="body1">
              JavaScript, React, React Native, Next.js, Electron
            </Typography>
          </Box>
          <Box>
            <Typography
              variant="h4"
              sx={{
                color: "primary.main",
              }}
            >
              Backend
            </Typography>
            <Typography variant="body1">
              Ruby / Ruby on Rails, PostgreSQL, Node.js, Express.js
            </Typography>
          </Box>
          <Box>
            <Typography
              variant="h4"
              sx={{
                color: "primary.main",
              }}
            >
              And more...
            </Typography>
            <Typography variant="body1">
              Figma, Git/Github, Notion, Lottie, MUI, Emotion, Heroku, Vercel
            </Typography>
          </Box>
        </Stack>
      </Box>
      <Typography
        variant="h3"
        sx={{
          mt: 8,
        }}
      >
        I used those ⬆️ (and more) to build these ⬇️
      </Typography>
      <Box
        sx={{
          mt: 8,
          mb: 16,
          maxWidth: "100%",
        }}
      >
        <Box
          sx={{
            maxWidth: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            position: "relative",
            minHeight: {
              xs: 200,
              md: 300,
            },
          }}
        >
          <Image
            src="/assets/images/everlly_banner.svg"
            fill
            alt="Everlly"
            priority
          />
        </Box>
        <Typography variant="h3" sx={{ mt: 4, mb: 2, color: "primary.main" }}>
          Everlly, a CRM for Wedding Ring Shops
        </Typography>
        <Stack
          spacing={1}
          sx={{
            mb: 3,
          }}
        >
          <Typography>
            A labor of love (literally). Everlly is a product that I have spent
            the last few years working on as a solo endeavour. From scheduling
            to messaging to cleaning reminders, Everlly can do it all. The idea
            behind Everlly is that before, during and after a wedding ring sale,
            the client and business should stay connected. Many shops offer a
            lifetime warranty on their rings on condition that the client
            returns yearly to have their ring inspected and cleaned. Everlly is
            the tool that allows clients to keep track of when they should get
            their ring cleaned and it allows businesses to have further contact
            with their client after their initial sale.
          </Typography>
          <Typography>
            Everlly has come very far, but still has some ways to go before an
            MVP is ready for businesses to start beta testing. It will take a
            few more late nights and weekends to finish, but I&apos;m excited to
            see it come to life and to share the progress so far. Use the link
            below to learn more about the technologies I used in Everlly and to
            see what features it has.
          </Typography>
        </Stack>
        <NextLink href="/everlly" passHref>
          <Button variant="contained">See What Everlly Can Do</Button>
        </NextLink>
      </Box>
      <Stack spacing={16}>
        <ProjectItem
          title="DevPoint Studios Website"
          roles="Designer, Developer"
          youtubeVideoId="ktjy1sHDLeA"
          youtubeWidth={560}
          youtubeHeight={315}
          logoSrc="/assets/logos/dps.svg"
          logoAlt="DevPoint Studios Logo"
          logoWidth={355}
          logoHeight={55}
          renderDescription={() => (
            <Stack spacing={1}>
              <Typography>
                DevPoint Studios is a software development company based in Salt
                Lake City, Utah. They specialize in building custom software for
                businesses and startups. I designed and built their website
                using Next.js and MUI. I enjoyed creating a design that gave a
                sense of professionalism and trust while still being fun and
                playful. I especially enjoyed the process of creating the
                animations and transitions as well as the custom illustrations.
              </Typography>
              <Typography>The duck game is a personal favorite.</Typography>
              <Typography>
                The website is currently live and can be found at{" "}
                <Link href="https://devpointstudios.com">
                  devpointstudios.com
                </Link>
                .
              </Typography>
            </Stack>
          )}
        />
        <ProjectItem
          title="DevPoint Labs Website"
          roles="Designer, Developer"
          youtubeVideoId="YIynSlhIiXw"
          youtubeWidth={560}
          youtubeHeight={315}
          logoSrc="/assets/logos/dpl.svg"
          logoAlt="DevPoint Labs Logo"
          logoWidth={355}
          logoHeight={55}
          renderDescription={() => (
            <Stack spacing={1}>
              <Typography>
                DevPoint Labs is a software development bootcamp based in Salt
                Lake City, Utah. They specialize in teaching students how to
                build software and how to think like a software developer. I
                worked on a team to design and build their website. The site
                provides information about the bootcamp, opportunities for
                students and allows students to apply to the program. I used
                Next.js to build the frontend website.
              </Typography>
              <Typography>
                The website is currently live and can be found at{" "}
                <Link href="https://devpointlabs.com">devpointlabs.com</Link>.
              </Typography>
            </Stack>
          )}
        />
        <ProjectItem
          title="CellLinQ Mobile App and Backend Server"
          roles="Developer, UI/UX Designer"
          youtubeVideoId="QuUURD9FpMU"
          youtubeWidth={210}
          youtubeHeight={450}
          logoSrc="/assets/logos/celllinq.svg"
          logoAlt="CellLinQ Logo"
          logoWidth={240}
          logoHeight={100}
          renderDescription={() => (
            <Stack spacing={1}>
              <Typography>
                CellLinQ is a mobile app that allows users to to see cell tower
                strength and information relative to their location. I built the
                mobile app using React Native and the backend server using Ruby
                on Rails.
              </Typography>
              <Typography>
                The mobile app connects to a hardware device over Bluetooth Low
                Energy.
              </Typography>
              <Typography>
                The app can be downloaded on the Apple App Store and Google
                Play, but a physical device is required to use it.
              </Typography>
            </Stack>
          )}
        />
        <ProjectItem
          title="Tally Chrome Extension"
          roles="Developer"
          youtubeVideoId="y1p2fTaQNoI"
          youtubeWidth={460}
          youtubeHeight={300}
          logoSrc="/assets/logos/tally.svg"
          logoAlt="Tally Logo"
          logoWidth={240}
          logoHeight={100}
          renderDescription={() => (
            <Stack spacing={1}>
              <Typography>
                I built a Chrome Extension for{" "}
                <Link href="https://www.withtally.com">Tally</Link> that allows
                users to easily find information about the assets that an
                Ethereum Wallet holds. Tally is a platform for token governance.
                The extension adds a tooltip while hovering over an Ethereum
                address or name. The extension opens a panel to display what
                NFT&apos;s, POAPs and tokens the wallet holds. The extension was
                built with React and connects to other API&apos;s to fetch asset
                data.
              </Typography>
            </Stack>
          )}
        />
        <ProjectItem
          title="Funnul Web Application"
          roles="Lead Developer"
          youtubeVideoId="SeJrxM-pK80"
          youtubeWidth={480}
          youtubeHeight={400}
          logoSrc="/assets/logos/funnul.svg"
          logoAlt="Funnul Logo"
          logoWidth={240}
          logoHeight={100}
          renderDescription={() => (
            <Stack spacing={1}>
              <Typography>
                Funnul is a web application that allows victims of car accidents
                to easily find a lawyer or a medical service provider. I worked
                on a team to build this application. The frontend is built with
                React and the backend is built with Ruby on Rails. I worked
                primarily on the Frontend and helped to manage the backend
                development.
              </Typography>
            </Stack>
          )}
        />
        <ProjectItem
          title="HabitatAMS, an Animal Management System"
          roles="Lead Developer, Designer"
          youtubeVideoId="LGqDaZLLLtM"
          youtubeWidth={560}
          youtubeHeight={315}
          logoSrc="/assets/logos/habitatams.svg"
          logoAlt="HabitatAMS Logo"
          logoWidth={240}
          logoHeight={100}
          renderDescription={() => (
            <Stack spacing={1}>
              <Typography>
                HabitatAMS is an animal management system that allows zoos like
                Utah&apos;s Hogle Zoo to manage records for their ambassador
                program animals. I worked on a team to build the frontend and
                backend of the application. I was the lead developer and worked
                on the frontend using React and the backend using Ruby on Rails.
              </Typography>
              <Typography>
                HabitatAMS is a multi-tenant application with complicated
                permissions and scheduling systems.
              </Typography>
            </Stack>
          )}
        />
        <ProjectItem
          title="SOLOS Web3 Application"
          roles="Developer"
          youtubeVideoId="XZRq56VtkkM"
          youtubeWidth={500}
          youtubeHeight={280}
          logoSrc="/assets/logos/solos.svg"
          logoAlt="SOLOS Logo"
          logoWidth={240}
          logoHeight={100}
          renderDescription={() => (
            <Stack spacing={1}>
              <Typography>
                SOLOS is a web3 company focused on creating digital art
                generated from physical art. I worked with another developer on
                their team to connect to an API they developed to display art
                pieces. I built the frontend using React and implemented the
                ability to mint art pieces on the Ethereum blockchain.
              </Typography>
            </Stack>
          )}
        />
        <ProjectItem
          title="Jarvis Labs Website"
          roles="Developer, Designer"
          youtubeVideoId="mlsh6gD6Cko"
          youtubeWidth={559}
          youtubeHeight={300}
          logoSrc="/assets/logos/jarvis.webp"
          logoAlt="Jarvis Labs Logo"
          logoWidth={519 * 0.8}
          logoHeight={85 * 0.8}
          renderDescription={() => (
            <Stack spacing={1}>
              <Typography>
                Jarvis Labs is a crypto token research and design company. I
                built and deployed a website for their token design part of
                their business. The website is built with Next.js and deployed
                on Vercel. I worked with Jarvis Labs to design the website to
                help users learn more about their services.
              </Typography>
            </Stack>
          )}
        />
        <ProjectItem
          title="ChainPulse Web App"
          roles="Developer, Designer, UX"
          youtubeVideoId="A5YWPvNizng"
          youtubeWidth={559}
          youtubeHeight={300}
          logoSrc="/assets/logos/chainpulse.svg"
          logoAlt="ChainPulse Logo"
          logoWidth={186 * 1.8}
          logoHeight={41 * 1.8}
          renderDescription={() => (
            <Stack spacing={1}>
              <Typography>
                ChainPulse is a product by Jarvis Labs. I built the frontend
                site and also helped to create the design and UX for the
                product. I worked with other teams to implement the backend API.
                The ChainPulse product features charting of tokens to help users
                to see trends in the market. I also implemented other 3rd party
                APIs for token information.
              </Typography>
            </Stack>
          )}
        />
        <ProjectItem
          title="Layla Mobile App"
          roles="Developer"
          youtubeVideoId="PEbWUI4TsL0"
          youtubeWidth={210}
          youtubeHeight={450}
          logoSrc="/assets/logos/layla.svg"
          logoAlt="Layla Logo"
          logoWidth={139 * 1}
          logoHeight={115 * 1}
          renderDescription={() => (
            <Stack spacing={1}>
              <Typography>
                Layla is a mobile app that allows users to track their
                fertility. I used React Native to build the mobile app and Ruby
                on Rails to build the backen API.
              </Typography>
              <Typography>
                The app is not currently released, but more information about
                the project can be found at{" "}
                <Link href="https://www.laylawellness.com/">
                  LaylaWellness.com
                </Link>
                .
              </Typography>
            </Stack>
          )}
        />
        <Box>
          <Typography
            variant="h3"
            sx={{
              color: "primary.main",
            }}
          >
            Other Projects
          </Typography>
          <Stack spacing={1} mt={2}>
            <Typography>
              I have also worked on some other great projects not listed here.
              These include a custom Learning Management System, an app to help
              people learn to read Chinese, and a mobile app to see how your car
              would look with different styles of rims. I also worked on a
              product geared towards personalized sales presentations.
            </Typography>
            <Typography>
              I should also note that the projects in my portfolio do not
              include those that I did for school, that list would be too long
              to include here. However, those were also great projects that I
              learned a lot from.
            </Typography>
            <Typography>
              One of my first apps I built was a game called &quot;Cat Or
              Dog&quot; that went surprisingly viral on Reddit. My follow-up to
              that was a web app called &quot;Is It A Bangr?&quot; loosely
              referencing the TV show Parks and Recreation that earned me
              another 15 minutes of fame on{" "}
              <Link href="https://www.vice.com/en/article/3dkwq8/finally-the-internet-tells-you-whether-or-not-a-songs-a-banger">
                Vice Magazine
              </Link>
              .
            </Typography>
            <Typography>
              Sadly, these projects aren&apos;t live anymore, but they were some
              of the key early projects that helped to jumpstart my career.
            </Typography>
          </Stack>
        </Box>
        <Box>
          <Typography
            variant="h3"
            sx={{
              color: "primary.main",
            }}
          >
            See You Around
          </Typography>
          <Stack spacing={1} mt={2}>
            <Typography>
              Thanks for making it this far! I hope you enjoyed my portfolio.
              Please do not hesitate to reach out to me if you have any
              questions or would like to work together. My email is
              derekdapp@gmail.com
            </Typography>
            <Typography>Have a nice day!</Typography>
          </Stack>
        </Box>
      </Stack>
    </Section>
  );
}
