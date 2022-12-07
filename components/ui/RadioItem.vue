<template>
  <div>
    <input type="radio" :name="name" :value="value" :checked="checked"/>
    <label :for="value"><slot/></label>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  name: string;
  value: string;
  checked: boolean;
}>();
</script>