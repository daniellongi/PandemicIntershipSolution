<template>
    <li>
      <a
        :href="href"
        :class="['block px-3 py-2 rounded-md', isActive ? 'bg-sky-500 text-white' : 'bg-slate-50  text-slate-400']"
      >
        <slot></slot>
      </a>
    </li>
  </template>
  
  <script>
    export default {
      props: {
        href: {
          type: String,
          required: true,
        },
        isActive: Boolean,
      },
      watch:{
        isActive: function(newVal, oldVal) { // watch it
              console.log('Prop changed: ', newVal, ' | was: ', oldVal)
        }
      }
    }
  </script>
  