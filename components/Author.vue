<template>
  <box>
    <div class="author-card">
      <div class="author-left">
        <img src="~/assets/images/penguin.png" alt="アバターのペンギンアイコン">
      </div>
      <div class="author-right">
        <p>Author: <strong>Kuropen</strong></p>
        <div class="author-grid">
          <author-button :label="'自己紹介'" :to="'/profile'" :icon="['fas', 'address-card']" />
          <author-button :label="'SNSポリシー'" :to="'/social'" :icon="['fas', 'exclamation-circle']" />
          <author-button :label="'Twitter'" :tooltip="'Twitter @kuropen_aizu'" :to="'https://twitter.com/kuropen_aizu'" :icon="['fab', 'twitter-square']" />
          <author-button :label="'Facebook'" :to="'https://www.facebook.com/yuda.hirochika'" :icon="['fab', 'facebook-square']" />
          <author-button :label="'Instagram'" :tooltip="'Instagram @kuropen'" :to="'https://instagram.com/kuropen'" :icon="['fab', 'instagram-square']" />
          <author-button :label="'GitHub'" :to="'https://github.com/kuropen'" :icon="['fab', 'github']" />
          <author-button
            :label="'Dolphin (ActivityPub)'"
            :tooltip="'分散型SNS (Dolphin) 個人サーバ<br>@krpn@kuropen.me'"
            :to="'/activitypub'"
            :image="require('~/assets/images/dolphin.png')"
          />
        </div>
      </div>
    </div>
  </box>
</template>

<style lang="postcss">
  .author-card {
    @apply flex flex-row;
  }
  .author-left {
    @apply flex-initial mr-4;
  }
  .author-left img {
    @apply h-12 md:h-16 rounded-full;
  }
  .author-right {
    @apply flex-1;
  }
  .author-name {
    @apply text-2xl border-indigo-700 border-b-4;
  }
  .author-grid {
    @apply mt-2 grid grid-flow-col grid-rows-2 md:grid-rows-1 gap-1 text-xl text-center justify-start;
  }
</style>
