<template>
  <div class="flex justify-between items-center">
    <div class="flex gap-1">
      <SocialIcon
        title="Github"
        link="https://github.com/mightykillrr"
        icon="ant-design:github-filled"
      />
      <SocialIcon
        title="Twitter"
        link="https://twitter.com/mightykillrr"
        icon="ant-design:twitter-outlined"
      />
    </div>
    <ActionButton link="mailto:aniket1010104@gmail.com">Email Me</ActionButton>
  </div>
</template>

<script>
import SocialIcon from "../ui/SocialIcon.vue";
import ActionButton from "../ui/ActionButton.vue";

export default {
  setup() {},
  components: { SocialIcon, ActionButton },
};
</script>
