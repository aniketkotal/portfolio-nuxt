<template>
  <div>
    <NuxtLayout name="page">
      <NuxtLayout name="section">
        <SectionTitle>Tools</SectionTitle>
        <MainTitle>Change Case</MainTitle>
      </NuxtLayout>
      <MainParagraph>
        A simple tool to change the case of your text, with some extra features. Start by
        entering your text in the box below. You can then choose the case you want to convert.
      </MainParagraph>
      <NuxtLayout name="section">
        <RadioGroup/>
        <InputBox/>
      </NuxtLayout>
    </NuxtLayout>
  </div>
</template>