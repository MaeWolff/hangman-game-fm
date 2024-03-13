<script setup lang="ts">
type ModalProps = {
  open: boolean;
};

const props = defineProps<ModalProps>();
</script>

<template>
  <HeadlessTransitionRoot appear :show="props.open" as="template">
    <HeadlessDialog
      :open="props.open"
      class="fixed inset-0 z-50 flex items-center justify-center px-4 text-white"
    >
      <HeadlessTransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black/45" />
      </HeadlessTransitionChild>

      <HeadlessTransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0 scale-95"
        enter-to="opacity-100 scale-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100 scale-100"
        leave-to="opacity-0 scale-95"
      >
        <HeadlessDialogPanel
          class="shadow-game relative z-10 flex h-[445px] w-full max-w-md flex-col items-center justify-center rounded-[48px] bg-gradient-to-b from-[#344abaf0] to-[#001479e7]"
        >
          <HeadlessDialogTitle
            as="h3"
            class="absolute -top-10 w-full md:-top-14"
          >
            <slot name="title" />
          </HeadlessDialogTitle>

          <div>
            <slot name="content" />
          </div>
        </HeadlessDialogPanel>
      </HeadlessTransitionChild>
    </HeadlessDialog>
  </HeadlessTransitionRoot>
</template>
