<template>
  <div>
    <div class="idx-grid">
      <index-button :label="'自己紹介'" :to="'/profile'" :icon="['fas', 'address-card']" />
      <index-button :label="'ブログ'" :to="'/'" :icon="['fas', 'book']" />
      <index-button :label="'Twitter'" :tooltip="'Twitter @kuropen_aizu'" :to="'https://twitter.com/kuropen_aizu'" :icon="['fab', 'twitter-square']" />
      <index-button :label="'Facebook'" :to="'https://www.facebook.com/yuda.hirochika'" :icon="['fab', 'facebook-square']" />
      <index-button :label="'Instagram'" :tooltip="'Instagram @kuropen'" :to="'https://instagram.com/kuropen'" :icon="['fab', 'instagram-square']" />
      <index-button :label="'GitHub'" :to="'https://github.com/kuropen'" :icon="['fab', 'github']" />
      <index-button
        :label="'Dolphin (ActivityPub)'"
        :tooltip="'分散型SNS (Dolphin) 個人サーバ<br>@krpn@kuropen.me<br>Mastodon, MisskeyなどのActivityPub対応SNSを<br>ご利用の方はリモートフォローが可能です。'"
        :to="'https://kuropen.me/@krpn'"
        :image="require('~/assets/images/dolphin.png')"
      />
      <index-button :label="'SNSポリシー'" :to="'/social'" :icon="['fas', 'exclamation-circle']" />
      <index-button
        :label="'赤べこからパワーを'"
        :tooltip="'アマビエもいいけど赤べこも。<br>福島県会津地方に伝わる神聖な赤い牛を模した張り子人形・「赤べこ」は、<br>天然痘の感染から子供を守ったという言い伝えがあるなど、<br>感染防止のお守りとしても知られています。'"
        :to="'https://akabe.co/'"
        :image="require('~/assets/images/beko.png')"
        :color="'md:block bg-red-600 dark:bg-red-900 border-red-800 text-gray-200'"
      />
    </div>
  </div>
</template>

<script>
import IndexButton from '~/components/IndexButton.vue'
export default {
  components: { IndexButton }
}
</script>

<style lang="postcss">
  .idx-grid {
    @apply grid grid-cols-1 md:grid-cols-5 gap-3 text-xl md:text-center mt-4 md:mt-6 md:mb-6;
  }
</style>
