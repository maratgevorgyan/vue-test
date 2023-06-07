<script setup>
import { computed } from 'vue'
import { useDisplay } from 'vuetify'

const { smAndDown } = useDisplay()

const headerHeight = computed(() => (smAndDown.value ? 44 : 64))
</script>

<template>
  <v-app-bar id="header" class="bg-background" :height="headerHeight" :flat="true">
    <div class="brand text-extended">
      <img src="/img/logo.png" alt="Logo" />
      <span class="app-bar-title font-weight-medium">Homes & Castles St. Ingbert</span>
    </div>

    <div class="ml-auto">
      <span class="header-info">
        <i class="mdi mdi-phone-outline text-grey"></i>
        <a class="header-info-value" href="tel: 068987958329">06898 - 795 83 29</a>
      </span>
      <span class="header-info">
        <i class="mdi mdi-email-outline text-grey"></i>
        <a href="mailto:homes-castles@century21.de">homes-castles@century21.de</a>
      </span>
    </div>
  </v-app-bar>
</template>

<style lang="scss" scoped>
#header {
  border-bottom: 1px solid rgb(var(--v-theme-border));
  padding: 0 24px;
  line-height: 1;
  color: rgb(var(--v-theme-on-background));

  .v-toolbar__content {
    height: 64px;
  }
}

.brand {
  img {
    display: inline-block;
    width: 144px;
    height: auto;
  }

  .app-bar-title {
    display: inline-block;
    font-size: 12px;
    margin-inline-start: 4px;
    vertical-align: bottom;
  }
}

.header-info {
  margin-left: 40px;

  i {
    font-size: 18px;
    margin-right: 4px;
  }

  a {
    font-size: 14px;
    text-decoration: none;
    color: inherit;
    vertical-align: 2px;
  }
}

@media (max-width: 959px) {
  .brand {
    img {
      display: block;
      width: 100px;
    }

    .app-bar-title {
      text-align: center;
      display: block;
      font-size: 6px;
      margin-inline-start: 0;
      margin-top: 2px;
    }
  }
}
</style>
