<template>
  <NuxtLayout name="page">
    <MainTitle>Privacy Policy</MainTitle>
    <SectionParagraph>
      I, Aniket Kotal, with this privacy policy, explain how I collect and use the data.
    </SectionParagraph>
    <SectionParagraph>
      I use
      <LinkBtn link="https://marketingplatform.google.com/about/analytics/" text="Google Analytics"/>
      to collect and analyse anonymous data about my website's visitors. All data collected is anonymous and is used by
      me
      to learn about my website's reach.
    </SectionParagraph>

    <NuxtLayout name="section">
      <SectionTitle>What am I collecting?</SectionTitle>
      <SectionParagraph>The following information is being collected:</SectionParagraph>
      <ListItem>Number of Users</ListItem>
      <ListItem>Number of Sessions</ListItem>
      <ListItem>Approximate Geolocation of the User</ListItem>
      <ListItem>Browser and Device Information</ListItem>
    </NuxtLayout>

    <NuxtLayout name="section">
      <SectionTitle>How is the data used?</SectionTitle>
      <SectionParagraph>The collected data is used to learn about basic geolocation of the website's visitors, which
        type of devices my website is used on, and the browser used to access my website.
      </SectionParagraph>
    </NuxtLayout>
  </NuxtLayout>
</template>
