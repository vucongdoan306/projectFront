
<template>
  <div>
    <input
      type="radio"
      :tabindex="tabindex"
      :name="name"
      :checked="isChecked"
      :value="value"
      @change="$emit('change', $event.target.value)"
    />
    <span class="mgr--20 mgl--10"> {{label}}</span>
  </div>
</template>
<style scoped>
</style>
<script>
export default {
  model: {
    prop: "modelValue",
    event: "change",
  },
  emits: ["change"],
  props: {
    label: { type: String, default: "", required: true },
    modelValue: { default: 0 },
    value: { type: Number, default: 0 },
    tabindex: { type: Number, default: 0 },
    name: { type: String, default: "", required: true },

  },
  data() {
    return {
      isChecked: false,
    }
  },
  methods:{

  }
  

};
</script>