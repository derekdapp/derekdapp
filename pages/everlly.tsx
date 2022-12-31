import React from "react";

import { Box, Button, Stack, Typography } from "@mui/material";
import Section from "../src/components/shared/Section";
import { Home } from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";
import ProjectFeature from "../src/components/ProjectFeature";

const Everlly = () => (
  <Section maxWidth={"lg"}>
    <Box
      sx={{
        paddingTop: 4,
        marginBottom: 8,
      }}
    >
      <Link href="/" passHref>
        <Button variant="outlined" startIcon={<Home />}>
          Home
        </Button>
      </Link>
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
          marginY: 4,
        }}
      >
        <Image
          src="/assets/images/everlly_banner.svg"
          fill
          alt="Everlly"
          priority
        />
      </Box>
      <Typography
        variant="h1"
        sx={{
          color: "primary.main",
        }}
      >
        Everlly
      </Typography>
      <Stack
        spacing={1}
        sx={{
          mb: 3,
          mt: 3,
        }}
      >
        <Typography>
          A labor of love (literally). Everlly is a product that I have spent
          the last few years working on as a solo endeavour. From scheduling to
          messaging to cleaning reminders, Everlly can do it all. The idea
          behind Everlly is that before, during and after a wedding ring sale,
          the client and business should stay connected. Many shops offer a
          lifetime warranty on their rings on condition that the client returns
          yearly to have their ring inspected and cleaned. Everlly is the tool
          that allows clients to keep track of when they should get their ring
          cleaned and it allows businesses to have further contact with their
          client after their initial sale.
        </Typography>
        <Typography>
          Everlly has come very far, but still has some ways to go before an MVP
          is ready for businesses to start beta testing. It will take a few more
          late nights and weekends to finish, but I&apos;m excited to see it
          come to life and to share the progress so far. Read more below about
          the features I built in Everlly.
        </Typography>
      </Stack>
      <Stack spacing={8}>
        <ProjectFeature
          title="Admin Settings"
          youtubeVideoId="GO2oJEooQ8I"
          youtubeWidth={800}
          youtubeHeight={428}
          renderDescription={() => (
            <Typography>
              Everlly is a SaaS product, so the platform needed to be able to be
              customized for each business that uses it. Admins are able to
              customize the types of items and appointment they want to offer to
              their users. In addition, they can customize the message templates
              that are sent to users when certain events occur. For example,
              when a ring cleaning is due or when a user has an appointment
              coming up. They can also create customized schedules which are
              used to define business hours or when a user can book an
              appointment.
            </Typography>
          )}
        />
        <ProjectFeature
          title="User Management"
          youtubeVideoId="QkRJrRvS37w"
          youtubeWidth={800}
          youtubeHeight={428}
          renderDescription={() => (
            <Typography>
              Admins and team members can manage users in Everlly. Users can be
              regular users, team members or admins. Users can be created by
              team members and an email is sent to the user for them to create a
              password and activate their account.
            </Typography>
          )}
        />
        <ProjectFeature
          title="Account Activation"
          youtubeVideoId="0g9m4jYiGho"
          youtubeWidth={800}
          youtubeHeight={428}
          renderDescription={() => (
            <Typography>
              After a team member creates a user, an email is sent to the user
              with a link to activate their account. The user can then create a
              password and login to the app.
            </Typography>
          )}
        />
        <ProjectFeature
          title="User Authentication"
          youtubeVideoId="F0QYIIo_m8U"
          youtubeWidth={800}
          youtubeHeight={428}
          renderDescription={() => (
            <Typography>
              Users are also able to sign up directly on the website. They can
              create an account and then login to the app. Users can also reset
              their password if they forget it.
            </Typography>
          )}
        />
        <ProjectFeature
          title="Messaging"
          youtubeVideoId="wSUjTe-yz2Y"
          youtubeWidth={800}
          youtubeHeight={428}
          renderDescription={() => (
            <Stack spacing={1}>
              <Typography>
                Messaging is an important feature in Everlly. Users are able to
                send messages to team members to ask questions, share files for
                ring designs, etc. Team members can be assigned to message
                threads.
              </Typography>
              <Typography>
                Messaging is instant through the use of websockets and Action
                Cable in Ruby on Rails.
              </Typography>
            </Stack>
          )}
        />
        <ProjectFeature
          title="Item Creation"
          youtubeVideoId="BlTdffVbTW8"
          youtubeWidth={800}
          youtubeHeight={428}
          renderDescription={() => (
            <Stack spacing={1}>
              <Typography>
                Team members are able to create items for users. Items are
                created based on attributes that are defined by the admin. For
                example, a ring can have a metal type, a stone type, a size,
                etc.
              </Typography>
              <Typography>
                After an item is created, team members can record a history
                event for the item and trigger messages to be sent to the user.
              </Typography>
            </Stack>
          )}
        />
        <ProjectFeature
          title="Ring Management"
          youtubeVideoId="inuU4ZZo5h8"
          youtubeWidth={800}
          youtubeHeight={428}
          renderDescription={() => (
            <Stack spacing={1}>
              <Typography>
                A major feature of Everlly is the ability to manage rings. Users
                can see products that they own on their dashboard. They can
                upload a picture for the ring, view information about their item
                and see history about the item. For example, when the last
                cleaning happened. Users can also add co-owners and transfer
                ownership of items. This is useful for when a user buys a ring
                for their partner and wants to transfer ownership to them.
              </Typography>
            </Stack>
          )}
        />
        <ProjectFeature
          title="Appointments"
          youtubeVideoId="L8qtsu47ETc"
          youtubeWidth={800}
          youtubeHeight={428}
          renderDescription={() => (
            <Stack spacing={1}>
              <Typography>
                Appointments are another key feature of Everlly. On a team
                members home page, they are able to see a custom calender that
                shows appointments. They are able to filter and search the
                appointments as well as see types and statuses.
              </Typography>
              <Typography>
                Team members are able to create appointments for users and
                manage their status. Regular users are also able to request
                appointments. When team members accept an appointment, a message
                is sent to the user.
              </Typography>
              <Typography>
                Appointment time slots are based on admin settings. Admins are
                able to set limits on how many appointments can be booked during
                a certain period depending on quantity and type.
              </Typography>
            </Stack>
          )}
        />
        <ProjectFeature
          title="Color Themes"
          youtubeVideoId="Q85ytXzx1_c"
          youtubeWidth={800}
          youtubeHeight={428}
          renderDescription={() => (
            <Stack spacing={1}>
              <Typography>
                Everyone has their own preferences when it comes to color
                schemes. Everlly allows users to switch from a light theme to a
                dark theme. In the future, admins will be able to define custom
                color themes.
              </Typography>
            </Stack>
          )}
        />
      </Stack>
      <Stack spacing={4} mt={8}>
        <Typography variant="h2">More Features Coming Soon!</Typography>
        <Typography>
          Everlly is still in development. There are many more features that I
          am excited to work on in the future. Stay tuned! If you have any
          questions, I can be reached at derekdapp@gmail.com.
        </Typography>

        <Link href="/" passHref>
          <Button variant="contained" startIcon={<Home />}>
            Return Home
          </Button>
        </Link>
      </Stack>
    </Box>
  </Section>
);

export default Everlly;
